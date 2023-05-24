import React, { useState, useEffect } from "react";
import './EditProfile.css'
import { getUser } from "../../../util";
let imageUrl = null;

function EditProfile(prop) {
  const [name, setName] = useState(prop.nameText);
  const [newImageUrl, setNewImageUrl] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser();
        setUserId(data.id);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchUser();
  }, []);

  // const handleSave = () => {
  //   prop.setNameText(name);
  //   if (newImageUrl) {
  //     prop.setImageUrl(newImageUrl);
  //   }
  //   prop.onClose(false);
  // };

  const handleSave = async () => {
    console.log(userId);
    prop.setNameText(name);

      const formData = new FormData();
      formData.append('file', newImageUrl);
      formData.append('id', userId);

      try {
        const response = await fetch('http://localhost:8084/updatePicture', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          //prop.setImageUrl(newImageUrl.name);
        } else {
          throw new Error('Failed to upload image');
        }
        
      } catch (error) {
        console.error(error);
        // Handle error
      }
    prop.onClose(false);
  };

  // const handleImageUpload = (event) => {
  //   console.log('i have uploaded');
  //   const file = event.target.files[0];
  //   const allowedTypes = ['image/jpeg', 'image/png'];

  //   if (file && allowedTypes.includes(file.type)) {
  //     setNewImageUrl(URL.createObjectURL(file));
  //   } else {
  //     alert('Please select a valid image file (JPG or PNG)');
  //   }
  // };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png','image/jpg'];

    if (file && allowedTypes.includes(file.type)) {
      setNewImageUrl(file);
    } else {
      alert('Please select a valid image file (JPG or PNG)');
    }
  };

  // return prop.isOpen ? (
  //   <div className="editprofile_ep-popup">
  //     <div className="editprofile_open-popup">
  //       <button className="editprofile_x-btn profile_button" onClick={() => prop.onClose(false)}> x </button>
  //       <h2>Change your name</h2>
  //       <textarea className="editprofile_inputBox" value={name} onChange={(n) => setName(n.target.value)} />
  //       <br></br>
  //       <h2>Select profile photo</h2>
  //       <input className="myprofile_input" type='file' onChange={handleImageUpload} />
  //       <button className="editprofile_saving-btn profile_button" onClick={handleSave}>Save</button>
  //     </div>
  //   </div>
  // ) : null;

  return prop.isOpen ? (
    <div className="editprofile_ep-popup">
      <div className="editprofile_open-popup">
        <button className="editprofile_x-btn profile_button" onClick={() => prop.onClose(false)}> x </button>
        <h2>Change your name</h2>
        <textarea className="editprofile_inputBox" value={name} onChange={(n) => setName(n.target.value)} />
        <br></br>
        <h2>Select profile photo</h2>
        <input className="myprofile_input" type='file' onChange={handleImageUpload} />
        <button className="editprofile_saving-btn profile_button" onClick={handleSave}>Save</button>
      </div>
    </div>
  ) : null;
}

export default EditProfile
export { imageUrl };