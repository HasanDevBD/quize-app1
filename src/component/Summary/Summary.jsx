import img from "../../assets/images/success.png";
import useFetch from "../../Hook/useFetch";
import classes from "./Summary.module.css";

function Summary({ score, naq }) {
  const pepole = () => {
    if ((score / (naq * 5)) * 100 < 33) {
      return "faill";
    } else if ((score / (naq * 5)) * 100 < 50) {
      return "Not Bad";
    } else if ((score / (naq * 5)) * 100 < 70) {
      return "Good";
    } else if ((score / (naq * 5)) * 100 < 90) {
      return "Very Good";
    } else if ((score / (naq * 5)) * 100 < 100) {
      return "Excellent";
    }
  };

  const { loading, result, error } = useFetch(
    `https://api.pexels.com/v1/search?query=${pepole()}`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );
  const images = result ? result.src.medium : img;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        {/* <!-- progress bar will be placed here --> */}
        <p className={classes.score}>
          Your score is <br />
          {score} out of {naq * 5}
        </p>
      </div>

      {loading && <div className={classes.badge}>Loading your badge...</div>}

      {error && <div className={classes.badge}>An error occured!</div>}

      {!loading && !error && (
        <div className={classes.badge}>
          <img src={images} alt="Success" />
        </div>
      )}
    </div>
  );
}

export default Summary;

// return (
//   <div className={classes.summary}>
//     <div className={classes.point}>
//       {/* <!-- progress bar will be placed here --> */}
//       <p className={classes.score}>
//         Your score is <br />{score} out of {naq * 5}
//       </p>
//     </div>

//     <div className={classes.badge}>
//       <img src={images} alt="Success" />
//     </div>
//   </div>
// );




// const pepole = () => {
//   let text;
//   if ((score / (naq * 5)) * 100 < 33) {
//      text= "faill";
//   } else if ((score / (naq * 5)) * 100 < 50) {
//      text="Not Bad";
//   } else if ((score / (naq * 5)) * 100 < 70) {
//      text= "Good";
//   } else if ((score / (naq * 5)) * 100 < 90) {
//      text= "Very Good";
//   } else if ((score / (naq * 5)) * 100 < 100) {
//      text= "Excellent";
//   }
//   return text
//   // eslint-disable-next-line no-unreachable
//   console.log(text)
// };


// function myMove() {
//   let clear= setInterval(frame, 5)
//   function frame() {
//     if(pos <400){
//       pos++
//       animate.style.top= pos + 'px',
//       animate.style.left= pos + 'px',

//     }
//   }
  
// }