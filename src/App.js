import React from 'react';
import './App.css';
import { ReactComponent as Logo } from './img.svg';

class Socials extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        name: "mail",
        short_name: <span>@</span>,
        link: "mailto:sergey.vaytsel@gmail.com"
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
        name: "instagram",
        short_name: <span>instgrm</span>,
        link: "https://www.instagram.com/sergey_vaytsel"
      },
      {
        name: "goodreads",
        short_name: <span><span className="goodreads-good">gd</span>rds</span>,
        link: "https://www.goodreads.com/sergey_vaytsel"
      },
      {
        name: "facebook",
        short_name: <span>fcbk</span>,
        link: "https://www.facebook.com/sergey.vaytsel"
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
    </p>,
    <p key="3">
      To contact me you can use contacts below.<br/>
      Now I live in St.&nbsp;Petersburg.
    </p>
  ];
  return (
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
  );
}

export default App;
