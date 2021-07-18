import React, {useState, useEffect} from 'react';
import './accordion.css';



const Accordion = () => {

  const [items, setIsActive] = useState([
    {id: 1, title: "HEADER ONE", name: "Topic one", isActive: true },
    {id: 2, title: "HEADER TWO", name: "Topic two", isActive: false},
    {id: 3, title: "HEADER TREE", name: "Topic tree", isActive: false},
    {id: 4, title: "HEADER FOUR", name: "Topic four", isActive: false},
    {id: 5, title: "HEADER FIVE", name: "Topic five", isActive: false}
  ])



const handlerClick = (id, isActive) => {
  for(var i in items) {
    if(items[i].id === id) {
      items[i].isActive = !isActive;
    } else
      items[i].isActive = false;
  }
 setIsActive([...items]);
}

  useEffect(() => {

  }, [])


  const myAccord = items.map( accordion => {
     return (
         <div className="container-accodion" key={accordion.id}>
          <div className="m-panel-header" onClick={() => handlerClick(accordion.id, accordion.isActive)}
          style={{backgroundColor: accordion.isActive ?  "#6ca626" : "#134d95"}}>
              <h1>{accordion.title}<span className= {accordion.isActive ? "animated" : " " }>&gt;</span></h1>
          </div>
{ accordion.isActive && <div className="m-panel-body" >
              <ul>
                <li><a href="/" >- Informations about {accordion.name}.</a></li>
                <li><a href="/" >- Descriptions about {accordion.name}.</a></li>
                <li><a href="/" >- Comments about {accordion.name}.</a></li>
                <li><a href="/" >- Revelations about {accordion.name}.</a></li>
                <li><a href="/" >- Forums about {accordion.name}.</a></li>
              </ul>
          </div>}
        </div>
      )
    })

  return (
    <div>
      {myAccord}
    </div>
  )
}

export default Accordion;
