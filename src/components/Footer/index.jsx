import * as React from 'react';
import makeRequest from '../../utils/makeRequest';
import {GET_THEMES as getThemes} from '../../constants/apiEndPoints';
import './Footer.css';
import {ThemeContext} from '../../contexts/themeContext';

export default function Footer() {
  const {themeId, toggleTheme} = React.useContext(ThemeContext);
  const [themes, setThemes] = React.useState([]);
  const [selectedTheme, setSelectedTheme] = React.useState(null);
  const [isButtonVisible, setIsButtonVisible] = React.useState(true);

  React.useEffect(() => {
    makeRequest(getThemes, {})
        .then((response) => {
          setThemes(response.themes);
          toggleTheme(response.themes[response.preferredThemeId - 1].colorHexCode);
        });
  }, []);

  const handleSelectedTheme = (event) => {
    const selectedTheme = event.target.style.backgroundColor;
    setSelectedTheme(selectedTheme);
  };

  const handleToggle = () => {
    toggleTheme(selectedTheme);
    setIsButtonVisible(false);
  };
  return (
    <div id='footer' className='page-padding' style={{backgroundColor: themeId}}>
      <div id='footer-content'>
        THEMES
      </div>
      <div id='themes'>
        {themes.map((theme) => {
          return (
            <div key={theme.id} id='theme' style={{backgroundColor: theme.colorHexCode}} onClick={handleSelectedTheme}>
            </div>
          );
        })}
      </div>
      <div id='toggle-button'>
        {isButtonVisible && <button onClick={handleToggle}>Save Theme</button>}
      </div>
    </div>
  );
}
