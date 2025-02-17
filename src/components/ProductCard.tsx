import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import {
  BROWN4,
  GREEN2,
  GREY1,
  WHITE,
  PINK1,
  BROWN3,
  DIFFICULTY_EASY,
  DIFFICULTY_MODERATE,
  DIFFICULTY_AVERAGE,
  DIFFICULTY_DIFFICULT,
  BROWN1,
} from '../data/colors';
import { Link } from 'react-router-dom';

type Product =
  | {
      id: string;
      image: string;
      name: string;
      nickname: string;
      title: string;
      description: string;
      price: number;
      comingSoon: true;
      adopted?: false;
      difficulty: string;
    }
  | {
      id: string;
      image: string;
      name: string;
      nickname: string;
      title: string;
      description: string;
      price: number;
      adopted: true;
      comingSoon?: false;
      difficulty: string;
    }
  | {
      id: string;
      image: string;
      name: string;
      nickname: string;
      title: string;
      description: string;
      price: number;
      comingSoon?: false;
      adopted?: false;
      difficulty: string;
    };

interface ProductCardProps {
  product: Product;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return DIFFICULTY_EASY;
    case 'moderate':
      return DIFFICULTY_MODERATE;
    case 'average':
      return DIFFICULTY_AVERAGE;
    case 'difficult':
      return DIFFICULTY_DIFFICULT;
    default:
      return BROWN4;
  }
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ position: 'relative', height: '370px', display: 'flex', flexDirection: 'column', backgroundColor: BROWN1 }}>
      <CardMedia
        component="img"
        image={product.image}
        sx={{ height: '140px', width: '140px', objectFit: 'cover', margin: '20px auto 0' }}
      />
      <CardContent sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>
          {product.name}
        </Typography>
        <Typography variant="h6" textAlign="center" color="textSecondary" sx={{ marginBottom: '10px' }}>
          "{product.title}"
        </Typography>
        <Box sx={{ marginTop: 'auto' }}>
          {product.comingSoon ? (
            <Typography
              variant="body2"
              sx={{
                marginBottom: '10px',
                fontSize: '1.2rem',
                color: BROWN4,
                padding: '5px',
                borderRadius: '4px',
                textAlign: 'center',
                opacity: 0.8,
                backgroundColor: GREY1,
                marginLeft: '-20px',
                marginRight: '-20px',
              }}
            >
              Coming Soon!
            </Typography>
          ) : product.adopted ? (
            <Typography
              variant="body2"
              sx={{
                marginBottom: '10px',
                fontSize: '1.2rem',
                color: BROWN4,
                padding: '5px',
                borderRadius: '4px',
                textAlign: 'center',
                opacity: 0.8,
                backgroundColor: GREEN2,
                marginLeft: '-20px',
                marginRight: '-20px',
              }}
            >
              Adopted!
            </Typography>
          ) : (
            <Typography
              variant="body2"
              sx={{
                marginBottom: '10px',
                fontSize: '1.2rem',
                color: BROWN4, // Darker color for better readability
                padding: '5px',
                borderRadius: '4px',
                backgroundColor: PINK1,
                textAlign: 'center',
                marginLeft: '-20px',
                marginRight: '-20px',
              }}
            >
              Available!
            </Typography>
          )}
          <Button
            component={Link}
            to={`/product/${product.id}`}
            sx={{
              width: '100%',
              textAlign: 'center',
              padding: '10px 0',
              borderRadius: '4px',
              backgroundColor: BROWN3,
              color: WHITE,
              textDecoration: 'none',
              display: 'block',
              '&:hover': {
                backgroundColor: BROWN4,
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </CardContent>
      <Box
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: getDifficultyColor(product.difficulty),
          color: WHITE,
          padding: '5px 10px',
          borderRadius: '4px',
          fontWeight: 'bold',
        }}
      >
        {product.difficulty.toUpperCase()}
      </Box>
    </Card>
  );
};
