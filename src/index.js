import  {createStore} from "redux";
const dec = document.getElementById('dec'),
    inc=document.getElementById('inc'),
    counter = document.getElementById('counter'),
    rnd =document.getElementById('rnd');

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state -1;
        case 'RND':
            return state+action.value;

        default:
            return state;
    }
};
const increment = ()=>({type:'INC'});
const decrement =()=>({type:'DEC'});
const randomize =(value) =>({type:'RND',value});



const store = createStore(reducer);

// Подписка
store.subscribe(()=>{
    counter.innerHTML=store.getState();
   console.log(store.getState());
});
inc.addEventListener('click',()=>{
    store.dispatch(increment());
});

dec.addEventListener('click',()=>{
    store.dispatch(decrement());
});

rnd.addEventListener('click',()=>{
    const value=Math.floor(Math.random()*10);
store.dispatch(randomize(value));
});



