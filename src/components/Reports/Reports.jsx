import React,{useEffect, useState} from "react";
import { getReportsData } from "../../service/getData";
import { ReportItem } from "../ReportItem/ReportItem";
import { Search } from "../partials/Search/Search";

// all reports list page with listed report items and a search input

export const Reports = ({setToken,token}) => {
    const [report, setReport] = useState([])
    const [deleteState, setDeleteState] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getReportsData(setToken,token).then(users => setReport(users))
        
    }, [deleteState,setToken,token])

    return (
      <div className="page-reports">
        <Search title={"Reports"} search={search} setSearch={setSearch} />
        <div className="container">
          {report
            .sort((a, b) => {
              let c = Date.parse(a.interviewDate);
              let d = Date.parse(b.interviewDate);
              return d - c;
            })
            .map((user) => {
              const s = search.trim().toLowerCase();
              if (
                s === "" ||
                user.companyName.toLowerCase().indexOf(s) !== -1 ||
                user.candidateName.toLowerCase().indexOf(s) !== -1
              ) {
                return (
                  <ReportItem
                    key={user.id}
                    companyName={user.companyName}
                    candidateName={user.candidateName}
                    interviewDate={user.interviewDate}
                    status={user.status}
                    id={user.id}
                    setDeleteState={setDeleteState}
                    deleteState={deleteState}
                    setToken={setToken}
                    report={user}
                    token={token}
                  />
                );
              } else return null;
            })}
        </div>
      </div>
    );
}