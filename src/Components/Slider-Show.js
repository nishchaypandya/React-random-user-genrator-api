import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Slider_Data from "./Slider-Data";

function Slider_Show() {
  // this is for user data store array
  const [users, fetchUsers] = useState([]);

  // function for fetch thought data api
  
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())  
      .then(json => fetchUsers(json))
  };

  // call data effect function
  useEffect(() => {
    getData();
  }, []);

  // slick slider effects are here
  var effects = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <Slider {...effects}>
            {users.map((data) => (
              <div className="col-5 h-100 mx-1" key={data.id}>
                <div className="box-card box-user text-center text-white">
                  <div className="h-100 list-text">
                    <Link className="text-dark link-text-main" to={`userdata/${data.id}`}>
                    <p className="text-nowrap">{data.username}</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Slider_Show;
