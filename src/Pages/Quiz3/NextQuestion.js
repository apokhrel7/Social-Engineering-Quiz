import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { NextQuestionStyles } from "./Styling";

function NextQuestion() {
  const navigate = useNavigate();

  const sendSubmit = () => {
    navigate("/result");
  };
  return (
    <Button
      sx={NextQuestionStyles}
      onClick={sendSubmit}
      variant="contained"
      size="medium"
    >
      Next Question
    </Button>
  );
}

export default NextQuestion;
