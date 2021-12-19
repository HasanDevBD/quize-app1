import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideos from "../../Hook/useVideos";
import Video from "./Video";

function Videos() {
  const [pages, setpages] = useState(1);
  const { loading, error, videos, hasMore } = useVideos(pages);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          loader={<h1>Loading...</h1>}
          dataLength={videos.length}
          next={() => setpages(pages + 8)}
          hasMore={hasMore}
        >
          {videos.map((value) =>
            value.noq > 0 ? (
              <Link to={{
                pathname: `/Quiz/${value.youtubeID}`,
                states : {
                 videoTitle: value.title
                }
              }} key={ value.youtubeID}>
                <Video
                  title={value.title}
                  id={value.youtubeID}
                  noq={value.noq}
                />
              </Link>
            ) : (
              <Video title={value.title} id={value.youtubeID} noq={value.noq} key={value.youtubeID} />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>no data found!</div>}
      {error && <div>there was an error!</div>}
      {loading && <div>loading...</div>}
    </div>
  );
}

export default Videos;
