import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App2 from '/Users/admin/PlacementPrep/placement_prep/src/App2.js'
// import App3 from '/Users/admin/PlacementPrep/placement_prep/src/App3.js'
// import App4 from '/Users/admin/PlacementPrep/placement_prep/src/App4.js' 
// import App5 from '/Users/admin/PlacementPrep/placement_prep/src/App5.js'
import App6 from '/Users/admin/PlacementPrep/placement_prep/src/App6.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2/> */}
    {/* <App3/> */}
    {/* <App4/> */}
    {/* <App5/> */}
    <App6/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
