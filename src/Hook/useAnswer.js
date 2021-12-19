import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(answersID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      // database related works
      const db = getDatabase();
      const answersRef = ref(db, "answers/" + answersID + "/answers");
      const answersQuery = query(answersRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(answersQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchAnswers();
  }, [answersID]);

  return {
    loading,
    error,
    answers,
  };
}


