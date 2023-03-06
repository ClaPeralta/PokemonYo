const { Router } = require("express");
const { getTypesTotal } = require("../controllers/TypeController.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    let currentTypes = await getTypesTotal();
    currentTypes = currentTypes.filter(
      (type) => type !== "unknown" && type !== "shadow"
    );
    return res.status(200).send(currentTypes);
  } catch (e) {
    return res.status(400).send("Types not founded.");
  }
});

module.exports = router;


