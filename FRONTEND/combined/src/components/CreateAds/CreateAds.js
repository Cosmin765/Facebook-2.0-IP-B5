import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import { useState } from 'react';

export default function CreateAds() {
    const [list, setList] = useState();

    const modifyList = (event) => {
        setList(event.target.value);

        const words = typeof list === 'string' ? list.split(',') : "";
        setAd(prevAd => {
            return {...prevAd, keywords: words};
          });
    }

    const createAd = (e) => {
        e.preventDefault();

        console.log(ad);
    }

    const [ad, setAd] = useState({
        titlu: "",
        files: FileList,
        typeAreaVal: "",
        link: "",
        keywords: []
      });

      const updateTitlu = (event) => {
        setAd(prevAd => {
          return {...prevAd, titlu: event.target.value};
        });
      }

      const updateLink = (event) => {
        setAd(prevAd => {
          return {...prevAd, link: event.target.value};
        });
      }

      const updateTypeAreaVal = (event) => {
        setAd(prevAd => {
          return {...prevAd, typeAreaVal: event.target.value};
        });
      }
    
      const UploadFilesHandler = (event) => {
        setAd(prevAd => {
          return {...prevAd, files: event.target.files};
        });
      }

    
    return (
              <form style={{margin: 100}}>
                <input type="text" id="titlu" name="titlu" placeholder="titlu" onChange={updateTitlu}/><br></br><br></br>
                <label htmlFor="imagine">Image:</label><br></br>
                <input type="file" id="imagine" name="imagine" onChange={UploadFilesHandler} /><br></br><br></br>
                <textarea id="message" name="message" rows="4" cols="50" placeholder="content" onChange={updateTypeAreaVal}></textarea><br></br><br></br>
                <input type="text" id="link" name="link" placeholder="link" onChange={updateLink}/><br></br><br></br>
                <input type="text" id="keywords" name="keywords" placeholder="keywords" onChange={modifyList}/><br></br><br></br><br></br>

                <input type="submit" value="Submit" onClick={createAd}/>
            </form>            
    );
}