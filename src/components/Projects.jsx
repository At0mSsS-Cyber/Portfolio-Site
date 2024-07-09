import React, { useEffect, useState } from 'react';
import ProjectListItem from './ProjectListItem';
import './css/projects.css';

const Projects = ({ projects }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`projects ${loaded ? 'loaded' : ''}`}>
      <h1 style={{ display: 'block', textAlign: 'center', width: '100%', padding: '31px' }}>
        <b>Projects</b>
      </h1>
      <ul className="project-list">
        {projects.map((item) => (
          <ProjectListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
