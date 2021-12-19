import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../Hook/useAnswer";
import Analysis from "../Analysis/Analysis";
import Summary from "../Summary/Summary";

function Result() {
  const { useId } = useParams();

  const { state } = useLocation();
  const { qna } = state;
  console.log(qna);

  const { error, loading, answers } = useAnswers(useId);
  function Calculater() {
    let scrore = 0;
    answers.forEach((question, index1) => {
      let currctIndex = [];
      let checkedIndext = [];
      question.options.forEach((option, index2) => {
        if (option.correct) currctIndex.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndext.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(currctIndex, checkedIndext)) {
        scrore = scrore + 5;
      }
    });
    return scrore;
  }
  let userScrore = Calculater();
  return (
    <>
      {loading && <div>loading...</div>}
      {error && <div>there was an error!</div>}
      {loading && answers.length > 0 && (
        <>
          <Summary scrore={userScrore} naq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}

export default Result;
