
export default (state=[],action) => {
    switch(action.type) {
        case 'ADD_TO_FAVOURITE':
            let flag = 0;
            
            if(state.length !== 0) {
                for( let i=0; i<state.length; i++){
                    if(state[i].id === action.payload.id && action.payload.isFavourite === false){
                        flag=1;
                        state = state.filter((state)=> state.isFavourite!== false);
                    }
                }
            }
            if(flag === 0 && action.payload.isFavourite === true){
                localStorage.setItem("FavouriteArray",JSON.stringify([...state,action.payload]));
                return [...state,action.payload];
            } else {
                localStorage.setItem("FavouriteArray",JSON.stringify(state));
                return state;
            }
            

            default:
                    if(localStorage.getItem("FavouriteArray")!== null){
                        state = JSON.parse(localStorage.getItem("FavouriteArray"));
                    }
                return state;
    }
}