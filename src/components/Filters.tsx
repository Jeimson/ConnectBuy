import React from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setFilters } from "../store/promotionsSlice";
import {
  Slider,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  SelectChangeEvent,
} from "@mui/material";

const Filters: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.promotions);

  const categories = ["electronics", "clothing", "food", "home", "all"];
  const stores = [
    "TechStore",
    "FashionShop",
    "SuperMarket",
    "HomeCenter",
    "all",
  ];

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    dispatch(
      setFilters({ ...filters, category: event.target.value as string })
    );
  };

  const handleStoreChange = (event: SelectChangeEvent<string>) => {
    dispatch(setFilters({ ...filters, store: event.target.value as string }));
  };

  const handleDistanceChange = (_event: Event, value: number | number[]) => {
    dispatch(setFilters({ ...filters, maxDistance: value as number }));
  };

  return (
    <Box sx={{ p: 3, mb: 2, bgcolor: "background.paper" }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="category-label">Categoría</InputLabel>
        <Select
          labelId="category-label"
          value={filters.category}
          label="Categoría"
          onChange={handleCategoryChange}
        >
          <MenuItem value="">Todas</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="store-label">Tienda</InputLabel>
        <Select
          labelId="store-label"
          value={filters.store}
          label="Tienda"
          onChange={handleStoreChange}
        >
          <MenuItem value="">Todas</MenuItem>
          {stores.map((store) => (
            <MenuItem key={store} value={store}>
              {store}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography gutterBottom>Distancia máxima (km)</Typography>
      <Slider
        value={filters.maxDistance}
        onChange={handleDistanceChange}
        aria-labelledby="distance-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={20}
      />
    </Box>
  );
};

export default Filters;
