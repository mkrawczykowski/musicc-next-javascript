import React from "react";
import styles from './MainMenu.module.scss';
import MainMenuItem from '../MainMenuItem/MainMenuItem';

const MainMenu = ({ }) => {

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

  return (
    <ul className={styles.MainMenu}>
      <MainMenuItem label="free music" url="/" subMenuData={megaMenu1} />
      <MainMenuItem label="Creative Commons 4.0 license" url="/" />
      <MainMenuItem label="About the author" url="/" />
      <MainMenuItem label="Contact the author" url="/" />
    </ul>
  )
}

export default MainMenu;