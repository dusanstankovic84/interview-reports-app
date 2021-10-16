import React from "react";
import { useHistory } from "react-router";
import "./CandidateCard.css";
import { getRandomAvatar } from "../../service/utils"

// single candidate card for displaying in Home

export const CandidateCard = ({name, email, users}) => {
    const history = useHistory();
    const viewCandidate = () => {                       // helper function for clicking on card, redirecting to candidate info 
      history.push({pathname: `/candidate/${users.id}`});
    }
    return (
      <div className="candidate col-sm-6 col-md-3">
        <div className="card" onClick={viewCandidate}>
          <div className="card-image-wrapper">
            <img
              src={getRandomAvatar()}
              className="card-img-top rounded-circle"
              alt="candidate"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
            <p className="card-text text-center">{email.toLowerCase()}</p>
          </div>
        </div>
      </div>
    );
}









