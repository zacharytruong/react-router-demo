import { useHistory } from 'react-router-dom';
import './App.css';

function App() {
  const history = useHistory();
  const richDadTitle = 'Rich-Dad-Poor-Dad';
  const theRichest = 'The Richest Man in Babylon'
  const handleClick = (name) => history.push(`/about/${name}`);
  return (
    <div className="App">
      <h1>Welcome Coder!</h1>
      <button onClick={() => handleClick(richDadTitle)}>
        {richDadTitle}
      </button>
      <button onClick={() => handleClick(theRichest)}>
        {theRichest}
      </button>
    </div>
  );
}

export default App;
