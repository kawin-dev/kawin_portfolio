"use client";

import { Container, Typography } from "@mui/material";
import SkillSet from "../services/class/skillset";
import { useEffect } from "react";

const Page:React.FC = () => {
  useEffect(() => {
    const skillSet = new SkillSet;

    console.log(skillSet.skills);
  }, []);

  return (
    <Container
      maxWidth={false}    
      sx={{
        height: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: '80px',
        paddingBotton: 0,
        margin: 0,
      }}
    >
      <Container
        maxWidth={false}
      >
        <Typography>
          skills
        </Typography>
      </Container>
    </Container>
  );
};

export default Page;