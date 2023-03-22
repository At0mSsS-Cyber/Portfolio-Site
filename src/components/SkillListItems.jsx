import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';

const SkillListItem = ({ item }) => {
    let stars = Array.from({ length: item.pro }, (_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} color='gold' />
      ));
    let halfStars = Array.from({ length: ((item.pro)%1)*2 }, (_, index) => (
    <FontAwesomeIcon key={index} icon={faStarHalfStroke} color='gold' />
    ));
    let emptyStars = Array.from({ length: 5-((item.pro-item.pro%1)+(((item.pro)%1)*2))}, (_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} color='silver' />
      ));
    let star = stars.concat(halfStars.concat(emptyStars))
  return (
    <div style={{display: 'flex',flexDirection:'row',paddingBottom:'10px' }}>
        <div style={{flex: "1" }}>
            {item.pro > 0 ? star : ''}
        </div>
        <div style={{flex: "3" }}>
            <h4>{item.name}</h4>
            {item.pro <1 ? <ul style={{ listStyle:'outside'}}><li >{item.remarks}</li></ul> : '' }
        </div>
    </div>
  )
}

export default SkillListItem