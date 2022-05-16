import classes from './Header.module.css';

export default function Header(props){
  return (
    <div className={classes.passwordHeader}>
      <div className={classes.password}>
          <span id="password">{props.password}</span>
          <button id="copy" onClick={props.handleCopyButton}>Copy</button>
        </div>
    </div>
  )
}