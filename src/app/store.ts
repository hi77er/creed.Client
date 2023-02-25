import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authorizeReducer from '../components/features/authorize/authorizeSlice';
import counterReducer from '../components/features/counter/counterSlice';

export const rootReducer = combineReducers(
  {
    authorizer: authorizeReducer,
    counter: counterReducer,
  }
);

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;