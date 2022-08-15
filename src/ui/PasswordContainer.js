import classes from './passwordContainer.module.css'

export default function PasswordContainer(props){
  return(
    <div className={classes.passwordContainer}>
      {props.children}
    </div>
  )
}