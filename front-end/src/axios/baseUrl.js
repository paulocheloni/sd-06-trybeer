export const selectUrl = () => {
  switch (process.env.REACT_APP_ENV) {
    case 'dev':
      return 'http://localhost:3001';
    case 'prod':
      return 'http://nome-do-projeto.heroku-app.com'
    default:
      return 'http://localhost:3001';
  }
};
