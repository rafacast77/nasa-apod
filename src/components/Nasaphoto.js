/** @format */
import React from 'react';
import NavBar from "./NavBar";
import { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <> 
    <NavBar />
    <div className="nasa-photo  ">
      {photoData.media_type === 'image' ? (
        <img src={photoData.url} alt={photoData.title} className="photo animate__animated animate__bounceInLeft" />
      ) : (
        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo animate__animated animate__bounceInLeft"
        />
      )}
      <div className="animate__animated animate__bounceInRight">
        <h1>{photoData.title}</h1>
        <p className="date">{photoData.date}</p>
        <p className="explanation">{photoData.explanation}</p>
      </div>
    </div>   
    </>
  );
}
