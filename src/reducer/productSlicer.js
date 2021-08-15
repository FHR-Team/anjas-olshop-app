const initialState = [];

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'products/productAdd':
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    desc: action.payload.desc,
                    stock: action.payload.stock,
                    image: action.payload.image,
                }
            ]
        case 'products/productClear':
            state = initialState;
            return state;
        default:
            return state;
    }
}