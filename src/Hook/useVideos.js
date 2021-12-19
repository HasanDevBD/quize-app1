import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt
} from "firebase/database";
import { useEffect, useState } from "react";

function useVideos(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  useEffect(() => {
    // effect
    async function fetchVideos() {
      let db = getDatabase();
      let refVideo = ref(db, "videos");
      let videoQuery = query(
        refVideo,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );
      try {
        setLoading(true);
        setError(false);
        let snapshort = await get(videoQuery);
        setLoading(false);
        if (snapshort.exists()) {
          setVideos((prev) => {
            return [...prev, ...Object.values(snapshort.val())];
          });
        } else {
          sethasMore(false);
        }
      } catch (e) {
        console.log(e);
        setError(true);
        setLoading(false);
      }
    }
    fetchVideos();
  }, [page]);
  return {
    loading,
    error,
    videos,
    hasMore,
  };
}

export default useVideos;
