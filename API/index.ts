type CardsType = {
  id?: number;
  title?: string;
  author?: author;
  views?: string;
  likes?: number;
  bookmarked?: boolean;
  image?: string;
  email?: string;
  role?: string;
  selector?: string;
  date?: string;
  category?: string;
};
type author = {
  firstname: string;
  lastname: string;
};
const cards: CardsType[] = [
  {
    id: 0,
    title: 'Title',
    author: { firstname: 'Daniil', lastname: 'Danilov' },
    views: '666666',
    likes: 55,
    bookmarked: true,
    image: 'https://www.syl.ru/misc/i/ai/187028/780025.jpg',
  },
  {
    id: 1,
    title: 'Another title',
    author: { firstname: 'Ivan', lastname: 'Ivanov' },
    views: '4363',
    role: 'student',
    likes: 54,
    bookmarked: false,
    image:
      'https://sun9-81.userapi.com/impg/VqrmbztEXnas1uCpDD4OpEz9QGUDADW_PxRXQw/C0LDQUtsEDM.jpg?size=537x240&quality=96&sign=9a063dcc6adf27537a6d9184a2c06c7a&type=share',
  },
  {
    id: 2,
    title: 'Long title in few strings',
    author: { firstname: 'Ivan', lastname: 'Ivanov' },
    views: '4363',
    likes: 54,
    bookmarked: false,
    category: 'fghj',
    image:
      'https://sun9-81.userapi.com/impg/VqrmbztEXnas1uCpDD4OpEz9QGUDADW_PxRXQw/C0LDQUtsEDM.jpg?size=537x240&quality=96&sign=9a063dcc6adf27537a6d9184a2c06c7a&type=share',
  },
  {
    id: 3,
    title: 'Another title',
    author: { firstname: 'Ivan', lastname: 'Ivanov ibn suleyman hattab naseri abdul' },
    views: '4363',
    likes: 54,
    bookmarked: false,
    image:
      'https://sun9-81.userapi.com/impg/VqrmbztEXnas1uCpDD4OpEz9QGUDADW_PxRXQw/C0LDQUtsEDM.jpg?size=537x240&quality=96&sign=9a063dcc6adf27537a6d9184a2c06c7a&type=share',
  },
  {
    id: 4,
    title: 'Another title',
    author: { firstname: 'Ivan', lastname: 'Ivanov' },
    views: '436565555555555555553',
    likes: 54,
    bookmarked: false,
    image:
      'https://sun9-81.userapi.com/impg/VqrmbztEXnas1uCpDD4OpEz9QGUDADW_PxRXQw/C0LDQUtsEDM.jpg?size=537x240&quality=96&sign=9a063dcc6adf27537a6d9184a2c06c7a&type=share',
  },
  {
    id: 5,
    title: 'Another title',
    author: { firstname: 'Ivan', lastname: 'Ivanov' },
    views: '4363',
    likes: 54,
    bookmarked: false,
    category: 'fgh',
    image:
      'https://sun9-81.userapi.com/impg/VqrmbztEXnas1uCpDD4OpEz9QGUDADW_PxRXQw/C0LDQUtsEDM.jpg?size=537x240&quality=96&sign=9a063dcc6adf27537a6d9184a2c06c7a&type=share',
  },
  {
    id: 6,
    title: 'Another title',
    author: { firstname: 'Ivan', lastname: 'Ivanov' },
    views: '4363',
    likes: 54,
    bookmarked: false,
    image:
      'https://sun9-81.userapi.com/impg/VqrmbztEXnas1uCpDD4OpEz9QGUDADW_PxRXQw/C0LDQUtsEDM.jpg?size=537x240&quality=96&sign=9a063dcc6adf27537a6d9184a2c06c7a&type=share',
  },
];

export function getCardsByFakeAPI() {
  return cards;
}
