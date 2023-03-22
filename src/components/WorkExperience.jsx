import React from 'react'

const WorkListItem = ({ item }) => {
  return (
    <div style={{display: 'flex',flexDirection:'row' }}>
        <div style={{flex: "1" }}>
            <p>{item.period}</p>
        </div>
        <div style={{flex: "3" }}>
            <h3 >{item.title}</h3>
            <h5 style={{color:'grey'}}>{item.employer}</h5>
            <p>{item.remarks}</p>
        </div>
    </div>
  )
}

export default WorkListItem