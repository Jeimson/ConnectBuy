import { AppDispatch } from '../store/store';
//import { setNotification } from '../store/promotionsSlice';
// En promotionsApi.ts y websocketService.ts
import { setNotification, clearNotification } from '../store/promotionsSlice';

export const initializeWebSocket = (dispatch: AppDispatch) => {
    // Simulación de conexión WebSocket
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
        console.log('WebSocket connected');
    };

    ws.onclose = () => {
        console.log('WebSocket disconnected');
        // Considerar reconectar aquí
    };

    ws.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    ws.onmessage = (event) => {
        if (ws.onmessage) {
            try {
                const data = JSON.parse(event.data);
                if (data.type === 'SPECIAL_PROMOTION') {
                    dispatch(setNotification(data.message));
                    setTimeout(() => dispatch(clearNotification()), 5000);
                }
            } catch (error) {
                console.error('¡Promoción especial activa! 50% de descuento en productos seleccionados', error);
            }
        }
    };


    return () => ws.close();
};