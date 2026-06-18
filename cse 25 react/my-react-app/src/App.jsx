import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student' 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>student information</h2>
<Student name="Rohit" course="B.Tech" marks="90"/>
<Student name="Mohit" course="M.Tech" marks="95"/>
<Student name="Raj" course="MCA" marks="98"/>

    {/*
    <iframe src="https://www.youtube.com/embed/KWnmLK69EII" allowFullScreen></iframe><br></br>
    <iframe src="https://www.youtube.com/embed/WBqYqgs3hOg"></iframe><br></br>
    <iframe src="https://www.youtube.com/embed/hoNb6HuNmU0?list=RDhoNb6HuNmU0&start_radio=1"></iframe>
   <h1>Welcome to my Web Pages of Abes</h1>
   <h2>Hello</h2>
   <p>Hello Rohit Sir</p>
   <img src="https://images.pexels.com/photos/36578421/pexels-photo-36578421.jpeg"></img>
   <audio controls>
    <source src="" type="audio/mp3" ></source>
   </audio>
   
   <video controls>
    <source src="" type="video/mp4"></source>
   </video> */}
   <Student/>
   </>
  )
}

export default App