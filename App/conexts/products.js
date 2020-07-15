import React, {createContext, useReducer, useEffect} from 'react'
import { Images } from '../theme'
export const ProductsContext = createContext()

const products = [
    {
        id: 1,
        name: 'Chicken Hamburger',
        description: 'Fresh hamburger with chicken, salad, tomatoes.',
        price: '$30.00',
        section: 'near',
        image: Images.products.chicken
    },
    {
        id: 2,
        name: 'Dragon Fruits Salad',
        description: 'A bit of avocado salad and some spinach stalks.',
        price: '$18.00',
        section: 'near',
        image: Images.products.fruits
    },
    {
        id: 3,
        name: 'Salmon Sushi',
        description: 'Salmon, carrot rolls, spinach and some sauce.',
        price: '$28.00',
        section: 'popular',
        image: Images.products.salmon
    },
    {
        id: 4,
        name: 'Avocado Salad',
        description: 'Fresh hamburger with chicken, salad, tomatoes.',
        price: '$11.00',
        section: 'popular',
        image: Images.products.avocado
    },
]

const initialState = {
    products: products,
    liked: [],
    cart: []
}



const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOTITE':
            return { ...state, liked: [...state.liked, action.payload] }
        case 'REMOVE_FROM_FAVOTITE':
            return { ...state, liked: state.liked.filter( id => id != action.payload)}
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.payload]}

        default: 
            return new Error(" Action Type is not found")
    }
}


export const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <ProductsContext.Provider  value={[state, dispatch]}>
            {children}
        </ProductsContext.Provider>
    )
}