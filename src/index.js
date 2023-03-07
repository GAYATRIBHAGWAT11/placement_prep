import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import App from './App';
// import App2 from '/Users/admin/PlacementPrep/placement_prep/src/App2.js'
// import App3 from '/Users/admin/PlacementPrep/placement_prep/src/App3.js'
// import App4 from '/Users/admin/PlacementPrep/placement_prep/src/App4.js' 
// import App5 from '/Users/admin/PlacementPrep/placement_prep/src/App5.js'
// import App6 from '/Users/admin/PlacementPrep/placement_prep/src/App6.js'
// import App7 from '/Users/admin/PlacementPrep/placement_prep/src/App7.js'
// import App8 from '/Users/admin/PlacementPrep/placement_prep/src/App8.js'
// import { Provider } from 'react-redux';
// import { store } from '/Users/admin/PlacementPrep/placement_prep/src/redux/storeApp/store.js'
// import App9 from '/Users/admin/PlacementPrep/placement_prep/src/App9.js'
import App11 from '/Users/admin/PlacementPrep/placement_prep/src/App11.jsx'
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import  {store}  from '/Users/admin/PlacementPrep/placement_prep/src/To-do-app/components/store/store.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2/> */}
    {/* <App3/> */}
    {/* <App4/> */}
    {/* <App5/> */}
    {/* <App6/> */}
    {/* <App7/> */}
    {/* <Provider store={store}>
      <App8 />
    </Provider> */}
    {/* <App9/> */}
    {/* <Provider store={store}> */}
      {/* <App10 /> */}
      <App11 />
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
