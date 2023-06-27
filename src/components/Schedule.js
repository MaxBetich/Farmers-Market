import React from "react";
import PropTypes from "prop-types";

function Schedule(props){
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <p>{props.hours}</p>
      <p>{props.location} | {props.booth}</p>
    </React.Fragment>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Schedule;