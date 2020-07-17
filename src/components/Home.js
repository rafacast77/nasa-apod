/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <Link className="home-link animate__animated animate__rubberBand" to="/nasaphoto">
        Nasa Astronomy Photo Of The Day
      </Link>
    </div>
  );
}
