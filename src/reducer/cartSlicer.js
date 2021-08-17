const initialState = [];

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'carts/cartAdd':
            return [
                ...state,
                {
                    id: action.payload.id,
                    idProduct: action.payload.idProduct,
                    image: action.payload.image,
                    name: action.payload.name,
                    count: action.payload.count,
                    price: action.payload.price,
                }
            ]
        case 'carts/cartDelete':
            return state.filter((cart) => cart.id !== action.payload);
        case 'carts/cartClear':
            state = initialState;
            return state;
        default:
            return state;
    }
}