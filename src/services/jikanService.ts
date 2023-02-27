import { httpRequest } from '../httpRequest/httpRequest'
import { IResponseAnimeList } from './IResponse';

import {transformAnimeList} from './transformData';


export const getAnimeList = async () => {
  const animeListData = await httpRequest('https://api.jikan.moe/v4/anime?limit=16') as IResponseAnimeList ;

  return transformAnimeList(animeListData)
}