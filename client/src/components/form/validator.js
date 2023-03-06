export default function validator(input) {
  // El pattern que vamos a comprobar
  const name = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  let errors = {};

  //Valiodate name input

  if (!name.test(input.name)) {
    errors.name = "can only enter letters";
  }

  if (!input.name) {
    errors.name = "Name is necessary";
  }

  if (input.life > 255 || !input.life || input.life < 1) {
    errors.life = "Life is required and must be between 1 and 255";
  }

  if (input.attack > 255 || !input.attack || input.attack < 1) {
    errors.attack = "Attack is necessary and must be between 1 and 255";
  }

  if (input.defense > 255 || !input.defense || input.defense < 1) {
    errors.defense = "Defense is necessary and must be between 1 and 255";
  }

  if (input.speed > 255 || !input.speed || input.speed < 1) {
    errors.speed = "Speed is necessary and must be between 1 and 255";
  }

  if (!input.height) {
    errors.height = "Height is necessary";
  }

  if (!input.weight) {
    errors.weight = "Weight is necessary";
  }

  //Select control
  const t2 = document.getElementById("t2");

  if (!input.type1) {
    errors.selected = "type at least one is required";
  } else {
    t2.disabled = false;
  }

  //button control
  const button = document.getElementById("id-sub");
  if (
    input.name &&
    input.life &&
    input.attack &&
    input.defense &&
    input.speed &&
    input.height &&
    input.weight &&
    input.type1
  ) {
    button.disable = false;
    button.setAttribute("style", "opacity: 1;");
  } else {
    button.disable = true;
    button.setAttribute("style", "opacity: 0.5;");
  }

  return errors;
}
