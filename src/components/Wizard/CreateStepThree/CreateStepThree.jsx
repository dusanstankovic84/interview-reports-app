// Create report wizard STEP THREE

export const CreateStepThree = ({ title, newReport, setNewReport, statuses, phases }) => {
    // functions for updating new report state from inputs, onChange
    const updateStatus = (e) => {
        setNewReport({ ...newReport, status: e.target.value });
    };
    const updatePhase = (e) => {
        setNewReport({ ...newReport, phase: e.target.value });
    };
    const updateInterviewDate = (e) => {
        setNewReport({ ...newReport, interviewDate: e.target.value });
    };
    const updateNotes = (e) => {
        setNewReport({ ...newReport, note: e.target.value });
    };

  const today = () => {               //current date for max date input
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) dd = "0" + dd;

    if (mm < 10) mm = "0" + mm;

    return `${yyyy}-${mm}-${dd}`;
  };

  const onSubmit = (e) => {           // helper function for submit button
    e.preventDefault();
    return false;
  };

  return (
    <div className="create-step create-step-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">{title}</span>
      </nav>
      <form className="row g-3 mt-3" onSubmit={onSubmit}>
        <div className="col-md-4">
          <label htmlFor="interview_date" className="form-label">
            Interview Date <span className="text-danger">*</span>
          </label>
          <input
            type="date"
            max={today()}
            className="form-control"
            id="interview_date"
            value={newReport.interviewDate}
            onChange={updateInterviewDate}
          />
          <small id="dateHelp" className="form-text text-muted">
            Date is required.
          </small>
        </div>
        <div className="col-md-4">
          <label htmlFor="status" className="form-label">
            Status <span className="text-danger">*</span>
          </label>
          <select
            id="status"
            className="form-control"
            onChange={updateStatus}
            value={newReport.status}
          >
            <option value="">- Select -</option>
            {statuses.map((val, idx) => {
              return (
                <option key={idx} value={val}>
                  {val}
                </option>
              );
            })}
          </select>
          <small id="dateHelp" className="form-text text-muted">
            Status is required.
          </small>
        </div>
        <div className="col-md-4">
          <label htmlFor="phase" className="form-label">
            Phase <span className="text-danger">*</span>
          </label>
          <select
            id="phase"
            className="form-control"
            onChange={updatePhase}
            value={newReport.phase}
          >
            <option value="">- Select -</option>
            {phases.map((val, idx) => {
              return (
                <option key={idx} value={val}>
                  {val}
                </option>
              );
            })}
          </select>
          <small id="dateHelp" className="form-text text-muted">
            Phase is required.
          </small>
        </div>
        <div className="col-12 mt-3">
          <label htmlFor="notes" className="form-label">
            Notes
          </label>
          <textarea
            rows={6}
            className="form-control"
            id="notes"
            onChange={updateNotes}
            value={newReport.notes}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
