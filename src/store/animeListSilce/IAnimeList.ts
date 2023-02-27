export interface IPagination {
  lastVisiblePage: number;
  currentPage: number;
  count: number;
  total: number;
  perPage: number;
}

export interface IAnimeListItem {
  id: number;
  title: string;
  titleJapanese: string;
  url: string;
  thumbnail: string;
  trailer: {
    youTubeId: string;
    youTubeUrl: string;
    embedUrl: string;
  };
  type: string;
  source: string;
  status: string;
  aired: {
    from: number;
    to: number;
    string: string;
  };
  duration: string;
  rating: string;
  score: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  studios: {
    id: number;
    studio: string;
  }[];
  genres: {
    id: number;
    name: string;
  }[];
  themes: {
    id: number;
    name: string;
  }[];
  demographics: {
    id: number;
    name: string;
  }[];
}
