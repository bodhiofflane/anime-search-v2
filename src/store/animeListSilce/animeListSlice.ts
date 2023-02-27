import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import { getAnimeList } from '../../services/jikanService';

import { IAnimeListItem, IPagination } from './IAnimeList';

interface IInitialState {
  pagination: IPagination;
  animeList: IAnimeListItem[];
  loadingStatus: 'idle' | 'loading';
  error: string | unknown;
}

const initialState: IInitialState = {
  pagination: {
    lastVisiblePage: 0,
    currentPage: 0,
    count: 0,
    total: 0,
    perPage: 0,
  },
  animeList: [],
  loadingStatus: 'idle',
  error: '',
};

export const fetchAnimeList = createAsyncThunk(
  'animeList/fetchAnimeList',
  () => {
    return getAnimeList();
  }
)

const animeListSlice = createSlice({
  name: 'animeList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeList.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchAnimeList.fulfilled, (state, action) => {
        state.animeList = action.payload.animeList;
        state.pagination = action.payload.pagination;
        state.loadingStatus = 'idle';
      })
      .addCase(fetchAnimeList.rejected, (state, action) => {
        state.loadingStatus = 'idle';
        state.error = action.payload;
      })
  }
})

export default animeListSlice.reducer;