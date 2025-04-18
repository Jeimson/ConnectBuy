//import axios from 'axios';
import { Promotion } from '../types/types';
import { AppDispatch } from '../store/store';
// En promotionsApi.ts y websocketService.ts
//import { setLoading, setPromotions, setError, setNotification, clearNotification } from '../store/promotionsSlice';
import { setLoading, setPromotions, setError } from '../store/promotionsSlice';

//const API_URL = 'https://api.example.com/promotions';

export const fetchPromotions = async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));
        // Simulación de API
        const mockPromotions: Promotion[] = [
            {
                id: 1,
                title: 'Descuento en electrónicos',
                description: '20% de descuento en todos los electrónicos',
                category: 'electronics',
                store: 'TechStore',
                distance: 2.5,
                isSpecial: false,
                imageUrl: 'https://via.placeholder.com/150',
                expirationDate: '2023-12-31',
            },
            // Más promociones...
        ];

        // Simular retraso de red
        await new Promise(resolve => setTimeout(resolve, 1000));

        dispatch(setPromotions(mockPromotions));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setError('Error al cargar las promociones'));
        dispatch(setLoading(false));
    }
};