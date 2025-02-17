import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import {
  darkBrown,
  softGreen,
  softGrey,
  white,
  lightPink,
  cutePink,
  earthyBrown,
} from '../data/colors';
import { Link } from 'react-router-dom';

type Product =
  | {
      id: string;
      image: string;
      name: string;
      title: string;
      description: string;
      price: number;
      comingSoon: true;
      adopted?: false;
    }
  | {
      id: string;
      image: string;
      name: string;
      title: string;
      description: string;
      price: number;
      adopted: true;
      comingSoon?: false;
    }
  | {
      id: string;
      image: string;
      name: string;
      title: string;
      description: string;
      price: number;
      comingSoon?: false;
      adopted?: false;
    };

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ position: 'relative', height: '370px', display: 'flex', flexDirection: 'column' }}>
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
                color: darkBrown,
                padding: '5px',
                borderRadius: '4px',
                textAlign: 'center',
                opacity: 0.8,
                backgroundColor: softGrey,
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
                color: darkBrown,
                padding: '5px',
                borderRadius: '4px',
                textAlign: 'center',
                opacity: 0.8,
                backgroundColor: softGreen,
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
                color: darkBrown, // Darker color for better readability
                padding: '5px',
                borderRadius: '4px',
                backgroundColor: lightPink,
                textAlign: 'center',
                marginLeft: '-20px',
                marginRight: '-20px',
              }}
            >
              ${product.price}
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
              backgroundColor: earthyBrown,
              color: white,
              textDecoration: 'none',
              display: 'block',
              '&:hover': {
                backgroundColor: darkBrown,
              },
            }}
          >
            More Info
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
