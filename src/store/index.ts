import {configureStore} from '@reduxjs/toolkit';

import animeListSlice from './animeListSilce/animeListSlice';

const store = configureStore({
  reducer: {
    animeList: animeListSlice,
  },
  middleware: gDM => gDM(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

// Получаем сигнатуру глобального стейта.
export type RootState = ReturnType<typeof store.getState>;
// Из здесь, но тут хз.
export type AppDispatch = typeof store.dispatch;