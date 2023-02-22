import counterReducer, {
  getToken,
  getUser
} from './authorizeSlice';
import { AuthorizeState } from './authorizeAPI';

describe('authorize reducer', () => {
  const initialState: AuthorizeState = {
    accessToken: null,
    refreshToken: null,
    user: null,
    status: 'unauthorized'
  };

  it('should handle initial state', () => {
    const actual = counterReducer(undefined, { type: 'unknown' });
    expect(actual).toEqual({
      accessToken: null,
      refreshToken: null,
      user: null,
      status: 'unauthorized'
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, getToken({ accessToken: null, refreshToken: null }));
    expect(actual.accessToken).toEqual(null);
    expect(actual.refreshToken).toEqual(null);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, getUser({ user: null }));
    expect(actual.user).toEqual(null);
  });
});
