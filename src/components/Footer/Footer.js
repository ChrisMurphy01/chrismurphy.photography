import React from 'react'
import './styles.scss'

import twitter from '../../../images/twitter.png'
import instagram from '../../../images/instagram.png'

const Footer = () => {
  return (
    <footer>
      <ul className='social'>
        <li className='social-item' >
          <a href='https://twitter.com/chrismurphypics' target='top' className='social-link'>
            <img src={twitter} className='social-icon' />
            @chrismurphypics</a>
        </li>
        <li className='social-item'>
          <a href='https://www.instagram.com/chrismurphy.photography/' target='top' className='social-link'>
            <img src={instagram} className='social-icon' />
            @chrismurphy.photography</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
