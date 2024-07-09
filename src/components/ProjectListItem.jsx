import React from 'react';
import { FaReact, FaNodeJs, FaVuejs } from 'react-icons/fa';
import { SiJavascript, SiDjango, SiMongodb, SiSqlite, SiExpress, SiCss3 } from 'react-icons/si';

const techIcons = {
  FaReact: { component: FaReact, title: 'React', color: 'rgb(94 212 243)' },
  SiMongodb: { component: SiMongodb, title: 'MongoDB', color: '#55a54d' },
  FaNodeJs: { component: FaNodeJs, title: 'Node.JS', color: 'rgb(127 199 40)' },
  FaVuejs: { component: FaVuejs, title: 'VueJS', color: '#3fb27f' },
  SiDjango: { component: SiDjango, title: 'Django', color: '#00382a' },
  SiSqlite: { component: SiSqlite, title: 'SQLite', color: '#003a5b' },
  SiExpress: { component: SiExpress, title: 'Express.JS', color: '#7e7e7e' },
  SiJavascript: { component: SiJavascript, title: 'JavaScript', color: '#e8d44d' },
  SiCss3: { component: SiCss3, title: 'CSS', color: '#254bdd' },
};

const ProjectListItem = ({ item }) => {
  return (
    <li>
      <div className="project" style={{ marginBottom: '10px' }}>
        <div className="project-info">
          <h2 className="project-title"><b>{item.name}</b></h2>
          <p style={{ color: 'grey' }}>{item.period}</p>
          <p className="project-description">{item.description}</p>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h5>Stack:</h5>
            {item.stack.map((tech) => {
              const Icon = techIcons[tech]?.component;
              const title = techIcons[tech]?.title;
              const color = techIcons[tech]?.color;
              return (
                <div key={tech} style={{ paddingLeft: '5px' }}>
                  {Icon && <Icon color={color} title={title} size={30} />}
                </div>
              );
            })}
          </div>
        </div>
        <div className="project-image">
          <img src={item.img} alt="Project" height="450px" width="450px" />
        </div>
      </div>
    </li>
  );
};

export default ProjectListItem;
