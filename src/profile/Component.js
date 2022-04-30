
    
import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  props.handleName(`I m  ${props.fullName} `);
  return (
    <>
      <h2>{props.fullName}</h2>
      <h5>I am a {props.profession}</h5>
      <img src={props.src} alt="" />
      {props.children}
      <p> {props.bio}</p>
      
    </>
  );
};

Profile.defaultProps = {
  fullName: "Younesse Bayoud",
  profession: "Full Stack Developer",
  bio:
    "A Full Stack Developer ",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  profession: PropTypes.string,
  bio: PropTypes.string,
  src: PropTypes.string,
};
export default Profile;
