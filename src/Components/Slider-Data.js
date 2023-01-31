import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Slider_Data({ match }) {
  const [user, fetchUser] = useState([]);
  const params = useParams();
  //  this function for fetch thought data api 
  const getData = async () => {
   await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(res => res.json())
      .then(json => fetchUser(json));
  };
 
  //  this is call data effect
  useEffect(() => {
    getData();
  }, []);

  return (
<div className="box-center">
    <div className="card">
    <div className="cover-photo">
        <img src="https://i.imgur.com/KykRUCV.jpeg" className="profile"/>
    </div>
    <h3 className="profile-name">Hello , I'm {user.username}</h3>
    <p className="about">My Email is <a href="mailto:">{user.email}</a><br/> Web Developer</p>
    <button className="btns">Message Me</button> 
</div>
</div>
    
  );
}

export default Slider_Data;
