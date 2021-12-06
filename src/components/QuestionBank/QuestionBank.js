import Quiz1 from "../../Pages/Quiz1/Quiz1";
import Quiz2 from "../../Pages/Quiz2/Quiz2";
import Quiz3 from "../../Pages/Quiz3/Quiz3";
import Quiz5 from "../../Pages/Quiz5/Quiz5";
import Quiz6 from "../../Pages/Quiz6/Quiz6";
import Quiz7 from "../../Pages/Quiz7/Quiz7";
import Quiz8 from "../../Pages/Quiz8/Quiz8";
import Quiz9 from "../../Pages/Quiz9/Quiz9";
import Result from "../../Pages/Result/Result";

/*
questionBank is a dictionary containing all function calls for the 
different quiz pages (quiz pages are just the pages containing a 
question from the quiz) set as the value corresponding to a "key"
in which the "key" is the number of questions that must have been 
previously answered in order to see this question

- in order to add any additional questions to the quiz, import the 
*/

export const questionBank = {
  0: <Quiz1 />,
  1: <Quiz2 />,
  2: <Quiz3 />,
  3: <Quiz5 />,
  4: <Quiz6 />,
  5: <Quiz7 />,
  6: <Quiz8 />,
  7: <Quiz9 />,
  8: <Result />,
};
