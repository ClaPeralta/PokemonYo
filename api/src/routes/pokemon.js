const { Router } = require("express");
const {
  getAllPokes,
  getPokeByName,
  getPokeById,
  postPokedb,
} = require("../controllers/PokemonController.js");

const router = Router();

//ruta a pokemons  y pokemons/?name
router.get("/", async (req, res) => {
  try {
    const { name } = req.query; //cuando hago la consulta en el front
    if (!name) {
      return res.status(200).send(await getAllPokes()); //Trae todos los pokemons
    } else {
      const pokeFoundName = await getPokeByName(name); // En caso de que se envie un name Busca el pokemon por name
      if (pokeFoundName) {
        return res.status(200).json(pokeFoundName);
      }
    }
  } catch (e) {
    console.log("error");
    return res.status(404).send("Pokemon not found"); // Encaso de que la api no funcione o no encuntre el pokemon
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const pokeFoundId = await getPokeById(id);
    if (pokeFoundId) return res.status(200).json(pokeFoundId);
  } catch (e) {
    console.log("entro error");
    return res.status(404).send("Pokemon not found");
  }
});

router.post("/", async (req, res) => {
  try {
    const pokeData = req.body;
    // console.log('daleeeeeeeeeeeee', pokeData)
    await postPokedb(pokeData);
    return res.status(200).send("Pokemon successfully created");
  } catch (e) {
    res.status(400).send("Failed to create a pokemon");
  }
});

module.exports = router;
