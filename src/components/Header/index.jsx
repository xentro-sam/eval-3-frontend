import * as React from 'react';
import './Header.css';
import {ThemeContext} from '../../contexts/themeContext';

export default function Header() {
  const {themeId} = React.useContext(ThemeContext);
  return (
    <header id='header' className='page-padding' style={{backgroundColor: themeId}}>
      <div id='header-title'>
            EVENTIFY
      </div>
    </header>
  );
}
