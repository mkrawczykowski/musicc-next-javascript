import React, { useContext } from "react";
import styles from './MainMenu.module.scss';
import { Context } from '../Context/Context';
import MainMenuItem from '../MainMenuItem/MainMenuItem';

const MainMenu = () => {
  const { state } = useContext(Context);
  const mobileMenuActive = state.mobileMenuActive ? styles.MainMenu__listActive : null;
  const activeMegaMenu = state.activeMegaMenu;
  const megaMenu1 =
  {
    moods:
    {
      widgetType: 'list',
      widgetData: [
        {
          label: 'warm',
          url: '#',
        },
        {
          label: 'cold',
          url: '#',
        },
        {
          label: 'mysterious',
          url: '#',
        },
        {
          label: 'emotional',
          url: '#',
        },
        {
          label: 'happy',
          url: '#',
        }
      ],
      widgetHeading: 'by mood',
      widgetLinkLabel: 'see all moods',
      widgetLinkUrl: '#'
    },
    instruments:
    {
      widgetType: 'list',
      widgetData: [
        {
          label: 'synth',
          url: '#'
        },
        {
          label: 'piano',
          url: '#'
        },
        {
          label: 'drums',
          url: '#'
        },
        {
          label: 'bass',
          url: '#'
        },
        {
          label: 'double bass',
          url: '#'
        }
      ],
      widgetHeading: 'by instrument',
      widgetLinkLabel: 'see all instruments',
      widgetLinkUrl: '#'
    },
    mostPopular:
    {
      widgetType: 'simple',
      widgetData: ['tracks with the biggest number of downloads'],
      widgetHeading: 'Most popular tracks',
      widgetLinkLabel: 'see all tracks',
      widgetLinkUrl: '#'
    },
    featured:
    {
      widgetType: 'simple',
      widgetData: ['tracks I like the most'],
      widgetHeading: 'Featured tracks - tracks I like the most',
      widgetLinkLabel: 'see all tracks',
      widgetLinkUrl: '#'
    },
  }
  // if (state.activeMegaMenu === subMenuIndex) {
  //   const newState = { ...state };
  //   newState.activeMegaMenu = null;
  // }
  // if (!state.activeMegaMenu === subMenuIndex) {
  //   const newState = { ...state };
  //   newState.activeMegaMenu = subMenuIndex;
  // }
  // newState.activeMegaMenu = subMenuIndex;
  return (
    <div className={styles.MainMenu}>
      <ul className={[styles.MainMenu__list, mobileMenuActive].join(' ')}>
        <MainMenuItem label="free music" url="/" subMenuData={megaMenu1} subMenuIndex={0} />
        <MainMenuItem label="Creative Commons 4.0 license" url="/" />
        <MainMenuItem label="about the author" url="/" />
        <MainMenuItem label="contact the author" url="/" />
      </ul>
    </div>

  )
}

export default MainMenu;