import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Promotion, Filters, PromotionsState } from '../types/types';

const initialState: PromotionsState = {
    promotions: [],
    filteredPromotions: [],
    filters: {
        category: '',
        store: '',
        maxDistance: 10,
    },
    loading: false,
    error: null,
    notification: null,
};

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState,
    reducers: {
        setPromotions(state, action: PayloadAction<Promotion[]>) {
            state.promotions = action.payload;
            state.filteredPromotions = action.payload;
        },
        setFilters(state, action: PayloadAction<Filters>) {
            state.filters = action.payload;
            // Aplicar filtros
            state.filteredPromotions = state.promotions.filter(promotion => {
                return (
                    (state.filters.category === '' || promotion.category === state.filters.category) &&
                    (state.filters.store === '' || promotion.store.includes(state.filters.store)) &&
                    promotion.distance <= state.filters.maxDistance
                );
            });
        },
        setNotification(state, action: PayloadAction<string>) {
            state.notification = action.payload;
        },
        clearNotification(state) {
            state.notification = null;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    },
});

export const {
    setPromotions,
    setFilters,
    setNotification,
    clearNotification,
    setLoading,
    setError
} = promotionsSlice.actions;

export default promotionsSlice.reducer;