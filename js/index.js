import "./charts.js";
import { setPokemon, setImage } from "./pokedex.js";

const $form = document.querySelector("#form");
const $next = document.querySelector("#next-pokemon");
const $prev = document.querySelector("#prev-pokemon");
const $nextImage = document.querySelector("#next-image");
const $prevImage = document.querySelector("#prev-image");
const $aleatorio = document.querySelector(".boton-grande");
const $pokedex = document.querySelector("#pokedex");

$form.addEventListener("submit", handleSubmit);
$next.addEventListener("click", handleNextPokemon);
$prev.addEventListener("click", handlePrevPokemon);
$aleatorio.addEventListener("click", handleAleatorioPokemon);
$nextImage.addEventListener("click", handleNextImagePokemon);
$prevImage.addEventListener("click", handlePrevImagePokemon);

let activePokemon = null;
async function handleSubmit(event) {
  event.preventDefault();
  $pokedex.classList.add("is-open");
  let form = new FormData($form);
  let id = form.get("id");
  activePokemon = await setPokemon(id);
}

async function handleNextPokemon() {
  const id =
    activePokemon === null || activePokemon.id === 898
      ? 1
      : activePokemon.id + 1;
  activePokemon = await setPokemon(id);
  const $IdForm = $form.querySelector("input");
  $IdForm.value = id;
}

async function handlePrevPokemon() {
  const id =
    activePokemon === null || activePokemon.id === 1
      ? 898
      : activePokemon.id - 1;
  activePokemon = await setPokemon(id);
  const $IdForm = $form.querySelector("input");
  $IdForm.value = id;
}

async function handleAleatorioPokemon() {
  const id = Math.round(Math.random() * 898);
  activePokemon = await setPokemon(id);
  const $IdForm = $form.querySelector("input");
  $IdForm.value = id;
  $pokedex.classList.add("is-open");
}

let activeSprite = 0;
function handleNextImagePokemon() {
  if (activePokemon === null) return false;
  if (activeSprite >= activePokemon.sprites.length - 1) {
    activeSprite = 0;
    return setImage(activePokemon.sprites[activeSprite]);
  }
  activeSprite = activeSprite + 1;
  return setImage(activePokemon.sprites[activeSprite]);
}

function handlePrevImagePokemon() {
  if (activePokemon === null) return false;
  if (activeSprite <= 0) {
    activeSprite = activePokemon.sprites.length - 1;
    return setImage(activePokemon.sprites[activeSprite]);
  }
  activeSprite = activeSprite - 1;
  return setImage(activePokemon.sprites[activeSprite]);
}
