import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from "@mui/material/Stack";
import  {Button}  from "@material-ui/core";
import { Container } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { createTheme } from '@mui/material/styles';
import styles from'./Quiz5.css';
import { ButtonGroup } from '@mui/material';
import { palette } from '@mui/system';
import { green } from '@mui/material/colors';



export default function Quiz5() {
    

    const [color, setColor] = React.useState("primary")

    

    function rightAnswer() {
        setColor("secondary")
        
    }


  return (
    <Container>
      <Stack
        backgroundColor= "white"
        boxShadow= "4px 4px lightblue"
        marginLeft = "5%"
        marginRight = "5%"
        borderRadius= "7px"
        padding= "2px"
        fontSize= "0.875rem"
        boxSizing= "border-box"
        letterSpacing= "0.01071em"
        borderWidth= "1"
        lineHeight= "1.43"
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <h1 className= {styles.Q5title}>Which one is the scam?</h1>
      </Stack>
    
    
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Card
            sx={{
              marginTop: 1,
              maxWidth: 400,
              borderRadius: 6,
              padding: "10px",
              boxShadow: "4px 4px lightblue",
            }}
          >
            <CardMedia
              component="img"
              padding="2.5rem 5.0rem"
              height="20%"
              src="/fake1.png"
              alt=""
            />
          </Card>
          <Card
            sx={{
              marginTop: 1,
              maxWidth: 400,
              borderRadius: 6,
              padding: "10px",
              boxShadow: "4px 4px lightblue",
            }}
          >
            <CardMedia
              component="img"
              padding="2.5rem 5.0rem"
              height="20%"
              src="/real1.png"
              alt=""
            />
          </Card>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={40}
        >
          <Button
            variant="contained"
            color={color}
            style={{ height: 50 }}
            style={{ width: 200 }}
            onClick = {() => rightAnswer()}
          >
          A
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ height: 50 }}
            style={{ width: 200 }}
          >
          B
          </Button>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={10}
        >
          <Button
            variant="contained"
            color="secondary"
            style={{ height: 50 }}
            style={{ width: 150 }}
          >
          hint
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ height: 50 }}
            style={{ width: 150 }}
          >
          Next Question
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}