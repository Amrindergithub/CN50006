import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FacebookEmojiCounter from './Facebookemoji'; // Import FacebookEmojiCounter
import ToggleMode from './ToggleModeComponent'; // Import ToggleMode

ReactDOM.render(
  <React.StrictMode>
    {/* Facebook Emoji Counter Components */}
    <React.Fragment>
      <FacebookEmojiCounter type="like" />
      <FacebookEmojiCounter type="Love" />
      <FacebookEmojiCounter type="Happy" />
      
      {/* Toggle Mode Component */}
      <ToggleMode />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);