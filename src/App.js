import "./App.css";

function App() {
  // below code is just to check if validate script is running fine or not with respect to eslint.
  const showNames = () => {
    const p = {
      p1: "value1",
      p2: "value2",
      p3: "value3",
    };

    for (const key in p) {
      if (p.hasOwnProperty(key)) {
        console.log(`${key} -> ${p[key]}`);
      }
    }
  };
  // sdcd

  return (
    <div className="App">
      <h1>Dummy Project with Husky Setup</h1>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;

// Confused with below code. Should i replace below code with the code in .lintstagedrc file.?
// {
//   "*.{js,jsx}": ["npm run lint:fix --", "git add"],
//   "*.{js,jsx,json}": ["prettier --write","git add"]
// }
