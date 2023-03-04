import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import {
  AuthorizeState,
  Error,
  fetchTokenAsync,
  refreshTokenAsync,
  signoutAsync,
  FetchTokenRequestBody,
  FetchTokenResult,
  RefreshTokenResult,
  SignoutResult,
} from './authorizeAPI';

const initialState: AuthorizeState = {
  errorMessage: null,
  status: 'unauthorized'
};

export const fetchToken =
  createAsyncThunk<FetchTokenResult, FetchTokenRequestBody, { rejectValue: Error }>(
    'authorize/fetchToken',
    async (params: FetchTokenRequestBody, { rejectWithValue }) => {
      try {
        const response = await fetchTokenAsync({
          email: params.email,
          password: params.password
        });
        return { success: true };
      } catch (err: any) {
        return rejectWithValue({ errorMessage: "Wrong username or password!" });
      }
    }
  );

export const signout =
  createAsyncThunk<SignoutResult, void, { rejectValue: Error }>(
    'authorize/signout',
    async (_: void, { rejectWithValue }) => {
      try {
        const result = await signoutAsync();
        return { success: result.success };
      } catch (err: any) {
        return rejectWithValue({ errorMessage: "Signout failed!" });
      }
    }
  );

export const refreshToken =
  createAsyncThunk<SignoutResult, void, { rejectValue: Error }>(
    'authorize/refresh',
    async (_: void, { rejectWithValue }) => {
      try {
        const result = await refreshTokenAsync();
        return { success: result.success };
      } catch (err: any) {
        return rejectWithValue({ errorMessage: "Refresh Token failed!" });
      }
    }
  );

export const authorizeSlice = createSlice({
  name: 'authorize',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    resetErrorMessage: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.errorMessage = initialState.errorMessage;
    },
    postOAuthSuccess: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.status = 'authorized';
      state.errorMessage = null;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.status = 'loading';
        state.errorMessage = null;
      })
      .addCase(fetchToken.fulfilled, (state) => {
        state.status = 'authorized';
        state.errorMessage = null;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.status = 'unauthorized';
        state.errorMessage = action.payload?.errorMessage ?? null;
      })
      .addCase(signout.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signout.fulfilled, (state) => {
        state.status = initialState.status;
        state.errorMessage = initialState.errorMessage;
      })
      .addCase(signout.rejected, (state, action) => {
        state.status = 'unauthorized';
        state.errorMessage = action.payload?.errorMessage ?? null;
      })
      .addCase(refreshToken.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(refreshToken.fulfilled, (state) => {
        state.status = 'authorized';
        state.errorMessage = null;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.status = 'unauthorized';
        state.errorMessage = action.payload?.errorMessage ?? null;
      });
  },
});

export const { postOAuthSuccess, resetErrorMessage } = authorizeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const authStatus = (state: RootState) => state.authorizer?.status;
export const errorMessage = (state: RootState) => state.authorizer?.errorMessage;

export default authorizeSlice.reducer;
