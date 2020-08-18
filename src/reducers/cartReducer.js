export default (state=[],action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            let flag = 0;
            if(state.length !== 0) {
                for( let i =0; i<state.length; i++){
                    if(state[i].id === action.payload.id){
                        flag=1;
                        state[i] = action.payload;
                    }
                }
                if(action.payload.quantity === 0) {
                    state = state.filter((state)=> state.id!==action.payload.id)
                }
            }
            if(flag === 0){
                localStorage.setItem("CartArray",JSON.stringify([...state,action.payload]));
                return [...state,action.payload];
            } else {
                localStorage.setItem("CartArray",JSON.stringify(state));
                return state;
            }
            

            default:
                if(localStorage.getItem("CartArray")!== null){
                    state = JSON.parse(localStorage.getItem("CartArray"));
                }
                return state;
    }
}