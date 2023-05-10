import React, { useState } from "react";

import './Popup.css'
function Popup(props) {
    const [description, setDescription] = useState(props.descriptionText);
  
    const handleSave = () => {
      props.setDescriptionText(description);
      props.setTrigger(false);
    };
  
    return props.trigger ? (
      <div className="profile_popup">
        <div className="profile_popup-inner">
          <button className="profile_close-btn" onClick={() => props.setTrigger(false)}>
            close
          </button>
          <h2>Edit your description</h2>
          <textarea className="profile_setDescription" value={description} onChange={(e) => setDescription(e.target.value)} />
          <br></br>
          <button className="profile_save-btn" onClick={handleSave}>Save</button>
        </div>
      </div>
    ) : null;
  }
  
export default Popup