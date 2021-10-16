import "./Create.css";
import { CreateStepOne } from "../CreateStepOne/CreateStepOne";
import { CreateStepTwo } from "../CreateStepTwo/CreateStepTwo";
import { CreateStepThree } from "../CreateStepThree/CreateStepThree";
import { useState } from "react";
import { Candidate } from "../../../entities/candidate";
import { createNewReport } from "../../../service/getData";
import { useHistory } from "react-router-dom"

// creation of a new report thru three steps (Wizard)

export const Create = ({ setToken, token }) => {
  let inititalCandidate = new Candidate();
  const [step, setStep] = useState(1);
  const [newReport, setNewReport] = useState(inititalCandidate);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const steps = ["Select Candidate", "Select Company", "Fill Report Details"];
  const statuses = ["passed", "failed"];
  const phases = ["cv", "hr", "tech", "final"];

  const goNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
    else {
      //create report
      createNewReport(newReport, setToken, token, setLoading)
      .then((data) => {
        history.push({
          pathname: "/reports",
        });
      });
    }
  };
  const goBack = () => {
    if(step > 1){
        setStep(step - 1);
    }
  }
  const stepIsValid = () => {
    switch (step) {
      case 1:
        return newReport.candidateId > 0;
      case 2:
        return newReport.companyId > 0;
      case 3:
        //validate status, make sure it's one of possible values
        if (statuses.indexOf(newReport.status) === -1) return false;

        //validate phases, make sure it's one of possible values
        if (phases.indexOf(newReport.phase) === -1) return false;

        //validate interview date
        if (!newReport.interviewDate) return false;
        //make sure it's valid date in the past.
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        const d = new Date(newReport.interviewDate);
        if (d instanceof Date && !isNaN(d.getTime())) {
          d.setHours(0, 0, 0, 0);
          if (d.getTime() <= now.getTime()) return true;
        }
        return false;
        default:
    }
    return false;
  };
  return (
    <div className="page page-create">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <ul className="step-indicators list-group">
              {steps.map((stepLabel, idx) => {
                let classes = [];
                if (step === idx + 1) classes.push("active");
                else if (step < idx + 1) classes.push("disabled");

                return (
                  <li
                    key={idx}
                    className={
                      "step-indicator list-group-item " + classes.join(" ")
                    }
                  >
                    {idx + 1}. {stepLabel}
                  </li>
                );
              })}
            </ul>
            <ul className="step-breakdown list-group my-3">
              {newReport.candidateId > 0 && step > 1 && (
                <li className="list-group-item">
                  {newReport.candidateName}
                  <small className="text-muted">Candidate</small>
                </li>
              )}
              {newReport.companyId > 0 && step > 2 && (
                <li className="list-group-item">
                  {newReport.companyName}
                  <small className="text-muted">Company</small>
                </li>
              )}
            </ul>
          </div>
          <div className="steps col-sm-12 col-md-9">
            {(() => {
              if (step === 1)
                return (
                  <CreateStepOne
                    title={steps[step - 1]}
                    token={token}
                    setToken={setToken}
                    newReport={newReport}
                    setNewReport={setNewReport}
                  />
                );
              else if (step === 2)
                return (
                  <CreateStepTwo
                    title={steps[step - 1]}
                    token={token}
                    setToken={setToken}
                    newReport={newReport}
                    setNewReport={setNewReport}
                  />
                );
              else if (step === 3)
                return (
                  <CreateStepThree
                    title={steps[step - 1]}
                    token={token}
                    setToken={setToken}
                    newReport={newReport}
                    setNewReport={setNewReport}
                    statuses={statuses}
                    phases={phases}
                  />
                );
            })()}
            <div className="step-buttons">
              {step > 1 && (
                <button
                  type="button"
                  className="btn btn-light btn-back"
                  onClick={goBack}
                  disabled={step === 1 || loading}
                >
                  Back
                </button>
              )}
              <button
                type="button"
                className="btn btn-primary btn-next"
                onClick={goNext}
                disabled={!stepIsValid() || loading}
              >
                {step === steps.length ? "Create" : "Next"}
              </button>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
