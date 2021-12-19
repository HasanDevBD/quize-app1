import { useRef, useState } from "react";
import Button from "../Button/Button";
import classes from "./ProgressBar.module.css";
function ProgressBar({ progress, next, prev, submit }) {
const toolTipRef = useRef()
 const [toolTip, setToolTipRef]= useState(false)

const toggolToltip=()=>{
 
  if(toolTip){
    setToolTipRef(false)
    toolTipRef.current.style.display= 'none'
  }else{
    setToolTipRef(true)
    toolTipRef.current.left= `calc(${progress}% -65px)`
    toolTipRef.current.style.display= 'block'
  }

}
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={toolTipRef}>{progress}% Complete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={toggolToltip}
            onMouseOut={toggolToltip}
          ></div>
        </div>
      </div>

        <Button
          className={classes.next}
          onClick={progress === 100 ? submit : next}
        >
          <span>{progress === 100 ? "Submit Quiz" : "Next Question"}</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      {/* </Link> */}
    </div>
  );
}

export default ProgressBar;
