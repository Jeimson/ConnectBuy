import React, { useEffect } from "react";
import PromotionCard from "./PromotionCard";
import { fetchPromotions } from "../api/promotionsApi";
import { useAppDispatch, useAppSelector } from "../store/store";
import { Grid, CircularProgress, Typography, Box } from "@mui/material";
import { initializeWebSocket } from "../api/websocketService";

const PromotionList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filteredPromotions, loading, error } = useAppSelector(
    (state) => state.promotions
  );

  useEffect(() => {
    dispatch(fetchPromotions);
    const cleanup = initializeWebSocket(dispatch);
    return cleanup;
  }, [dispatch]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {filteredPromotions.length > 0 ? (
        filteredPromotions.map((promotion) => (
          //<Grid item xs={12} sm={6} md={4} key={promotion.id}>
          <Grid key={promotion.id}>
            <PromotionCard promotion={promotion} />
          </Grid>
        ))
      ) : (
        <Box width="100%" textAlign="center" p={4}>
          <Typography>
            No se encontraron promociones con los filtros seleccionados
          </Typography>
        </Box>
      )}
    </Grid>
  );
};

export default PromotionList;
