import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const SkillListItem = ({ item }) => {
  // Generate star icons based on skill proficiency
  const stars = Array.from({ length: item.pro }, (_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} color="gold" />
  ));
  const halfStars = Array.from({ length: Math.ceil((item.pro % 1) * 2) }, (_, index) => (
    <FontAwesomeIcon key={index} icon={faStarHalfStroke} color="gold" />
  ));
  const emptyStars = Array.from(
    { length: 5 - Math.ceil(item.pro) },
    (_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} color="silver" />
    )
  );

  const starIcons = [...stars, ...halfStars, ...emptyStars];

  return (
    <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }}>
      <div style={{ flex: 1 }}>{item.pro > 0 ? starIcons : ''}</div>
      <div style={{ flex: 3 }}>
        <h4>{item.name}</h4>
        {item.pro < 1 && (
          <ul style={{ listStyle: 'outside' }}>
            <li>{item.remarks}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SkillListItem;
