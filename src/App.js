import React, { Component } from 'react';
import './App.css';
import { ReactComponent as Logo } from './img.svg';
import Particles from 'react-tsparticles';

class Socials extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        name: "gmail",
        short_name: <span>@</span>,
        link: "mailto:sergey.vaytsel@gmail.com"
      },
      {
        name: "ymail",
        short_name: <span>@</span>,
        link: "mailto:s.vaytsel@yandex.ru"
      },
      {
        name: "linkedin",
        short_name: <span>lnkdn</span>,
        link: "https://www.linkedin.com/in/s-vaytsel"
      },
      {
        name: "github",
        short_name: <span>gthb</span>,
        link: "https://github.com/sergey-vaytsel"
      },
      {
        name: "goodreads",
        short_name: <span><span className="goodreads-good">gd</span>rds</span>,
        link: "https://www.goodreads.com/sergey_vaytsel"
      }
    ];
  }

  render() {
    return this.data.map(info => {
      return <span key={info.name}>
        <a className="contact" id={info.name}
           href={info.link} title={info.name}>
          {info.short_name}
        </a>&thinsp;
      </span>;
    });
  }
}

class ParticlesBackground extends Component {
  constructor(props) {
    super(props);
    this.options = {
      background: {
        color: { value: "#00000000" },
      },
      fpsLimit: 30,
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 100,
          enable: true,
          opacity: 0.2,
          width: 0.5,
        },
        rotate: {
          random: true,
          direction: "random",
          animation: { enable: true, speed: 3 }
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: true,
          speed: 0.35,
          straight: true,
        },
        number: {
          density: { enable: true, value_area: 800 },
          value: 80,
        },
        opacity: { value: 0.25 },
        shape: { type: "triangle" },
        size: { random: true, value: 3 },
      },
      detectRetina: true,
    };
  }

  render() {
    return (
      <Particles
        id="particles-background"
        options={this.options}
      />
    );
  }
}

function App() {
  const intro = "I'm Sergey Vaytsel, a programmer.";
  const dgis_link = "https://dev.2gis.ru/mobile-sdk";
  const profile = [
    <p key="1">
      Currently I am the &ldquo;3D Map&rdquo; Team Lead
      at <b><a id="dgis" href={dgis_link}>2GIS</a></b>.
    </p>,
    <p key="2">
      In different stages of life, I was fond of origami,
      basketball, Japan culture, playing guitar, computer games, mathematics,
      programming, testing, design, typography, writing and investments.
      Now I focused on management, programming, design and writing.
    </p>,
    <p key="3">
      Now I live in Novosibirsk.
    </p>
  ];
  return (
    <div>
      <ParticlesBackground className="particles-bg"></ParticlesBackground>
      <div className="App container">
        <div className="row logo">
          <div className="column">
            <Logo className="logo-svg" />
          </div>
        </div>
        <div className="row intro">
          <div className="column">
            {intro}
          </div>
        </div>
        <div className="row profile">
          <div className="column">
            {profile}
          </div>
        </div>
        <div className="row contacts">
          <div className="column">
            <Socials></Socials>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
