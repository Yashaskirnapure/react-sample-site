import Nav from "./Nav";
import Home from "./Navigation pages/Home";
import Members from "./Navigation pages/Members";
import About from "./Navigation pages/About";
import Feedback from "./Navigation pages/Feedback";
import Missing from "./Navigation pages/Missing";
import Footer from "./Footer";

import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from "react";

function App() {

  const API_URL_MEMBERS = 'http://localhost:4000/members';
  const API_URL_REVIEWS = 'http://localhost:4000/reviews';
  const [reviews, setReviews] = useState([]);
  const [members, setMembers] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  // useEffect(() => {
  //   const funcCall = async() => {
  //     try{
  //       const responseReviews = await fetch(API_URL_REVIEWS);
  //       const responseMembers = await fetch(API_URL_MEMBERS);

  //       if(!responseMembers.ok || !responseReviews.ok) 
  //         throw new Error('Error occured in fetching data');

  //       const reviewsList = responseReviews.json();
  //       const membersList = responseMembers.json();

  //       setReviews(reviewsList.splice(0, 4));
  //       setMembers(membersList);
  //       setFetchError(null);
  //     }catch(err){
  //       setFetchError(err.message);
  //     }
  //   }

  //   funcCall();
  // }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/members" element={<Members/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="*" element={<Missing/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
