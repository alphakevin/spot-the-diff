import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import PicView from './PicView';
import { Picture } from './types';

const pics: Picture[] = [
  { level: 1, url: '1.jpg', title: 'Popcorn' },
  { level: 2, url: '2.jpg', title: 'Banana' },
  { level: 3, url: '3.jpg', title: 'Donut' },
  { level: 4, url: '4.jpg', title: 'Dessert' },
  { level: 5, url: '5.jpg', title: 'Cars' },
  { level: 6, url: '6.jpg', title: 'Vegetable' },
  { level: 7, url: '7.jpg', title: 'Decoration' },
  { level: 8, url: '8.jpg', title: 'Omelet' },
  { level: 9, url: '9.jpg', title: 'Cereals' },
  { level: 10, url: '10.jpg', title: 'Sashimi' },
  { level: 11, url: '11.jpg', title: 'Balloon' },
  { level: 12, url: '12.jpg', title: 'Flowers' },
  { level: 13, url: '13.jpg', title: 'Honey' },
  { level: 14, url: '14.jpg', title: 'Desktop' },
  { level: 15, url: '15.jpg', title: 'Marathon' },
  { level: 16, url: '16.jpg', title: 'Beach' },
  { level: 17, url: '17.jpg', title: 'Cafe' },
  { level: 18, url: '18.jpg', title: 'High heels' },
  { level: 19, url: '19.jpg', title: 'Cupcakes' },
  { level: 20, url: '20.jpg', title: 'Bicycles' },
];

function App() {
  const [pic, setPic] = useState<Picture | undefined>();
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://github.com/alphakevin/spot-the-diff"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
          Spot the Difference
        </a>
        {', using '}
        <a className="App-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode">
          CSS blending mode
        </a>
        {', '}
        images from
        {' '}
        <a href="https://www.rd.com/list/spot-the-difference/">
          here
        </a>
      </header>
      <main className="App-main">
        <Nav pics={pics} selected={pic} onChange={setPic} />
        <PicView pic={pic} />
      </main>
    </div>
  );
}

export default App;
