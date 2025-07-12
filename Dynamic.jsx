import React from 'react'
import { useParams } from 'react-router-dom'

function Dynamic() {
     const {value}= useParams()     // use param se value access kr skte h
  console.log(value)
  const project=[
    {
        id:1,
        name:'portfolio',
        desc:'this is description of my project'
    },
    {
        id:2,
        name:'e-commerce',
        desc:'this is description of my project'
    },
    {
        id:3,
        name:'AI',
        desc:'this is description of my project'
    }
  ]
  const projects=project.filter((item)=>item.id==value); 
console.log(projects);
  //single value
//   const singleproject=projects[0]//dynamic
  return (
    <div>
       {
        singleproject.name
       }
    </div>
  )          
}
export default Dynamic
//    project.map((key)=>{                    // sari value 
//           return  <p key={key.id}>//doubt
//                {key.name}
//             </p>

