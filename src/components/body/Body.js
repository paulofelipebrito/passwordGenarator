import classes from './Body.module.css';

export default function Body(props){
  return (
    <div className={classes.passwordBody}>
      {props.children}
    </div>
  )
}