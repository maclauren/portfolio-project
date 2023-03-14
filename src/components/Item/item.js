import React from 'react';
import './item.css';

const Item = ({ title, deployedUrl, githubUrl, imageSrc }) => {
  return (
    <div className="item">
      <h2>{title}</h2>
      <img src={imageSrc} alt={`Screenshot of ${title}`} />
      <p>
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer" >Deployed Version</a>
      </p>
      <p>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" >GitHub Repository</a>
      </p>
    </div>
  );
};

export default Item;
