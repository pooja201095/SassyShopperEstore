export default (state="All",action) => {
    switch(action.type) {
        case 'SET_SELECTED_CATEGORY':
            return action.payload;

            default:
                return state;
    }
}