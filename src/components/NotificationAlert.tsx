import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { clearNotification } from '../store/promotionsSlice';
import { Snackbar, Alert } from '@mui/material';

const NotificationAlert: React.FC = () => {
  const dispatch = useAppDispatch();
  const notification = useAppSelector(state => state.promotions.notification);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification, dispatch]);

  const handleClose = () => {
    dispatch(clearNotification());
  };

  return (
    <Snackbar
      open={!!notification}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
        {notification}
      </Alert>
    </Snackbar>
  );
};

export default NotificationAlert;