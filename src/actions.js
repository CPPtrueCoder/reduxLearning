const increment = ()=>({type:'INC'});
const decrement =()=>({type:'DEC'});
const randomize =(value) =>({type:'RND',value});

export {increment,decrement,randomize} ;