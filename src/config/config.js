const config = {
  environment: 'production',
  remoteUrl: 'https://api.spotify.com/v1/',
  spotifyAuthparams: {
    client_id: '91267676570e417f9dd68f2aaea7f0d9',
    redirect_uri: `${origin}/spotifycallback`,
    scope:
      'user-read-private user-top-read user-read-recently-played user-read-currently-playing playlist-modify-public playlist-modify-private user-read-play-history',
    show_dialog: true,
  },
};

export default config;
