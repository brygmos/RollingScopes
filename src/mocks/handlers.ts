import { rest } from 'msw';
export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    const param = req.url.searchParams.get('name');
    if (param) {
      return res(
        ctx.status(200),
        ctx.json({
          info: {
            count: 2,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [
            {
              id: 263,
              name: 'Pibbles Bodyguard',
              status: 'Alive',
              species: 'Alien',
              type: 'Hairy alien',
              gender: 'Male',
              origin: {
                name: 'unknown',
                url: '',
              },
              location: {
                name: 'St. Gloopy Noops Hospital',
                url: 'https://rickandmortyapi.com/api/location/16',
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/263.jpeg',
              episode: ['https://rickandmortyapi.com/api/episode/19'],
              url: 'https://rickandmortyapi.com/api/character/263',
              created: '2017-12-31T13:43:30.513Z',
            },
            {
              id: 321,
              name: 'Shrimply Pibbles',
              status: 'Alive',
              species: 'Alien',
              type: '',
              gender: 'Male',
              origin: {
                name: 'unknown',
                url: '',
              },
              location: {
                name: 'St. Gloopy Noops Hospital',
                url: 'https://rickandmortyapi.com/api/location/16',
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/321.jpeg',
              episode: ['https://rickandmortyapi.com/api/episode/19'],
              url: 'https://rickandmortyapi.com/api/character/321',
              created: '2018-01-05T15:07:50.789Z',
            },
          ],
        })
      );
    } else {
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
    }
  }),
  rest.get('https://rickandmortyapi.com/api/character/321', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
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
      })
    );
  }),
  rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
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
      })
    );
  }),
];
