import {IResponseAnimeList} from './IResponse';

export const transformAnimeList = (data: IResponseAnimeList) => {
  return {
    pagination: {
      lastVisiblePage: data.pagination.last_visible_page,
      currentPage: data.pagination.current_page,
      count: data.pagination.items.count,
      total: data.pagination.items.total,
      perPage: data.pagination.items.per_page,
    },
    animeList: data.data.map((oneAnime) => {
      return {
        id: oneAnime.mal_id,
        title: oneAnime.title,
        titleJapanese: oneAnime.title_japanese,
        url: oneAnime.url,
        thumbnail: oneAnime.images.webp.large_image_url,
        trailer: {
          youTubeId: oneAnime.trailer.youtube_id,
          youTubeUrl: oneAnime.trailer.url,
          embedUrl: oneAnime.trailer.embed_url,
        },
        type: oneAnime.type,
        source: oneAnime.source,
        status: oneAnime.status,
        aired: {
          from: new Date(oneAnime.aired.from).getFullYear(),
          to: new Date(oneAnime.aired.to).getFullYear(),
          string: oneAnime.aired.string,
        },
        duration: oneAnime.duration,
        rating: oneAnime.rating,
        score: oneAnime.score,
        rank: oneAnime.rank,
        popularity: oneAnime.popularity,
        members: oneAnime.members,
        favorites: oneAnime.favorites,
        synopsis: oneAnime.synopsis,
        background: oneAnime.background,
        broadcast: oneAnime.broadcast,
        studios: oneAnime.studios.map((studio) => {
          return {
            id: studio.mal_id,
            studio: studio.name,
          };
        }),
        genres: oneAnime.genres.map((genre) => {
          return {
            id: genre.mal_id,
            name: genre.name,
          };
        }),
        themes: oneAnime.themes.map((theme) => {
          return {
            id: theme.mal_id,
            name: theme.name,
          };
        }),
        demographics: oneAnime.demographics.map((item) => {
          return {
            id: item.mal_id,
            name: item.name,
          };
        }),
      };
    }),
  };
};