import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import products from './product'

import category from './category'
import orders from './orders'

import cart from './cart'
import reviews from './reviews'
import order from './order'

const reducer = combineReducers({
  user,
  products,
  orders,
  category,
  cart,
  order,
  reviews
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './product'
export * from './category'
export * from './order'
export * from './cart'
