import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/foo">Foo</Link>
          </li>
          <li>
            <Link to="/bar">Bar</Link>
          </li>
        </ul>
      </nav>
      <h1>Current page：Home</h1>
    </>
  );
};

export default Home;
