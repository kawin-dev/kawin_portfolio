import { Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';

const Page:React.FC = () => {
  return (
    <Container
      maxWidth={false}    
      sx={{
        height: '100%',
        padding: 0,
        margin: 0
      }}
    >
      <Grid container>
        <Grid size={12}>
          <Typography>
            Skills
          </Typography>
        </Grid>
        <Grid size={12}>
          Certificates
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page;