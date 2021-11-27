import { Button } from "@material-ui/core";
import * as React from "react";
import { styled } from "@mui/material/styles";
import NextQuestion from "./NextQuestion";
import { blue, green } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const AnswerButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: blue[700],
  borderRadius: 12,
  maxWidth: "250px",
  maxHeight: "50px",
  minWidth: "250px",
  minHeight: "50px",
  "&:hover": {
    backgroundColor: blue[900],
    padding: "10px",
    boxShadow: "4px 4px lightblue",
  },
}));

const CorrectButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: green[700],
  borderRadius: 12,
  maxWidth: "250px",
  maxHeight: "50px",
  minWidth: "250px",
  minHeight: "50px",
  "&:hover": {
    backgroundColor: green[700],
  },
}));

const WrongButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: red[700],
  borderRadius: 12,
  maxWidth: "250px",
  maxHeight: "50px",
  minWidth: "250px",
  minHeight: "50px",
  "&:hover": {
    backgroundColor: red[700],
  },
}));

const DisableButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: blue[600],
  borderRadius: 12,
  maxWidth: "250px",
  maxHeight: "50px",
  minWidth: "250px",
  minHeight: "50px",
  "&:hover": {
    backgroundColor: blue[600],
  },
}));

function CorrectAnswer() {
  const [correctFlag, setcorrectFlag] = React.useState(true);
  const [disableCorrectFlag, setdisableCorrectFlag] = React.useState(true);
  const [wrongFlag, setWrongFlag] = React.useState(true);
  const [disableWrongFlag, setdisableWrongFlag] = React.useState(true);
  const [next, setNext] = React.useState(true);

  const handleClickWrong = () => {
    setWrongFlag(!wrongFlag);
    setNext(!next);
    setdisableCorrectFlag(!disableCorrectFlag);
  };

  const handleClickCorrect = () => {
    setcorrectFlag(!correctFlag);
    setNext(!next);
    setdisableWrongFlag(!disableWrongFlag);
  };

  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="row"
        spacing={13}
        justifyContent="center"
        alignItems="center"
      >
        {disableCorrectFlag ? (
          !correctFlag ? (
            <CorrectButton variant="contained" size="medium">
              <Typography style={{ fontWeight: 600 }}>correct!</Typography>
            </CorrectButton>
          ) : (
            <AnswerButton
              onClick={handleClickCorrect}
              variant="contained"
              size="medium"
            >
              <Typography style={{ fontWeight: 600 }}>scam!</Typography>
            </AnswerButton>
          )
        ) : (
          <DisableButton variant="contained" size="medium">
            <Typography style={{ fontWeight: 600 }}>scam!</Typography>
          </DisableButton>
        )}

        {disableWrongFlag ? (
          !wrongFlag ? (
            <WrongButton variant="contained" size="medium">
              <Typography style={{ fontWeight: 600 }}>Wrong!</Typography>
            </WrongButton>
          ) : (
            <AnswerButton
              onClick={handleClickWrong}
              variant="contained"
              size="medium"
            >
              <Typography style={{ fontWeight: 600 }}>seems legit!</Typography>
            </AnswerButton>
          )
        ) : (
          <DisableButton variant="contained" size="medium">
            <Typography style={{ fontWeight: 600 }}>seems legit!</Typography>
          </DisableButton>
        )}
      </Stack>
      {!next ? (
        <NextQuestion />
      ) : (
        <Button
          style={{
            maxWidth: "600px",
            maxHeight: "45px",
            minWidth: "600px",
            minHeight: "45px",
          }}
          disabled
          variant="contained"
          size="medium"
        >
          Next Question
        </Button>
      )}
    </Stack>
  );
}
export default CorrectAnswer;
