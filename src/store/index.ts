import { createStore,combineReducers,applyMiddleware } from "redux";
import reducer from "./auth/reducer"; 
import thunk from 'redux-thunk'
import logger from 'redux-logger'
//redux-logger是个js 需要类型定义ts
//npm i --save-dev @types/redux-logger

const store =createStore(
  combineReducers({reducer}),
  applyMiddleware(thunk,logger)
)
export default store

// import { configureStore } from '@reduxjs/toolkit';  
// import reducer from "./auth/reducer";  
// import logger from 'redux-logger' 

// const rootReducer = {
//   reducer
// };
// const store = configureStore({
//   reducer: rootReducer, 
//   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
// });
// export default store
//返回一个RootState类型，类型为 执行store.getState 的数据类型
//RetrunType获取到函数返回值
export type RootState = ReturnType<typeof store.getState>