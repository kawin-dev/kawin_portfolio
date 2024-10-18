import { Container, Typography } from "@mui/material";

const HomeComponent: React.FC = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth={false}
      >
        <Typography variant="h2"
          sx={{
            textAlign: 'center',
          }}
        >Kawin Cheong</Typography>
        <Typography variant="h5"
          sx={{
            textAlign: 'center',
          }}
        >Software Developer</Typography>
        <Typography variant="body1"
          sx={{
            textAlign: 'center',
            paddingX: '10%',
            marginTop: '20px',
            overflowY: 'scroll',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            height: '250px'
          }}
        >
          With over 5 years of hands-on experience in software development and production, I have built a solid foundation in delivering robust, scalable SaaS products across various industries. My work has consistently focused on delivering innovative solutions while mastering technologies in both backend and frontend development, utilizing tools like Laravel, React, MySQL, and AWS. I have a deep understanding of the development lifecycle, from design to deployment, which has allowed me to successfully manage projects that meet high performance and security standards.
          <br></br><br></br>
          Now, I'm driven to elevate my career by specializing in Cybersecurity. As the world becomes increasingly digital, securing systems, data, and networks has become critical. I’m committed to expanding my expertise in this area to tackle the complex challenges of today's security landscape, and further sharpen my technical skills. My goal is to combine my software development background with cutting-edge cybersecurity knowledge to provide holistic, secure, and innovative solutions.
        </Typography>
      </Container>
    </Container>
  );
};

export default HomeComponent;
