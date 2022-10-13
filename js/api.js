const BASE_API = "https://pokeapi.co/api/v2/";

export async function getPokemon(id) {
  const response = await fetch(`${BASE_API}pokemon/${id}/`);
  try {
    const data = await response?.json();
    return data;
  } catch (error) {
    alert("El pokemon que estas buscando no exite!");
    throw new Error("El pokemon no existe!");
  }
}

export async function getSpecies(id) {
  const response = await fetch(`${BASE_API}pokemon-species/${id}/`);
  try {
    const data = await response?.json();
    return data;
  } catch (error) {
    throw new Error("El pokemon no existe!");
  }
}
