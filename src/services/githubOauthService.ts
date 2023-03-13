export const getGithubUrl = (from: string) => {
  const rootUrl = `https://github.com/login/oauth/authorize`;

  const options = {
    client_id: process.env.REACT_APP_GITHUB_OAUTH_CLIENT_ID as string,
    redirect_uri:
      `${process.env.REACT_APP_WEB_API_BASE_URL as string}${process.env.REACT_APP_GITHUB_OAUTH_REDIRECT as string}`,
    scope: ['user:email',].join(' '),
    state: from,
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
};