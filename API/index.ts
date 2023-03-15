type CardsType = {
  id: number;
  title: string;
  author?: object;
  views?: string;
  likes?: number;
  bookmarked?: boolean;
  image?: string;
};

export const cards: CardsType[] = [
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
    likes: 54,
    bookmarked: false,
    image:
      'https://sun9-81.userapi.com/impg/VqrmbztEXnas1uCpDD4OpEz9QGUDADW_PxRXQw/C0LDQUtsEDM.jpg?size=537x240&quality=96&sign=9a063dcc6adf27537a6d9184a2c06c7a&type=share',
  },
];
