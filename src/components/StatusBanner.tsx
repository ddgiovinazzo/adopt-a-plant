import { Typography } from '@mui/material';
import { BROWN4, GREEN2, GREY1, PINK1 } from '../data/colors';

interface StatusBannerProps {
  product: {
    comingSoon?: boolean;
    adopted?: boolean;
  };
}

const StatusBanner: React.FC<StatusBannerProps> = ({ product }) => {
  if (product.comingSoon) {
    return (
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
    );
  } else if (product.adopted) {
    return (
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
    );
  } else {
    return (
      <Typography
        variant="body2"
        sx={{
          marginBottom: '10px',
          fontSize: '1.2rem',
          color: BROWN4,
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
    );
  }
};

export default StatusBanner;
