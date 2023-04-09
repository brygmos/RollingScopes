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
  static async getCharacterById(id: number) {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    return await fetch(url);
  }
  // return await fetch(url);

  // return async () => {
  //   const authUserId = getState().auth.id
  //   let data = await profileAPI.saveProfile(editDataAboutMe)
  //   if (data.resultCode === 0) {
  //     dispatch(setUserProfileThunkCreator(authUserId))
  //     return Promise.resolve()
  //   } else {
  //     dispatch(stopSubmit('AboutMeEditForm', {_error: data.messages[0]}))
  //     return Promise.reject()
  //   }
  // }
}
