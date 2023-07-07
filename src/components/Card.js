import React from 'react'

const Card = ({characters = []}) => {
  return (
    <div className='row'>
      {
        characters.map((item,index) => (
          <div key={index} className='col mb-5'>
              <div className='card' style={{minWidth: "200px"}}>
                <img src={item.image}/>
                <div className='card-body'>
                  <h5 className='card-tittle'>{item.name}</h5>
                  <hr/>
                  <p>Location: {item.location.name}</p>
                  <p>Espcie: {item.species}</p>
                </div>
              </div>                    
          </div>                     
        ))
      }
    </div>
  )
}

export default Card