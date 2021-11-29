import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from "@mui/material/Stack";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { createTheme } from '@mui/material/styles';

export default function Test() {
  return (
    <Container>
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={12}
    >
      <Card
        sx={{
          marginTop: 1,
          maxWidth: 400,
          borderRadius: "24px",
          padding: "10px",
          boxShadow: "4px 4px lightblue",
        }}
      >
      <CardMedia
        component="img"
        padding="2.5rem 5.0rem"
        height="20%"
        width="100%"
        overflow="hidden"
        backgroundSize="cover"
        src="real1.1.png"
        alt=""
      />
      </Card>
      <Card
        sx={{
          marginTop: 1,
          maxWidth: 400,
          borderRadius: "24px",
          padding: "10px",
          boxShadow: "4px 4px lightblue",
        }}
      >
        <CardMedia
          component="img"
          padding="2.5rem 5.0rem"
          height="20%"
          width="100%"
          overflow="hidden"
          backgroundSize="cover"
          src="fake1.1.png"
          alt=""
        />
      </Card>
      </Stack>
    </Container>
  )
}
