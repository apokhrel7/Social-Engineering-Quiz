import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const NextQuestionButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  borderRadius: 8,
  maxWidth: "600px",
  maxHeight: "45px",
  minWidth: "600px",
  minHeight: "45px",

  "&:hover": {
    backgroundColor: purple[700],
    padding: "10px",
    boxShadow: "4px 4px lightblue",
  },
}));

function NextQuestion() {
  const navigate = useNavigate();

  const sendSubmit = () => {
    navigate("/result");
  };
  return (
    <NextQuestionButton onClick={sendSubmit} variant="contained" size="medium">
      Next Question
    </NextQuestionButton>
  );
}

export default NextQuestion;
