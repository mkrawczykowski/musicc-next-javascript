import React from 'react';
import style from './TrackTags.module.scss';

const TrackTags = ({ trackTags }) => {
  if (trackTags) {
    return (
      <ul className={style.trackTags}>
        {
          trackTags.map(trackTag => {
            return <li className={style.trackTags__taxonomy}>
              <a href="" className={style.trackTags__taxonomyLink}>
                {trackTag}
              </a>
            </li>
          })
        }
      </ul>
    )
  }
}

export default TrackTags;