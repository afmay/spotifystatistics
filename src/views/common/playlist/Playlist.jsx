import React, { Fragment } from 'react';
import './style.css';
import { getAudioAnalysis } from '../../../helper/analysationhelper';

function Playlist(playlist, activePlaylist, analyse) {
  let background = {};
  if (playlist.images[0]) {
    background = {
      backgroundImage: `url(${playlist.images[0].url})`,
    };
  }

  const renderAnalysis = analyse => {
    if (!analyse) {
      return null;
    }
    return (
      <div className="playlist-overlay">
        <p className="analyse-title">Some stats on your Playlist</p>
        {analyse.danceability * 100 >= 50 ? null : (
          <div className="analyse-property">
            <p className="analyse-property-title">{`the playlist is ${
              analyse.danceability * 100
            }% danceable`}</p>
          </div>
        )}
        {analyse.energy * 100 >= 60 ? null : (
          <div className="analyse-property">
            <p className="analyse-property-title">{`are packed with energy`}</p>
          </div>
        )}
        {analyse.instrumentalness * 100 >= 70 ? null : (
          <div className="analyse-property">
            <p className="analyse-property-title">{`most of the songs are instrumental`}</p>
          </div>
        )}
        {analyse.liveness * 100 <= 70 ? null : (
          <div className="analyse-property">
            <p className="analyse-property-title">{`contain live songs`}</p>
          </div>
        )}
        {analyse.valence * 100 <= 40 ? null : (
          <div className="analyse-property">
            <p className="analyse-property-title">{`contains a lot of sad songs...need a hug?`}</p>
          </div>
        )}
        {analyse.valence * 100 >= 70 ? null : (
          <div className="analyse-property">
            <p className="analyse-property-title">{`contains a lot of euphoric songs!`}</p>
          </div>
        )}
      </div>
    );
  };

  const renderOverlay = (analyse, name) => {
    return <div className="playlist-analyse">{renderAnalysis(analyse, name)}</div>;
  };

  return (
    <div className="playlist-container" key={playlist.id}>
      <div className="playlist">
        <div
          className="img-container"
          onClick={async () => {
            // setActivePlaylist(playlist.id);
            console.log('Analyse Playlist with id: ' + playlist.id);
            console.log(await getAudioAnalysis(playlist.id));
          }}
        >
          {/* <img alt={artist.name} src={artist.images[0].url} className='artist-card-image' /> */}
          <div style={background} className="playlist-card-image"></div>
          <p className="playlist-rank">Analyze</p>
        </div>
        <p className="playlist-card-name bold">{playlist.name}</p>
      </div>
      <Fragment>
        {activePlaylist === playlist.id ? renderOverlay(analyse, playlist.name) : null}
      </Fragment>
    </div>
  );
}

export default Playlist;
