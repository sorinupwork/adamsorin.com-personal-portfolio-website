import React from 'react';
import { BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/sorin-adam-09650216b/"
          target=" blank"
          rel="noreferr"
        >
          <BsLinkedin />
        </a>
      </div>

      <div>
        <a
          href="https://twitter.com/Sorin070394"
          target=" blank"
          rel="noreferr"
        >
          <BsTwitterX />
        </a>
      </div>

      <div>
        <a href="https://github.com/sorinupwork" target=" blank" rel="noreferr">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
