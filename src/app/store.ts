import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authorizeReducer from '../components/features/authorize/authorizeSlice';
import counterReducer from '../components/features/counter/counterSlice';
import currentUserReducer from '../components/features/currentUser/currentUserSlice';

const persistConfig = {
  key: 'root',
  storage,
}

export const rootReducer = combineReducers(
  {
    authorizer: authorizeReducer,
    currentUser: currentUserReducer,
    counter: counterReducer,
  }
);

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;