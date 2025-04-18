import { configureStore } from '@reduxjs/toolkit';
import promotionsReducer from './promotionsSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
//import type { RootState, AppDispatch } from './store';

export const store = configureStore({
    reducer: {
        promotions: promotionsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

