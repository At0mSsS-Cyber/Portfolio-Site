import React from 'react'
import { FaReact,FaNodeJs,FaVuejs, Ja } from 'react-icons/fa';
import { SiJavascript,SiDjango,SiMongodb, SiSqlite, SiExpress, SiCss3 } from 'react-icons/si';

const ProjectListItem = ({ item }) => {
  return (
    <li>
    <div className="project" style={{ marginBottom:'10px'}}>
        <div className="project-info">
            <h2 className="project-title"><b>{item.name}</b></h2>
            <p color='grey'>{item.period}</p>
            <p className="project-description">{item.description}</p>
            <div style={{display:'flex', direction:'row'}}>
              <h5>Stack:</h5>
              {item.stack.map((tech) => {
                  let IconComponent;
                  let title;
                  let color;
                  switch (tech) {
                      case 'FaReact':
                          IconComponent = FaReact;
                          title= 'React';
                          color='rgb(94 212 243)'
                          break;
                      case 'SiMongodb':
                          IconComponent = SiMongodb;
                          title = 'MongoDB'
                          color = '#55a54d'
                          break;
                      case 'FaNodeJs':
                          IconComponent = FaNodeJs;
                          color='rgb(127 199 40)'
                          title='Node.JS'
                          break;
                      case 'FaVuejs':
                          IconComponent = FaVuejs;
                          title='VueJS'
                          color='#3fb27f'
                          break;
                      case 'SiDjango':
                          IconComponent = SiDjango;
                          title='Django'
                          color='#00382a'
                          break;
                      case 'SiSqlite':
                          IconComponent = SiSqlite;
                          title='SQLite'
                          color='#003a5b'
                          break;
                      case 'SiExpress':
                          IconComponent = SiExpress;
                          title='Express.JS'
                          color='#7e7e7e'
                          break;
                      case 'SiJavascript':
                          IconComponent = SiJavascript;
                          title= "Java Script"
                          color='#e8d44d'
                          break;
                      case 'SiCss3':
                          IconComponent = SiCss3;
                          title= "CSS"
                          color='#254bdd'
                          break;
                      default:
                          IconComponent = null;
                  }
                return (
                  <div key={tech}>
                      {IconComponent && <IconComponent color={color} title={title} style={{paddingLeft:'5px'}} size={30}/>}
                  </div>
                    )
                })}
            </div>
            
        </div>
        <div className="project-image">
        <img src={item.img} alt="Project img" height="450px" width="450px"/>
        </div>
    </div>
  </li>
  )
}

export default ProjectListItem