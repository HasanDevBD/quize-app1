import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      // database related works
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
}

// import {
//     get,
//     getDatabase,

//     orderByKey,
//     query,
//     ref
// } from "firebase/database";
// import { useEffect, useState } from "react";

// function useQuzie(videoID) {
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(false);
//     const [qustion, setQustion] = useState([]);

//     useEffect(() => {
//       // effect
//       async function fetchQustion() {
//         let db = getDatabase();
//         let quizRef = ref(db, "quiz/" + videoID + "/questions");
//         let quizQuery = query(
//             quizRef,
//           orderByKey(),

//         );
//         try {
//           setLoading(true);
//           setError(false);
//           let snapshort = await get(quizQuery);
//           setLoading(false);
//           if (snapshort.exists()) {
//             setQustion((prev) => {
//               return [...prev, ...Object.values(snapshort.val())];
//             });
//           }
//         } catch (e) {
//           console.log(e);
//           setError(true);
//           setLoading(false);
//         }
//       }
//       fetchQustion();
//     }, [videoID]);
//     return {
//       loading,
//       error,
//       qustion,
//     };
// }

// export default useQuzie
