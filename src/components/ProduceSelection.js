import React from "react";
import PropTypes from "prop-types";

function ProduceSelection(props){
  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      <ul>
        {props.selection.map((e,index) => 
          <li key={index}>{e}</li>
        )}
      </ul>
      <hr/>
    </React.Fragment>
  );
}

ProduceSelection.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};

export default ProduceSelection;