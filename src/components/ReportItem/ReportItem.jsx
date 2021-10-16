import React, {useState} from "react";
import './ReportItem.css'
import { formatDate } from "../../service/utils"
import {ReportModal} from "../partials/ReportModal/ReportModal"
import { deleteReportsData } from "../../service/getData";

// single report item for the all reports list, with buttons for opening a modal and for deleting

export const ReportItem = ({ companyName, candidateName, interviewDate, status, id, report, setDeleteState, deleteState, setToken,token }) => {
    const [currentReport, setCurrentReport] = useState(false);
    const openReport = (report) => {                            // helper function for opening a report on click
        setCurrentReport(report);
    }
    const deleteReport = (id) => {                              // helper function for deleting a report on click
        if(!window.confirm('Are you sure you want to delete report?'))
            return false;
        deleteReportsData(setToken,token, id).then(report=> 
            {
                if (report === 200) {
                    setDeleteState(!deleteState);
                    alert('Report deleted successfully.')
                }
            }
        )}

    return (
        <div className='report-item'>
            <div className="row">
                <div className="col-sm-12 col-md-3">
                    <strong>{companyName}</strong>
                    <small>Company</small>
                </div>
                <div className="col-sm-12 col-md-3">
                    <strong>{candidateName}</strong>
                    <small>Company</small>
                </div>
                <div className="col-sm-6 col-md-2">
                    <strong>{formatDate(interviewDate)}</strong>
                    <small>Interview date</small>
                </div>
                <div className="col-sm-6 col-md-2">
                    <strong>{status}</strong>
                    <small>Status</small>
                </div>
                <div className="col-sm-6 col-md-2">
                    <button
                        className="btn btn-primary"
                        onClick={() => openReport(report)}
                    >
                        <i className="fa fa-eye"></i>
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteReport(id)}
                    >
                        <i className="fas fa-minus-circle"></i>
                    </button>
                </div>
            </div>
            {currentReport !== false && <ReportModal currentReport={currentReport} setCurrentReport={setCurrentReport} />}
        </div>
    )
}