import "./CandidateItem.css";

// candidate item for step one in wizard

function CandidateItem({ name, email, candidate, selected, selectCandidate, avatar }) {
    return (
      <div className="col-md-6 col-sm-12">
        <div
          className={
            "candidate-item " + (selected ? "active bg-primary" : "")
          }
          onClick={() => selectCandidate(candidate)}
        >
          <div className="row">
            <div className="col-3">
              <img src={avatar} alt="" />
            </div>
            <div className="col-9">
              <strong>{name}</strong>
              <small>{email}</small>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CandidateItem;