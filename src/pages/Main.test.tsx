import { setupServer } from 'msw/node';
import { expect, it, Mock } from 'vitest';
import { handlers } from '../mocks/handlers';
import { act, render } from '@testing-library/react';
import React from 'react';
import Main from './Main';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

//TODO test main

// const server = setupServer(...handlers);
//
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
//
// global.fetch = vi.fn(() => {
//   Promise.resolve({
//     json: () => {
//       Promise.resolve(handlers).then((r) => console.log(r));
//     },
//   }).then((r) => console.log(r));
// }) as Mock;
//
// describe('fetch', () => {
//   it('correctly get data', async () => {
//     await act(async () =>
//       render(
//         <Provider store={store}>
//           <Main />
//         </Provider>
//       )
//     );
//     const response = await Api.getAllCharacters();
//     const data = await response.json();
//     expect(data.results[0].id).toEqual(20);
//     expect(data.results.length).toEqual(1);
//     expect(data.results[0].name).toEqual('Ants in my Eyes Johnson');
//   });
//   it('correctly get data by user id', async () => {
//     await act(async () =>
//       render(
//         <Provider store={store}>
//           <Main />
//         </Provider>
//       )
//     );
//     const response = await Api.getCharacterById(20);
//     const data = await response.json();
//     expect(data.id).toEqual(20);
//     expect(data.name).toEqual('Ants in my Eyes Johnson');
//   });
//   it('correctly get data by query', async () => {
//     await act(async () =>
//       render(
//         <Provider store={store}>
//           <Main />
//         </Provider>
//       )
//     );
//     const response = await Api.getCharactersByQuery('pibble');
//     const data = await response.json();
//     expect(data.results.length).toEqual(2);
//     expect(data.results[0].id).toEqual(263);
//   });
// });
