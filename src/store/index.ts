// import { createStore,combineReducers,applyMiddleware } from "redux";
// import reducer from "./auth/reducer"; 
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
// //redux-logger是个js 需要类型定义ts
// //npm i --save-dev @types/redux-logger

// const store =createStore(
//   combineReducers({reducer}),
//   applyMiddleware(thunk,logger)
// )
// export default store

//redux-toolkit是目前redux官方推荐的编写redux逻辑的方法，针对redux的创建store繁琐、样板代码太多、依赖外部库等问题进行了优化
//安装包依赖 yarn add @reduxjs/toolkit react-redux

import { configureStore } from '@reduxjs/toolkit'; 
import reducer from "./auth/reducer";  
export const store = configureStore({
  reducer 
}); 
export default store