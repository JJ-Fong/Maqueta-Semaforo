import expect from 'expect';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';

const Semaforo = ({ value }) => {
  var red = (<div class="red-off light "></div>);
  var yellow = (<div class="yellow-off light"></div>);
  var green = (<div class="green-off light"></div>);
  
  if (value === 0) {
    red = (<div class="red-on light "></div>);
  }
  if (value === 1) {
    yellow = (<div class="yellow-on light "></div>);
  }
  if (value === 2) {
    green = (<div class="green-on light "></div>);
  }
  
  return (
  <div class="frame"> 
    {red}
    {yellow}
    {green}
    <button onClick = { logic }>CHANGE</button> 
  </div> );
};

const tlight = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'RESET':
      return 0;
    default:
      return 0;
  }
}

const store = createStore(tlight);

const logic = () => {
  if (store.getState() < 2){
    store.dispatch({type: 'INCREMENT'});
  } else {
    store.dispatch({type: 'RESET'});
  }

}

const render = () => {
  ReactDOM.render(
    <Semaforo value={store.getState()} />,
    document.getElementById('root')
  )
}

store.subscribe(render); 
render();



