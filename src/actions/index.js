import axios from 'axios';


export const jsonserver = axios.create({
    baseURL:'http://localhost:3008'
});

export const fetchProducts = () => async dispatch  => {
    const productsData = await jsonserver.get('/products');
    dispatch({type:'FETCH_PRODUCTS', payload:productsData.data});
};

export const setCurrentCategory = (category) => dispatch => {
    dispatch({
        type:'SET_SELECTED_CATEGORY', payload:category
    })
}

export const addToCart = (product) =>  dispatch =>{
    dispatch({
        type:'ADD_TO_CART', payload:product
    })
}

export const addToFavourite = (product) =>  dispatch =>{
    dispatch({
        type:'ADD_TO_FAVOURITE', payload:product
    })
}