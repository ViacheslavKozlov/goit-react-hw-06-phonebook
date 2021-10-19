import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../redux/phoneBook/reducers";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"]
};

const persistedRootReducer = persistReducer(contactsPersistConfig, rootReducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
];

const store = configureStore({
  reducer: { contacts: persistedRootReducer },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development"
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
