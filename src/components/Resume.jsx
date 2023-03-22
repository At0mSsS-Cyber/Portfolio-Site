import React,{useEffect,useState} from 'react';
import EducationListItem from './EducationListItem';
import WorkListItem from './WorkExperience';
import SkillListItem from './SkillListItems';
import './css/resume.css'

const Resume = ({educations, works, skills, certificates}) =>{
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        setLoaded(true)
    })
    return(
        <div className={`resume ${loaded ? 'loaded' : ''}`}>
            <div style={{ display: "flex" }}>
                <div style={{ flex: "3"}}>
                    <h2>Work <br/>Experience</h2>
                </div>
                <div style={{ flex: "3", display: "flex", flexDirection: 'column' }}>
                        {works.map(item=>(
                            <WorkListItem key={item.id} item={item} />
                        ))}
                </div>
            </div>
            <hr/>
            <div style={{ display: "flex" }}>
                <div style={{ flex: "3"}}>
                    <h2>Education</h2>
                </div>
                <div style={{ flex: "3", display: "flex", flexDirection: 'column' }}>
                        {educations.map(item=>(
                            <EducationListItem key={item.id} item={item} />
                        ))}
                </div>
            </div>
            <hr/>
            <div style={{ display: "flex" }}>
                <div style={{ flex: "3"}}>
                    <h2>Certificates</h2>
                </div>
                <div style={{ flex: "3", display: "flex", flexDirection: 'column' }}>
                        {certificates.map(item=>(
                            <EducationListItem key={item.id} item={item} />
                        ))}
                </div>
            </div>
            <hr/>
            <div style={{ display: "flex" }}>
                <div style={{ flex: "3"}}>
                    <h2>Skills<br/>& Expertise</h2>
                </div>
                <div style={{ flex: "3", display: "flex", flexDirection: 'column' }}>
                        {skills.map(item=>(
                            <SkillListItem key={item.id} item={item} />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Resume