import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import {ProjectsList, EducationList, WorkExperience, Skills, Certifications} from "./components/data/Api";
import Resume from "./components/Resume";

const Routing = () =>{
  const sortedSkills = [...Skills].sort((a,b)=>
    b.pro - a.pro
  )
  return(
    <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/resume" element={<Resume educations={EducationList} works={WorkExperience} skills={sortedSkills} certificates={Certifications} /> } />
          <Route path="/project" element={<Projects projects={ProjectsList}/>} />
          <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routing />
    <hr style={{ width:'80%', marginLeft:'10%'}}/>
    <Footer />
  </BrowserRouter>
  );
}

export default App;

