import { Box, Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { white } from '../data/colors';

export const ProductView: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Container>
      <Box
        sx={{
          padding: '20px',
          backgroundColor: white,
          borderRadius: '4px',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {product.name}
        </Typography>
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '400px',
          }}
        />
        <Typography variant="body1" gutterBottom>
          {product.description}
        </Typography>
        <Typography variant="body2" gutterBottom>
          hello
        </Typography>
        <Typography variant="h6" gutterBottom>
          Price: ${product.price}
        </Typography>
      </Box>
    </Container>
  );
};
