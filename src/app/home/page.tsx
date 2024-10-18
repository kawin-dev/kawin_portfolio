import Image from 'next/image';
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
        backgroundColor: 'none'
      }}
    >
      <Container maxWidth={false}
      sx={{
        display: 'flex'
      }}
      >
        {/* <Typography variant="h2"
          sx={{
            textAlign: 'center',
          }}
        >Kawin Cheong</Typography> */}
        <Image 
          src="/images/Kawin_Cheong.png" 
          alt="Logo" 
          width={300} // Set the width
          height={300} // Set the height
          // style={{ marginRight: '16px' }} 
        />
        <Container
          sx={{
            margin: 0,
            padding: 0
          }}
        >
          <Typography variant="h2"
            sx={{
              fontSize: '30px'
            }}
          >
            Software Developer
          </Typography>
          <Typography variant="body1"
            sx={{
              textAlign: 'left',
              paddingX: '10%',
              marginTop: '20px',
              overflowY: 'scroll',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              height: '250px',
              marginLeft: 0,
              paddingLeft: 0,
              marginRight: 0,
              paddingRight: 0
            }}
          >
            With over 5 years of hands-on experience in software development and production, I have built a solid foundation in delivering robust, scalable SaaS products across various industries. My work has consistently focused on delivering innovative solutions while mastering technologies in both backend and frontend development, utilizing tools like Laravel, React, MySQL, and AWS. I have a deep understanding of the development lifecycle, from design to deployment, which has allowed me to successfully manage projects that meet high performance and security standards.
            <br></br><br></br>
            Now, I'm driven to elevate my career by specializing in Cybersecurity. As the world becomes increasingly digital, securing systems, data, and networks has become critical. I’m committed to expanding my expertise in this area to tackle the complex challenges of today's security landscape, and further sharpen my technical skills. My goal is to combine my software development background with cutting-edge cybersecurity knowledge to provide holistic, secure, and innovative solutions.
          </Typography>
        </Container>
      </Container>
    </Container>
  );
};

export default HomeComponent;
