// import React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'

import { useState } from "react";



// import Home from './pages/Home'
// import About from './pages/About'
// function App() {

//   return (
//     <>
//       <h1>welcome to my app</h1>
//       <Link to={'/Home'}> Go to home page</Link>
//      <Link to={'/about'}> Go to about page</Link>

//       <Routes>
//         <Route path='/Home' element={<Home />} />
//          <Route path='/about' element={<About />} />
//       </Routes>
//     </>
//   )

// }
// export default App

//one directional--> parent to child


function App() {

const [name,setName] = useState("unkonown")
  const user={
      name:"mohan",
      bio:"front end developer"
  }


  let age=22;

function sayHello(){
  console.log("hi i 'm mahak")
}
  return (
<>
{/* <Hero userDetails={user} 
marvel={age} fun={sayHello}
name={name} setName={setName} */}
<Hero  
marvel={age} fun={sayHello}
name={name} setName={setName}
userDetails={user}
/>
</>
  )
}

export default App
//app>hero>card


function Hero({userDetails,marvel,fun,name,setName}) {
  // console.log(props)
  return (
<>
{/* <h1>helo,{marvel},{name},{setName}</h1> */}
{/* <p>details:{props.userDetails.name}</p> */}
{/* <Card data={userDetails}/> */}
<Card data={userDetails} name= {name} setName={setName}/>
<button onClick={()=>fun()}>say hello</button>
</>
  )
}


function  Card({data,name,setName}) {
  // console.log(data)
  function handleChange(){
    setName("mahak saini");
  }
  return (
 <>
<h1>name:{name}</h1>
<p>bio:{data.bio}</p>
<button onClick={handleChange}>update name</button>
 </>
  )
}

