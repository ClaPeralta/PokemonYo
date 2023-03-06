const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//importando las rutas
const pokemonsRouter = require("./pokemon.js");
const typesRouter = require("./type.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", pokemonsRouter);
router.use("/types", typesRouter);

module.exports = router;
