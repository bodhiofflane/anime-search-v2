import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';

import type {RootState, AppDispatch} from '../store';

// Задаем сигнатуру общего стейта для useSelector.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// А здесь для диспатча.
export const useAppDispatch = () => useDispatch<AppDispatch>();
