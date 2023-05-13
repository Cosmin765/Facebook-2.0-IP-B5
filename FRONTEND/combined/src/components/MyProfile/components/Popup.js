// Popup.js
import React, { useState } from "react";

import './Popup.css';

function Popup({ trigger, setTrigger, descriptionText, setDescriptionText }) {
  const [description, setDescription] = useState(descriptionText);

  const handleSave = () => {
    setDescriptionText(description);
    setTrigger(false);
  };

  return trigger ? (
    <div className="profile_popup">
      <div className="profile_popup-inner">
        <button className="profile_close-btn" onClick={() => setTrigger(false)}>
          Close
        </button>
        <h2>Edit your description</h2>
        <textarea
          className="profile_setDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button className="profile_save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  ) : null;
}

export default Popup;
