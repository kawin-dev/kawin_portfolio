"use client";

import { Container } from "@mui/material";
import SkillSet from "../services/class/skillset";
import React, { useEffect, useState } from "react";

const Page:React.FC = () => {
  const [skillElems] = useState<React.ReactNode[]>([
    <div id="element-1 m-10" key="1">1</div>,
    <div id="element-2 m-10" key="22">22</div>
  ]);
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
      </Container>
      <Container maxWidth={false}>
        {
          skillElems.map((elem:React.ReactNode) => (elem))
        }
      </Container>
    </Container>
  );
};

export default Page;