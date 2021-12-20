import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../../AuthContext/AuthContext";
import useQuzie from "../../Hook/useQuzie";
import Answer from "../Answers/Answers";
import MiniPlayer from "../MiniPlayer/MiniPlayer";
import ProgressBar from "../ProgressBar/ProgressBar";

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionsID].options[action.optionIndex].checked =
        action.value;

      return questions;
    default:
      return state;
  }
};

function Quiz() {
  // useMemo(() => function, input)
  const { useId } = useParams();
  // console.log(useParams)
  // console.log(useId);
  const { error, loading, questions } = useQuzie(useId);
  const [currenQustion, setCurrenQustion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);

  const { CorrenUser } = useAuth();

  // const {states}=useLocation
  // console.log(states)
  const Navigate = useNavigate();
  useEffect(() => {
    dispatch({
      value: questions,
      type: "questions",
    });
  }, [questions]);

  function handelAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionsID: currenQustion,
      optionIndex: index,
      value: e.target.checked,
    });
  };
  // handle when user clicks the next button to get the next question
  function nextQuestion() {
    if (currenQustion + 1 < questions.length) {
      setCurrenQustion((previousValue) => previousValue + 1);
    }
  }
  // handle when user clicks the prev button to get back to the previous question
  function previousQuestion() {
    if (currenQustion >= 1 && currenQustion <= questions.length) {
      setCurrenQustion((previousValue) => previousValue - 1);
    }
  }
  // Progress submit function
  async function submitFun() {
    const { uid } = CorrenUser;
    console.log(uid)
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [useId]: qna,
    });

    // Navigate({
    //   pathname: `/result/${useId}`,
    //   state: {
    //     qna,
    //   },
    // });
    Navigate(`/result/${useId}`,{state:{qna: qna}})

  }

  // const toComponentB=()=>{
  //   navigate('/result/${useId}',{state:{id:1,name:'sabaoon'}});
  //     }

  const percentage =
    questions.length > 0 ? ((currenQustion + 1) / questions.length) * 100 : 0;

  return (
    <div>
      {loading && <div>loading...</div>}
      {error && <div>there was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currenQustion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answer
            input
            options={qna[currenQustion].options}
            handelChange={handelAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={previousQuestion}
            progress={percentage}
            submit={submitFun}
          />
          <MiniPlayer useId={useId} title={qna[currenQustion].title}/>
        </>
      )}
    </div>
  );
}

export default Quiz;

