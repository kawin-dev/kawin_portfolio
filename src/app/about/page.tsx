"use client";

import { Button, Container } from "@mui/material";
import SkillSet from "../services/class/skillset";
import React, { useEffect, useState } from "react";

const animatedElementStyle = {
  transition: 'transform 5s ease',
  margin: '10px',
};

const Page:React.FC = () => {
  const [skillElems, setSkillElems] = useState<React.ReactNode[]>([
    <div id="element-1 m-10" style={animatedElementStyle}>1</div>,
    <div id="element-2 m-10" style={animatedElementStyle}>22</div>
  ]);

  const shiftItems = () => {
    const newElems = [...skillElems];

    [newElems[0], newElems[1]] = [newElems[1], newElems[0]];

    setSkillElems(newElems);
  };

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
        <Button onClick={shiftItems}>Shift Items</Button>
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