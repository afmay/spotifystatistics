const config = {
  environment: 'production',
  remoteUrl: 'https://api.spotify.com/v1/',
  spotifyAuthparams: {
    client_id: 'fe3abf1fd7cb45e68237c79d0b4de86f',
    redirect_uri: `${origin}/spotifycallback`,
    scope:
      'user-read-private user-top-read user-read-recently-played user-read-currently-playing playlist-modify-public playlist-modify-private playlist-read-collaborative user-read-play-history',
    show_dialog: true,
  },
};

export default config;
