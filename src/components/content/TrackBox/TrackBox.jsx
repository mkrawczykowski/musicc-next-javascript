import React from 'react';
import style from './TrackBox.module.scss';
import TrackTags from '../TrackTags/TrackTags';

const TrackBox = ({ trackName, trackShortDescription, trackTags }) => {

  let playerState = 'Pause';
  let stateClass = `trackBox__playerButton${playerState}`;
  console.log(style[stateClass]);

  return (
    <div className={style.trackBox}>
      {
        trackName ?
          <h3 className={style.trackBox__heading}>{trackName}</h3>
          : null
      }
      {
        trackShortDescription ?
          <p className={style.trackBox__description}> {trackShortDescription}</p>
          : null
      }

      <div className={style.trackBox__playerRow}>
        <div className={style.trackBox__player}>
          <button className={[style.trackBox__playerButton, style[stateClass]].join(' ')}></button>
          <div className={style.trackBox__playerName}></div>
          <div className={style.trackBox__playerSeek}>
            <span className={style.trackBox__playerSeekTrack} />
            <span className={style.trackBox__playerSeekPoint} />
          </div>
          <p className={style.trackBox__playerTime}>05:50</p>
        </div>
        <ul className={style.trackBox__icons}>
          <li className={[style.trackBox__icon, style.trackBox__iconDownload].join(' ')}>
            <button className={style.trackBox__iconLink}></button>
          </li>
          <li className={[style.trackBox__icon, style.trackBox__iconShare].join(' ')}>
            <button className={style.trackBox__iconLink}></button>
          </li>
        </ul>
      </div>
      {
        trackTags ? <TrackTags trackTags={trackTags} /> : null
      }
    </div>
  )
}

export default TrackBox;