import React, { useState } from "react";

import './Popup.css'
function Popup(props) {
    const [description, setDescription] = useState(props.descriptionText);
  
    const handleSave = () => {
      props.setDescriptionText(description);
      props.setTrigger(false);
    };
  
    return props.trigger ? (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            close
          </button>
          <h2>Edit your description</h2>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <br></br>
          <button className="save-btn" onClick={handleSave}>Save</button>
        </div>
      </div>
    ) : null;
  }
  
export default Popup