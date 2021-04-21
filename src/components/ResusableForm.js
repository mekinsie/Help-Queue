import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;