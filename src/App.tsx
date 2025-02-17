import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  Paper,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import { ProductCard } from './components/ProductCard';
import { ProductView } from './components/ProductView';
import { BROWN2, BROWN4, BROWN3, GREEN2, BROWN1 } from './data/colors';
import { products } from './data/products';

const theme = createTheme({
  palette: {
    primary: {
      main: BROWN3, // Earthy brown
    },
    secondary: {
      main: GREEN2, // Soft green
    },
    background: {
      default: BROWN2, // Beige
    },
    text: {
      primary: BROWN4, // Dark brown
      secondary: BROWN3, // Earthy brown
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename='adopt-a-plant'>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component={Link} to="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
              Adopt a Plant
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Box
                    component="img"
                    src={logo}
                    alt="logo"
                    sx={{
                      display: 'block',
                      margin: '20px auto',
                      height: '300px',
                    }}
                  />
                  <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to Adopt a Plant!
                  </Typography>
                  <Paper
                    sx={{
                      padding: '20px',
                      backgroundColor: BROWN1,
                      borderRadius: '4px',
                      marginBottom: '20px',
                      color: BROWN4,
                      fontSize: '1rem',
                    }}
                  >
                    <Typography variant="body1" gutterBottom>
                      Browse our collection of plants and find your perfect
                      match.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Adopting a plant can be a rewarding and fulfilling
                      experience, offering a sense of responsibility and a touch
                      of nature to your living space. Whether you're a seasoned
                      gardener or a beginner, there's a plant out there that can
                      fit your lifestyle and environment.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      When you adopt a plant, consider factors like light
                      availability, watering needs, and temperature preferences
                      to ensure your new green friend thrives. Popular choices
                      for beginners include succulents, pothos, and snake
                      plants, as they are relatively low maintenance.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Beyond aesthetics, plants can improve air quality and
                      boost your mood, making them a great addition to any home.
                      Taking the time to nurture your plant can also be a
                      meditative practice, helping to reduce stress and connect
                      you with the natural world.
                    </Typography>
                  </Paper>
                  <Grid container spacing={4}>
                    {products.map((product, index) => (
                      <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                        <ProductCard product={product} />
                      </Grid>
                    ))}
                  </Grid>
                </main>
              }
            />
            <Route path="product/:productId" element={<ProductView />} />
          </Routes>
          <Box
            component="footer"
            sx={{
              marginTop: 'auto',
              padding: '10px 0',
              textAlign: 'center',
            }}
          >
            <Typography variant="body2" color="textSecondary">
              © 2025 Adopt a Plant
            </Typography>
          </Box>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
