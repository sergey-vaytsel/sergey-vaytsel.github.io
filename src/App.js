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
        link: "https://www.instagram.com/vaytselsergey"
      },
      {
        name: "goodreads",
        short_name: "gdrds",
        link: "https://www.goodreads.com/user/show/88544319-sergey-vaytsel"
      },
      {
        name: "facebook",
        short_name: "fcbk",
        link: "https://www.facebook.com/sergey.vaytsel/"
      }
    ];
  }

  render() {
    return this.data.map(info => {
      return <a className="contact" id={info.name} href={info.link} title={info.name}><b>{info.short_name}</b></a>;
    });
  }
}

function App() {
  const intro = "I'm Sergey Vaytsel, a programmer.";
  const dgis_link = "https://dev.2gis.ru/mobile-sdk";
  const profile = [
    <p>Currently I am the 3D Map Team Lead at <b><a id="dgis" href={dgis_link}>2GIS</a></b>.</p>,
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
          {profile.map(paragraph => { return paragraph; })}
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
