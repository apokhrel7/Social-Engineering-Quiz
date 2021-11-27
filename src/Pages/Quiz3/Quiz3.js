import * as React from "react";
import Stack from "@mui/material/Stack";
import Hint from "./Hint";
import Image from "./Image";
import CorrectAnswer from "./CorrectAnswer";
import Question3 from "./Question3";

function Quiz3() {
  return (
    <div>
      <Stack
        direction="row"
        spacing={15}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction="column"
          spacing={10}
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            direction="column"
            spacing={10}
            justifyContent="center"
            alignItems="center"
          >
            <Question3 />
            <CorrectAnswer />
          </Stack>
          <Hint />
        </Stack>
        <Image />
      </Stack>
    </div>
  );
}

export default Quiz3;
