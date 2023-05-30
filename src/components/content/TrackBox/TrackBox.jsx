import React from 'react';
import style from './TrackBox.module.scss';
import TrackTags from '../TrackTags/TrackTags';

const TrackBox = ({ trackName, trackShortDescription, trackTags }) => {
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
          <div className={style.trackBox__playerPlay}></div>
          <div className={style.trackBox__playerName}></div>
          <div className={style.trackBox__playerTrack}></div>
          <p className={style.trackBox__playerTime}></p>
        </div>
        <ul className={style.trackBox__icons}>
          <li className={style.trackBox__icon}>download</li>
          <li className={style.trackBox__icon}>share</li>
        </ul>
      </div>
      {
        trackTags ? <TrackTags trackTags={trackTags} /> : null
      }
    </div>
  )
}

export default TrackBox;