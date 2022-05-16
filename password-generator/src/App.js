import {useRef, useState} from 'react';

import './App.css';
import classes from './components/formControl/FormControl.module.css';
import PasswordContainer from './ui/PasswordContainer';
import PasswordHeader from './components/header/Header'
import Body from './components/body/Body';

function App() {
  const [password,setPassword] = useState('');
  const lenInputRef = useRef(15);
  const upperInputRef = useRef();
  const lowerInputRef = useRef();
  const numberInputRef = useRef();
  const symbolInputRef = useRef();

  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=";

  function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
  }

  function getUppercase() {
      return upperLetters[Math.floor(Math.random() * upperLetters.length)];
  }

  function getNumber() {
      return numbers[Math.floor(Math.random() * numbers.length)];
  }

  function getSymbol() {
      return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function generatePassword(e) {
    e.preventDefault();
    const len = lenInputRef.current.value;
    let generatedPassword = "";

    if(len !== undefined){
      if (upperInputRef.current.checked) {
          generatedPassword += getUppercase();
      }

      if (lowerInputRef.current.checked) {
          generatedPassword += getLowercase();
      }

      if (numberInputRef.current.checked) {
          generatedPassword += getNumber();
      }

      if (symbolInputRef.current.checked) {
          generatedPassword += getSymbol();
      } 

      for (let i = generatedPassword.length; i < len; i++) {
          const char = generateChar(); 
          generatedPassword += char;
      }

      setPassword(generatedPassword)
    }    
  }

  function generateChar() {
    const chars = [];
    if (upperInputRef.current.checked) {
        chars.push(getUppercase());
    }

    if (lowerInputRef.current.checked) {
        chars.push(getLowercase());
    }

    if (numberInputRef.current.checked) {
        chars.push(getNumber());
    }

    if (symbolInputRef.current.checked) {
        chars.push(getSymbol());
    }

    if (chars.length === 0) return ""; 
    return chars[Math.floor(Math.random() * chars.length)];
  }

  async function handleCopyButton(password) {
    if (!password) {
      return;
    }
    await navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
  };

  return (
    <PasswordContainer>
      <PasswordHeader password={password} handleCopyButton={handleCopyButton}/>
      <Body>
        {/* <FormControl id='len' title='Password Length' type='number' value={15} ref={lenInputRef} min={8} max={15}/> */}
        <form onSubmit={generatePassword}>
          <div className={classes.formControl}>
            <label htmlFor='len'>
              Password Length
            </label>
            <input type='number' id='len' ref={lenInputRef} min={8} max={15}/>
          </div>
          {/* <FormControl id='upper' title='Contain Uppercase Letters' type='checkbox' ref={upperInputRef}/> */}
          <div className={classes.formControl}>
            <label htmlFor='upper'>
              Contain Uppercase Letters
            </label>
            <input type='checkbox' id='upper' ref={upperInputRef}/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor='lower'>
            Contain Lowercase Letters
            </label>
            <input type='checkbox' id='lower' ref={lowerInputRef}/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor='number'>
              Contain Numbers
            </label>
            <input type='checkbox' id='number' ref={numberInputRef}/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor='symbol'>
              Contain Symbols
            </label>
            <input type='checkbox' id='symbol' ref={symbolInputRef}/>
          </div>
          {/* <FormControl id='lower' title='Contain Lowercase Letters' type='checkbox' ref={lowerInputRef}/>
          <FormControl id='number' title='Contain Numbers' type='checkbox' ref={numberInputRef}/>
          <FormControl id='symbol' title='Contain Symbols' type='checkbox' ref={symbolInputRef}/> */}
          <button className="generate" id="generate">Generate Password</button>
        </form>
      </Body>
      
      
      
    </PasswordContainer>
  );
}

export default App;
