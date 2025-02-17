import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { earthyOrange, darkerOrange, adoptedGreen, comingSoonBlack } from '../data/colors';

type Product  =
|
{
  image: string;
  name: string;
  description: string;
  price: number;
  comingSoon: true;
  adopted?: false,
}
|
{
  image: string;
  name: string;
  description: string;
  price: number;
  adopted: true,
  comingSoon?: false,
}
|{
  image: string;
  name: string;
  description: string;
  price: number;
  comingSoon?: false;
  adopted?: false,
}

interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product })=> {
  return (
    <Card style={{ position: 'relative', height: '370px', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        style={{ height: '140px', width: '140px', objectFit: 'cover', margin: '20px auto 0' }} // Added top padding
        image={product.image}
        alt={product.name}
      />
      <CardContent style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '10px' }}>
          {product.description}
        </Typography>
        <Box sx={{ marginTop: 'auto' }}>
          <Typography
            variant="body2"
            color="textPrimary"
            sx={{
              marginBottom: '10px',
              fontSize: '1.2rem',
              color: '#ff69b4', // Cute pink color
              padding: '5px',
              borderRadius: '4px',
              backgroundColor: '#fff0f5', // Light pink background
              textAlign: 'center',
            }}
          >
            ${product.price}
          </Typography>
          {product.comingSoon ? (
            <Box
              sx={{
                width: '100%',
                backgroundColor: comingSoonBlack,
                color: 'white',
                textAlign: 'center',
                padding: '10px 0',
                borderRadius: '4px',
              }}
            >
              Coming Soon!
            </Box>
          ) : product.adopted ? (
            <Box
              sx={{
                width: '100%',
                backgroundColor: adoptedGreen,
                color: 'white',
                textAlign: 'center',
                padding: '10px 0',
                borderRadius: '4px',
              }}
            >
              Adopted!
            </Box>
          ) : (
            <Button
              variant="contained"
              sx={{
                width: '100%',
                textAlign: 'center',
                padding: '10px 0',
                borderRadius: '4px',
                backgroundColor: earthyOrange,
                '&:hover': {
                  backgroundColor: darkerOrange,
                },
              }}
            >
              Add to Cart
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;