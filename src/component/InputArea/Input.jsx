import classes from './Input.module.css';

function Input({icon, ...rest}) {
    return (
        <div className={classes.textInput}>
        <input {...rest} />
        <span className="material-icons-outlined"> {icon} </span>
      </div>
    )
}

export default Input;
