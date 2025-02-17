import { Box, Container, Typography, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { lightPink, lightMint, white } from '../data/colors';

export const ProductView: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: '20px' }}>
      <Paper elevation={3} sx={{ padding: '20px', backgroundColor: white, borderRadius: '8px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {product.name}
        </Typography>
        <Box
          sx={{
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            border: `5px dashed ${lightPink}`, // Cute dashed pink border
            padding: '20px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: lightMint,
          }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: '400px',
              height: '400px',
              padding: '10px',
            }}
          />
        </Box>
        <Typography
          variant="body1"
          gutterBottom
          component={'p'}
          align="justify"
          sx={{
            fontSize: '1.2rem',
            lineHeight: '1.6',
            marginBottom: '20px',
            padding: '0 20px',
          }}
        >
          {product.description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Price: ${product.price}
        </Typography>
      </Paper>
    </Container>
  );
};
