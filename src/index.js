import {createStore,bindActionCreators} from "redux";
import reducer from "./reducer";
import {increment, decrement, randomize} from './actions.js'

const dec = document.getElementById('dec'),
    inc = document.getElementById('inc'),
    counter = document.getElementById('counter'),
    rnd = document.getElementById('rnd');


const store = createStore(reducer);
const {dispatch} = store;
// const bindActionCreator =(creator,dispatch)=>(...args)=>{
//   dispatch(creator(...args));
// };

const incDispatch =bindActionCreators(increment,dispatch);
const decDispatch  =bindActionCreators(decrement,dispatch);
const rndDispatch = bindActionCreators(randomize,dispatch);

// Подписка
store.subscribe(() => {
    counter.innerHTML = store.getState();
    console.log(store.getState());
});
inc.addEventListener('click', incDispatch);

dec.addEventListener('click', decDispatch);

rnd.addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rndDispatch(value);
});



