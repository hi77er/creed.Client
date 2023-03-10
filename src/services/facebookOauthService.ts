export const getFacebookUrl = (from: string) => {
  const rootUrl = `https://www.facebook.com/v16.0/dialog/oauth`;

  const options = {
    client_id: process.env.REACT_APP_FACEBOOK_OAUTH_CLIENT_ID as string,
    redirect_uri: process.env.REACT_APP_FACEBOOK_OAUTH_REDIRECT as string,
    scope: ['public_profile', 'email',].join(' '),
    state: from,
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
};