import React from 'react';
import './App.css';

class Socials extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        name: "mail",
        short_name: "@",
        link: "mailto:sergey.vaytsel@gmail.com"
      },
      {
        name: "linkedin",
        short_name: "lnkdn",
        link: "https://www.linkedin.com/in/s-vaytsel"
      },
      {
        name: "github",
        short_name: "gthb",
        link: "https://github.com/sergey-vaytsel"
      },
      {
        name: "instagram",
        short_name: "instgrm",
        link: "https://www.instagram.com/sergey_vaytsel"
      },
      {
        name: "goodreads",
        short_name: "gdrds",
        link: "https://www.goodreads.com/sergey_vaytsel"
      },
      {
        name: "facebook",
        short_name: "fcbk",
        link: "https://www.facebook.com/sergey.vaytsel"
      }
    ];
  }

  render() {
    return this.data.map(info => {
      return <a
          className="contact"
          id={info.name}
          href={info.link}
          title={info.name}
        ><b>{info.short_name}</b></a>;
    });
  }
}

function App() {
  const intro = "I'm Sergey Vaytsel, a programmer.";
  const dgis_link = "https://dev.2gis.ru/mobile-sdk";
  const profile = [
    <p>
      Currently I am the &ldquo;3D Map&rdquo; Team Lead
      at <b><a id="dgis" href={dgis_link}>2GIS</a></b>.
    </p>,
    <p>
      In different stages of life, I was fond of origami,
      basketball, Japan culture, playing guitar, computer games, mathematics,
      programming, testing, design, typography, writing and investments.
    </p>,
    <p>
      To contact me you can use contacts below.<br/>
      Now I live in St.&nbsp;Petersburg.
    </p>
  ];
  return (
    <div className="App container">
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
