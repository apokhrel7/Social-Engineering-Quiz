import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";
import { useScoreContext } from "../../components/Context/ResultContext";
import { useResponseContext } from "../../components/Context/ResultContext";

const Result = () => {

  // score will allow us to access the current score of the user within  this file
  // responses will contain the number of questions attempted up to this point
  // -----------------------------------------------------------------------------
  const score = useScoreContext();
  const responses = useResponseContext();
  // -----------------------------------------------------------------------------

  // navigate is a function that will allow us to navigate to the next page
  const navigate = useNavigate();

  const useEffect = () => {
    navigate("/");
  };

  return (
    <div className="result">
      <span className="title">
        Final Score : {score}/{responses}
      </span>
      <Button
        variant="contained"
        color="primary"
        style={{
          height: 50,
          width: 290,
          alignSelf: "center",
          fontSize: "15px",
          fontWeight: 600,
          marginTop: 20,
        }}
        onClick={useEffect}
        className="button"
      >
        Return back to homepage
      </Button>
    </div>
  );
};

export default Result;
