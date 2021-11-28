import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = ({ score }) => {
  const navigate = useNavigate();

  const useEffect = () => {
    navigate("/");
  };

  return (
    <div className="result">
      <span className="title">Final Score : 4/5</span>
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
        href="/"
        className="buatton"
      >
        Return back to homepage
      </Button>
    </div>
  );
};

export default Result;
