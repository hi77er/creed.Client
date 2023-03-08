import authorizeReducer, { fetchToken, signout } from './authorizeSlice';
import { AuthorizeState } from './authorizeAPI';

describe('authorize reducer', () => {
  // const initialState: AuthorizeState = {
  //   errorMessage: null,
  //   status: 'unauthorized'
  // };

  it('should know simple maths', () => {
    expect(1 + 1).toEqual(2);
  });

  it('should know simple truths', () => {
    expect(!false).toEqual(true);
  });
});
