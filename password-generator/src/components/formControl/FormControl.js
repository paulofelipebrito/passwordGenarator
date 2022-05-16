import classes from './FormControl.module.css';

export default function FormControl(props){
  return (
    (props.type === 'number' ? 
      <div className={classes.formControl}>
        <label htmlFor={props.id}>
          {props.title}
        </label>
        <input type={props.type} id={props.id} value={props.value} ref={props.ref} min={props.min} max={props.max}/>
      </div>
      :
      <div className={classes.formControl}>
        <label htmlFor={props.id}>
          {props.title}
        </label>
        <input type={props.type} id={props.id} ref={props.ref}/>
      </div>
    )
  );
};