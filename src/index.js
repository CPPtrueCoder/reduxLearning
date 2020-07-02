import  {createStore} from "redux";


const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        default:
            return state;
    }
};

const store = createStore(reducer);

// Подписка
store.subscribe(()=>{
   console.log(store.getState());
});
// Изменение состояния
store.dispatch({type:'INC'});

