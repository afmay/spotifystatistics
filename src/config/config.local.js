const config = {
  environment: 'development',
  remoteUrl: 'https://api.spotify.com/v1/',
  spotifyAuthparams: {
    client_id: '6f8f45d707cd42db9c7c1c71575b15ef',
    redirect_uri: `${origin}/spotifycallback`,
    scope:
      'user-read-private user-top-read user-read-recently-played user-read-currently-playing playlist-modify-public playlist-modify-private user-read-play-history',
    show_dialog: true,
  },
};

export default config;
