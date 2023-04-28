const axios = require("axios");
const { Pokemon, Type } = require("../db.js");

const API_POKEMON_NAME_OR_ID = "http://pokeapi.co/api/v2/pokemon/";

const getApiInfo = async () => {
  try {
    const pokeRequest = await axios.get(
      "http://pokeapi.co/api/v2/pokemon?limit=44"
    );
    const pokeSubRequest = pokeRequest.data.results.map((el) =>
      axios.get(el.url)
    );
    const infoUrl = await axios.all(pokeSubRequest); //pedidos simultaneos
    //console.log("leyo esta parte???");
    let pokemons = infoUrl.map((el) => el.data);
    let infoPokemons = pokemons.map((pokemon) => objPokeApi(pokemon)); //
    return infoPokemons;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const getDbInfo /*getPokedb*********/ = async () => {
  try {
    return await Pokemon.findAll({
      //trae los poke, que incluyan el nombre del type
      include: {
        model: Type,
        attributes: ["name"], //trae el name del type
      },
    });
  } catch (e) {
    console.log(e);
    return e;
  }
};

const getAllPokes = async () => {
  try {
    const apiPokeData = await getApiInfo();
    const dbPokeData = await getDbInfo();
    //console.log(dbPokeData);
    return [...apiPokeData, ...dbPokeData];
  } catch (e) {
    console.log(e);
    return e;
  }
};

const getPokeById = async (id) => {
  try {
    if (id.length > 2) {
      const searchPokeIdDB = await Pokemon.findOne({
        where: { id },
        include: Type,
      });
      let pokedbId = {
        id: searchPokeIdDB.id,
        name: searchPokeIdDB.name,
        life: searchPokeIdDB.life,
        attack: searchPokeIdDB.attack,
        defense: searchPokeIdDB.defense,
        speed: searchPokeIdDB.speed,
        height: searchPokeIdDB.height,
        weight: searchPokeIdDB.weight,
        sprite: searchPokeIdDB.sprite,
        types:
          searchPokeIdDB.types.length < 2
            ? [searchPokeIdDB.types[0]]
            : [searchPokeIdDB.types[0], searchPokeIdDB.types[1]],
      };
      return pokedbId;
    } else {
      const searchPokeapiId = await axios.get(
        `${API_POKEMON_NAME_OR_ID}${id.toString()}`
      );
      const foundPokeapiId = objPokeApi(searchPokeapiId.data);
      // console.log('foundPokeapi', foundPokeapiId)
      return foundPokeapiId; //pokemon por id de la api
    }
  } catch (e) {
    console.log(e);
    return e;
  }
};

const getPokeByName = async (name) => {
  try {
    const searchPokeNameDB = await Pokemon.findOne({
      where: { name }, //encuentra primera coincidencia
      include: { model: Type },
    });
    if (searchPokeNameDB) {
      let pokedbName = {
        id: searchPokeNameDB.id,
        name: searchPokeNameDB.name,
        life: searchPokeNameDB.life,
        attack: searchPokeNameDB.attack,
        defense: searchPokeNameDB.defense,
        speed: searchPokeNameDB.speed,
        height: searchPokeNameDB.height,
        weight: searchPokeNameDB.weight,
        sprite: searchPokeNameDB.sprite,
        types:
          searchPokeNameDB.types.length < 2
            ? [searchPokeNameDB.types[0]]
            : [searchPokeNameDB.types[0], searchPokeNameDB.types[1]],
      };
      return pokedbName;
    } else {
      const searchPokeapiName = await axios.get(
        `${API_POKEMON_NAME_OR_ID}${name.toLowerCase()}`
      ); //obtengo el pokemon de la url/name
      const foundPokeapiName = objPokeApi(searchPokeapiName.data);
      // console.log('foundPokeapi', foundPokeapiName)
      return foundPokeapiName;
    }
  } catch (e) {
    console.log(e);
    return e;
  }
};

const objPokeApi = (poke) => {
  const objPokeapi = {
    id: poke.id,
    name: poke.name,
    life: poke.stats[0].base_stat,
    attack: poke.stats[1].base_stat,
    defense: poke.stats[2].base_stat,
    speed: poke.stats[5].base_stat,
    height: poke.height,
    weight: poke.weight,
    sprite: poke.sprites.other["official-artwork"].front_default,
    types:
      poke.types.length < 2
        ? [{ name: poke.types[0].type.name }]
        : [
            { name: poke.types[0].type.name },
            { name: poke.types[1].type.name },
          ],
  };
  return objPokeapi;
};

//para hacer pokepost

async function postPokedb(pokeData) {
  try {
    const {
      name,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      sprite,
      types,
    } = pokeData;
    const myPoke = await Pokemon.create({
      name,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      sprite,
    });
    const pokeTypedb = await Type.findAll({
      where: { name: types }, //donde el name coincida con los types que me pasan
    });

    let createdMyPoke = myPoke.addType(pokeTypedb);
    return createdMyPoke;
  } catch (e) {
    console.log(e);
    return e;
  }

  // const { name, life, attack, defense, speed, height, weight, sprite, types } =
  //   pokeData;
  // const myPoke = await Pokemon.create({
  //   name,
  //   life,
  //   attack,
  //   defense,
  //   speed,
  //   height,
  //   weight,
  //   sprite,
  // });
  // const pokeTypedb = await Type.findAll({
  //   where: { name: types }, //donde el name coincida con los types que me pasan
  // });

  // let createdMyPoke = myPoke.addType(pokeTypedb);
  // return createdMyPoke;
}

module.exports = {
  getApiInfo,
  getDbInfo,
  getAllPokes,
  getPokeById,
  getPokeByName,
  postPokedb,
};
