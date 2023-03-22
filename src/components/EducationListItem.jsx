import React from 'react'

const EducationListItem = ({ item }) => {
  return (
    <div style={{display: 'flex',flexDirection:'row' }}>
        <div style={{flex: "1" }}>
            <p>{item.period}</p>
        </div>
        <div style={{flex: "3" }}>
            <h3>{item.course}</h3>
            <h4 style={{color:'grey'}}>{item.university}</h4>
            <p>{item.remarks}</p>
        </div>
    </div>
  )
}

export default EducationListItem