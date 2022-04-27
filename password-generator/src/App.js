import './App.css';

function App() {
  return (
    <div className="App">
      <div className="password-container">
        <div className="password-header">
          <div className="password">
            <button>Copy to clipboard</button>
          </div>
        </div>
        <div className="password-body">
          <div className="form-control">
            <label htmlFor="len">
              Password Length
            </label>
            <input type="number" id="len" min="4" max="40"/>
          </div>
          <div className="form-control">
            <label htmlFor="lower">
            Contain Lowercase Letters
            </label>
            <input type="checkbox" id="lower"/>
          </div>
          <div className="form-control">
            <label htmlFor="number">
            Contain Numbers
            </label>
            <input type="checkbox" id="number"/>
          </div>
          <div className="form-control">
            <label htmlFor="symbol">
            Contain Symbols
            </label>
            <input type="checkbox" id="symbol"/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
