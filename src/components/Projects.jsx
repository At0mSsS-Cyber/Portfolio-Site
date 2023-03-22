import React,{useEffect,useState} from 'react';
import ProjectListItem from './ProjectListItem';
import './css/projects.css'
import { FaAlignCenter } from 'react-icons/fa';
const Projects = ({projects}) =>{
    const [loaded, setLoaded] = useState(false);
    console.log(projects);
    useEffect(()=>{
        setLoaded(true)
    })
    return(
        <div className={`projects ${loaded ? 'loaded' : ''}`}>
            <h1><b style={{display:'block',AlignItems:'center', width:'100%', padding:'31px'}}>Projects</b></h1>
            <ul className="project-list">
                {projects.map(item=>(
                    <ProjectListItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    )
}

export default Projects