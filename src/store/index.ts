import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';
import storage from "./redux-persist-taro-plugin/index";
import userSlice from "./modules/user";

//持久化数据
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const reducer = combineReducers({
  userSlice,
});

const persistConfig = {
  key: "redux",
  storage: storage,
  whitelist: ["userSlice"], //白名单只保存CollapsedSlice
  // blacklist:['CollapsedSlice'],//黑名单仅不保存CollapsedSlice
};

const persistedRedcer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedRedcer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        //忽略了 Redux Persist 调度的所有操作类型。这样做是为了在浏览器控制台读取a non-serializable value was detected in the state时不会出现错误。
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
