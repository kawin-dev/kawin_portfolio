"use client";

import Image from 'next/image';
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'black'
};


const HomeComponent: React.FC = () => {
  const [hoveredWordIndex, setHoveredWordIndex] = useState<number | null>(null);
  const [wordSearch, setWordSearch] = useState<string>('Web_development');
  const [alreadyHovered, setAlreadyHovered] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);

  const text = `
    With over 5 years of hands-on experience in software development and production, I have built a solid foundation in delivering robust, scalable SaaS products across various industries. My work has consistently focused on delivering innovative solutions while mastering technologies in both backend and frontend development, utilizing tools like Laravel, React, MySQL, and GCP. I have a deep understanding of the development lifecycle, from design to deployment, which has allowed me to successfully manage projects that meet high performance and security standards.

    Now, I'm driven to elevate my career by specializing in Cybersecurity. As the world becomes increasingly digital, securing systems, data, and networks has become critical. I’m committed to expanding my expertise in this area to tackle the complex challenges of today's security landscape, and further sharpen my technical skills. My goal is to combine my software development background with cutting-edge cybersecurity knowledge to provide holistic, secure, and innovative solutions.
  `;

  const words = text.split(' ');

  const handleMouseEnter = (index: number) => {
    if(!alreadyHovered){
      setAlreadyHovered(true);
      setOpenModal(true);
    }

    setHoveredWordIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredWordIndex(null);
  };

  const searchTheWord = (word: string) => {
    const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '');
    setWordSearch(cleanedWord);
  }
  
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          margin: 0,
          padding: 0,
          width: '100%', // Make the container full width
          justifyContent: 'center', // Center the image horizontally
          backgroundColor: 'none' // Optional: remove this if you want a specific background
        }}
      >
        <Image 
          src="/images/Kawin_Cheong.png" 
          alt="Logo" 
          width={300}
          height={300}
        />
      </Container>
      <Container
        maxWidth={false}
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          // alignItems: 'center',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          backgroundColor: 'none'
        }}
      >
        <Container maxWidth={false}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          // alignItems: 'center',
        }}
        >
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
              <a className="hover:bg-blue-700 p-2 rounded" target='_blank' href="https://www.computerscience.org/careers/software-developer/">
                Software Developer
              </a>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'left',
                paddingX: '10%',
                marginTop: '20px',
                height: '250px',
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                marginLeft: 0,
                paddingLeft: 0,
                marginRight: 0,
                paddingRight: 0,
                cursor: 'pointer',
              }}
            >
              {words.map((word, index) => (
                <span
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => searchTheWord(word)}
                  style={{
                    backgroundColor: hoveredWordIndex === index ? 'yellow' : 'transparent',
                    color: hoveredWordIndex === index ? 'black' : 'white',
                    transition: 'background-color 0.2s ease-in-out',
                  }}
                >
                  {word}{' '}
                </span>
              ))}
            </Typography>
          </Container>
          <iframe
            src={`https://en.wikipedia.org/w/index.php?search=${wordSearch}`}
            style={{ width: '100%', height: '500px', border: 'none' }}
            title="Mini Browser"
          />
        </Container>
        <Modal
          open={openModal}
          onClose={undefined}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Instructions
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              You can click on the highlighted words to search for their meaning on wikipedia.
            </Typography>
            <Container
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10px'
              }}
            >
              <Button onClick={() => {
                setOpenModal(false);
              }} variant="contained">Close</Button>
            </Container>
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default HomeComponent;
