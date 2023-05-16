import React, { useState } from "react";
import './EditProfile.css'

let imageUrl = null;

function EditProfile(prop) {
  const [name, setName] = useState(prop.nameText);
  const [newImageUrl, setNewImageUrl] = useState(null);

  const handleSave = () => {
    prop.setNameText(name);
    if (newImageUrl) {
      prop.setImageUrl(newImageUrl);
    }
    prop.onClose(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png'];

    if (file && allowedTypes.includes(file.type)) {
      setNewImageUrl(URL.createObjectURL(file));
    } else {
      alert('Please select a valid image file (JPG or PNG)');
    }
  };

  return prop.isOpen ? (
    <div className="editprofile_ep-popup">
      <div className="editprofile_open-popup">
        <button className="editprofile_x-btn" onClick={() => prop.onClose(false)}> x </button>
        <h2>Change your name</h2>
        <textarea className="editprofile_inputBox" value={name} onChange={(n) => setName(n.target.value)} />
        <br></br>
        <h2>Select profile photo</h2>
        <input type='file' onChange={handleImageUpload} />
        <button className="editprofile_saving-btn" onClick={handleSave}>Save</button>
      </div>
    </div>
  ) : null;
}

export default EditProfile
export { imageUrl };