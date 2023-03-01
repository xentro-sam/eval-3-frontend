import * as React from 'react';
import makeRequest from '../../utils/makeRequest';
import {GET_THEMES as getThemes} from '../../constants/apiEndPoints';
import './Footer.css';

export default function Footer() {
  const [themes, setThemes] = React.useState([]);
  React.useEffect(() => {
    makeRequest(getThemes, {})
        .then((response) => {
          console.log(response);
          setThemes(response.themes);
        });
  }, []);

  return (
    <div id='footer' className='page-padding'>
      <div id='footer-content'>
        THEMES
      </div>
      <div id='themes'>
        {themes.map((theme) => {
          return (
            <div key={theme.id} id='theme' style={{backgroundColor: theme.colorHexCode}}>
            </div>
          );
        })}

      </div>
    </div>
  );
}
