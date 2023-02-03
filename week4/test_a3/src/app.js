// ./src/App.js

import React, { useState } from "react";
import ReactDOM from "react-dom";

export const Banner = () => {
  const [message, setMessage] = useState("Welcome message");

  return (
    <div className="banner">
      <h2 onClick={() => setMessage("Have a Good Time!")}>{message}</h2>
    </div>
  );
};

export const Footer = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="outer">
      <div className="inner" onClick={() => setShow(!show)}>
        {"Call to Action"}
      </div>
      {show && <Box />}
    </div>
  );
};

const Title = "website Title/logo";
const myTitleID = "logo";
function Header() {
  return (
    <header className="main-header">
      <nav>
        <div className="title">
          <h1 id={myTitleID}>{Title}</h1>
        </div>
        <div className="navbar">
          <ul className="main-nav">
            <a>item1</a>
            <a>item2</a>
            <a>item3</a>
            <a>item4</a>
          </ul>
          <div className="menubar">
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function MobileNav() {
  return (
    <nav className="mobile_nav">
      <button>X</button>
      <a>item1</a>
      <a>item2</a>
      <a>item3</a>
      <a>item4</a>
    </nav>
  );
}

/*function Banner() {
  return (
    <div className="banner">
      <h2 id="headline">Welcome message</h2>
    </div>
  );
}*/

function Section() {
  return (
    <section>
      <p>Section Title</p>
    </section>
  );
}

function Box() {
  return (
    <div className="box">
      <div className="item-1 item">content BOX1</div>
      <div className="item-2 item">content BOX2</div>
      <div className="item-3 item">content BOX3</div>
      <div className="item-4 item">content BOX4</div>
    </div>
  );
}

/*function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-inner">Call to action</div>
    </footer>
  );
}*/

const Myapp = () => {
  return (
    <div>
      <Header />
      <MobileNav />
      <Banner />
      <Section />
      <Box />
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Myapp />);
