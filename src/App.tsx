import React from  'react';
import './App.scss';
import ReportContainer from './components/ReportContainter';
import {Route} from 'react-router-dom';
import Report from './components/Report';
function App() {
  return (
    <div>
      <Route path='/'  component={ReportContainer}></Route>
      <Route path='/report/:url' exact component={Report} ></Route>
    </div>
  );
}

export default App;
