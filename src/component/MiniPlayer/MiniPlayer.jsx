import { useRef, useState } from "react";
import ReactPlayer from 'react-player';
import classes from "./MiniPlayer.module.css";


export default function MiniPlayer({useId, title}) {
  const [state, setState] = useState(false);
  const videoUrl=`https://www.youtube.com/watch?v=${useId}-U`
  const buttonRef = useRef();
  function toggolMinePlayer() {
    if (!state) {
      setState(true);
      buttonRef.current.classList.remove(classes.floatingBtn);
    } else {
      setState(false);
      buttonRef.current.classList.add(classes.floatingBtn);
    }
  }
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggolMinePlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggolMinePlayer}
      >
        close
      </span>
      <ReactPlayer url={videoUrl} width={"300px"} height={'168px'} playing={state} controls className={classes.player} />
      <p>{title}</p>
    </div>
  );
}
