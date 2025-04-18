import React from 'react';
import { Promotion } from '../types/types';
import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

interface PromotionCardProps {
  promotion: Promotion;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ promotion }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={promotion.imageUrl}
        alt={promotion.title}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="h5" component="div">
            {promotion.title}
          </Typography>
          {promotion.isSpecial && (
            <Chip icon={<StarIcon />} label="Especial" color="warning" />
          )}
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {promotion.description}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Chip label={promotion.category} variant="outlined" />
          <Box display="flex" alignItems="center">
            <LocationOnIcon color="primary" />
            <Typography variant="body2">{promotion.distance} km</Typography>
          </Box>
        </Box>
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Válido hasta: {promotion.expirationDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PromotionCard;