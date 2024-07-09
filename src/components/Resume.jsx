import React, { useEffect, useState } from 'react';
import EducationListItem from './EducationListItem';
import WorkListItem from './WorkExperience';
import SkillListItem from './SkillListItems';
import './css/resume.css';

const Resume = ({ educations, works, skills, certificates }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`resume ${loaded ? 'loaded' : ''}`}>
      <Section title="Work Experience" items={works} Component={WorkListItem} />
      <hr />
      <Section title="Education" items={educations} Component={EducationListItem} />
      <hr />
      <Section title="Certificates" items={certificates} Component={EducationListItem} />
      <hr />
      <Section title="Skills & Expertise" items={skills} Component={SkillListItem} />
    </div>
  );
};

const Section = ({ title, items, Component }) => (
  <div style={{ display: 'flex' }}>
    <div style={{ flex: '3' }}>
      <h2>{title}</h2>
    </div>
    <div style={{ flex: '3', display: 'flex', flexDirection: 'column' }}>
      {items.map(item => (
        <Component key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default Resume;
