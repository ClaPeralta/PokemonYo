const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    life: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 255 },
    },

    attack: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 255 },
    },

    defense: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 255 },
    },

    speed: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 255 },
    },

    height: {
      type: DataTypes.INTEGER,
    },

    weight: {
      type: DataTypes.INTEGER,
    },

    sprite: {
      type: DataTypes.STRING,
      validate: { isUrl: true },
      defaultValue:
        "https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-0.png",
    },

    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
