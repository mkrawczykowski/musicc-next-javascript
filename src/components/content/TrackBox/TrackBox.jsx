import React from 'react';
import style from './TrackBox.module.scss';

const TrackBox = () => {
  return (
    <div className={style.trackBox}>
      <h3 className={style.trackBox__heading}>Please, dont stop the music</h3>
      <p className={style.trackBox__description}>
        Tutaj będzie krótki opis kawałka, który nie zawsze będzie występował. Dam tutaj ograniczony boksik, czyli mały boks.
      </p>
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
      <ul className={style.trackBox__taxonomies}>
        <li className={style.trackBox__taxonomy}>happy</li>
        <li className={style.trackBox__taxonomy}>mysterious</li>
        <li className={style.trackBox__taxonomy}>warm</li>
        <li className={style.trackBox__taxonomy}>synth</li>
        <li className={style.trackBox__taxonomy}>piano</li>
        <li className={style.trackBox__taxonomy}>drums</li>
        <li className={style.trackBox__taxonomy}>bass</li>
      </ul>
    </div>

  )
}

export default TrackBox;