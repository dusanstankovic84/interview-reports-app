import React, { useEffect, useState } from "react";
import {useParams, useHistory} from "react-router";
import './Candidate.css'
import { formatDate } from "../../service/utils";
import { getReportsData, getUserData } from "../../service/getData";
import { ReportTable } from "../ReportTable/ReportTable";
import { CandidateInfoItem } from "../CandidateInfoItem/CandidateInfoItem";
import { getRandomAvatar } from "../../service/utils";

// chossen (clicked on) candidate info small info items and with report table

export const Candidate = ({setToken,token }) => {
  const candidateId = useParams();
  const history = useHistory();
  const [reportData, setReportData] = useState([]);               // hook for report table data            
  const [candidate, setCandidate] = useState({});                 // hook for candidate data

  useEffect(() => {
    getUserData(setToken,token, candidateId.id, (err) => {            // getting data for candidate
      alert("Candidate not found.");
      history.push({pathname: '/'})
    }).then((user) => setCandidate(user));
    getReportsData(setToken,token).then((userReport) => setReportData(userReport));     // getting data for report table
  },[candidateId.id, history, setToken, token]);

  return (
    <div className="page page-candidate" style={{ padding: "40px" }}>
      <div className="container candidate-top">
        <div className="row">
          <div className="col-sm-12 col-md-3 candidate-image-wrapper">
            <div className="p-3">
              <img
                src={getRandomAvatar()}
                className="candidate-image"
                alt="candidate"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-5">
            <CandidateInfoItem label="Name:" value={candidate.name} />
            <CandidateInfoItem label="E-mail:" value={candidate.email?.toLowerCase()} />
          </div>
          <div className="col-sm-12 col-md-4">
            <CandidateInfoItem
              label="Date of Birth:"
              value={formatDate(candidate.birthday)}
            />
            <CandidateInfoItem label="Education:" value={candidate.education} />
          </div>
        </div>
      </div>
      <div className="candidate-reports">
        <h3 className="mb-4">Reports</h3>
        <ReportTable
          report={reportData}
          candidateId={candidate.id}
          formatDate={formatDate}
        />
      </div>
    </div>
  );
};
