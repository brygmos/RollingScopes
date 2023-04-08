export default class Api {
  static async getAllCharacters() {
    const url = `https://rickandmortyapi.com/api/character`;
    return await fetch(url);
  }
  static async getCharactersByQuery(query: string) {
    const url = `https://rickandmortyapi.com/api/character?`;
    return await fetch(
      url +
        new URLSearchParams({
          name: query,
        })
    );
  }
}
