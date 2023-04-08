export default class Api {
  getAllCharacters = async () => {
    const url = `https://rickandmortyapi.com/api/character`;
    // if (response.ok) {
    //   const data = await response.json();
    //   setCards(await data.results);
    // } else {
    //   console.log('HTTP error: ' + response.status);
    // }
    return await fetch(url);
  };

  static async getAllCharacters() {
    const url = `https://rickandmortyapi.com/api/character`;
    return await fetch(url);
  }
}
