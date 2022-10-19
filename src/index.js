import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const App = () => {
  let a = [1, 2, 3, 4];
  const handler = e => alert(`button ${e.target.getAttribute("index")}`);
  let list = a.map((item, index) => {
    return <myButton index={index} onClick={handler} key={index}></myButton>;
  });
  return <div>{list}</div>;
};
const myButton = ({onClick, index}) => {
  let { Button } = ReactBootstrap;
  return (
    <button index={index} onClick={onClick}>
      Click Me
    </button>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
