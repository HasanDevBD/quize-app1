import Question from "../Question/Question";
import classes from "./Analysis.module.css";

function Analysis({answers}) {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      {/* <h4>You answerd 5 out of 10 Questions correctly</h4> */}
      <Question answers={answers} />
    </div>
  );
}

export default Analysis;
