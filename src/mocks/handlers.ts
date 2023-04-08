import { rest } from 'msw';
export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            id: 20,
            name: 'Ants in my Eyes Johnson',
            status: 'unknown',
            species: 'Human',
            type: 'Human with ants in his eyes',
            gender: 'Male',
            origin: {
              name: 'unknown',
              url: '',
            },
            location: {
              name: 'Interdimensional Cable',
              url: 'https://rickandmortyapi.com/api/location/6',
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
            episode: ['https://rickandmortyapi.com/api/episode/8'],
            url: 'https://rickandmortyapi.com/api/character/20',
            created: '2017-11-04T22:34:53.659Z',
          },
        ],
      })
    );
  }),
];