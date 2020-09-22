import * as React from "react";
import { reports as data } from "../util/sampledata";
import { percentageReport ,onOffGuide } from "../util/sampledata";
import {CSVLink} from 'react-csv'
import { Link, RouteProps,useLocation } from "react-router-dom";
import { Modal, Form } from "react-bootstrap";

const ReportContainer: React.FC<RouteProps> = (props) => {
   const location = useLocation()
   const {search} = location
    const params =new URLSearchParams(search)
    console.log(params.toString())
  const [reports, setReport] = React.useState(data);
  const [addWinState, setAddWinState] = React.useState<boolean>(false);
  const  [isReportUpdated,setReportUpdate] = React.useState<boolean|null>(false)
  React.useEffect(()=>{
    setReport(data)
  },[isReportUpdated])
  const handleReportUpdates =()=>{
    setReportUpdate(!isReportUpdated)
  }
  const disableReport = (index: number) => {
    setReport(reports?.filter((ele, ind) => ind !== index));
  };
  const toggleAddReportWindow = () => {
    setAddWinState(!addWinState);
  };
  return (
    <div className="main-container">
      <div className="title">Reports</div>
      <div className="summary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
        justo commodo. Proin sodales pulvinar sic tempor.
      </div>
      <div className="reports-table-container">
        <div className="add-btn">
          <button className="primary-btn" onClick={toggleAddReportWindow}>
            {" "}
            + Add Report
          </button>
          <CreateReport
            isActive={addWinState}
            toggleState={toggleAddReportWindow}
            onSave={handleReportUpdates}
            mode="Add"
          ></CreateReport>
        </div>
        <table>
          <colgroup>
            <col style={{ width: "37%" }} />
            <col style={{ width: " 48%" }} />
            <col style={{ width: " 15%" }} />
          </colgroup>
          <thead>
            <tr className="table-col-head">
              <th>Report Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => {
              return (
                <Row
                  key={report.name}
                  id={index}
                  {...report}
                  handleDisable={() => {
                    disableReport(index);
                  }}
                  onSave={handleReportUpdates}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface RowProps {
  id :number
  name: string;
  description: string;
  url?: string;
  handleDisable: () => void;
  onSave: ()=>void;
}

const Row: React.FC<RowProps> = (props) => {
  const { name, description, url, handleDisable,onSave,id } = props;
  const [addWinState, setAddWinState] = React.useState<boolean>(false);
  const toggleAddReportWindow = () => {
    setAddWinState(!addWinState);

  };
  return (
    <React.Fragment>
      <CreateReport
      
        isActive={addWinState}
        toggleState={toggleAddReportWindow}
        id={id}
        name={name}
        description={description}
        url={url}
        onSave={onSave}
        mode={"Edit"}
      ></CreateReport>
      <tr className="reports-table-row">
        <td className="col-name">{name}</td>
        <td className="col-description">
          {description.length > 60
            ? `${description.substr(0, 60)}...`
            : description}
        </td>
        <td className="col-action">
          <Link to={`/report/${name}`} className="report-link">
            View Report
          </Link>
          <label className="dropdown">
            <div className="dd-button"> &#9662; </div>
            <input type="checkbox" className="dd-input" id="test" />
            <ul className="dd-menu">
              <li>
                <Link to={`/report/${name}`} className="report-link">
                  View Report
                </Link>
              </li>
              <li><CSVLink data={percentageReport} filename={`${name}.csv`} className='download-btn'>Export Report</CSVLink></li>
              <li onClick={toggleAddReportWindow}>Edit Report</li>
              <li onClick={handleDisable}>Disable Report</li>
            </ul>
          </label>
        </td>
      </tr>
    </React.Fragment>
  );
};

interface ModalProps {
  id?:number
  name?: string;
  description?: string;
  url?: string;
  isActive: boolean;
  mode:"Add"|"Edit"
  toggleState: () => void;
  onSave: ()=>void;
}
const CreateReport: React.FC<ModalProps> = (props) => {
  const {
    id =0,
    name = "",
    description = "",
    url = "",
    isActive,
    mode,
    toggleState,
    onSave
  } = props;
  const [reportName, setName] = React.useState(name);
  const [reportDes, setDescription] = React.useState(description);
  const [reportUrl, setUrl] = React.useState(url);
  const [isSubmit, setSubmit] = React.useState(false);
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setSubmit(true);
    if (reportName.length && reportDes.length && reportUrl.length ){
      if(mode==='Add'){
        console.log("Add the BackEnd with New Report Data",{reportName,reportDes,reportUrl})
      }
        else{
        console.log("Edit the BackEnd with New Report Data",{id,reportName,reportDes,reportUrl})
      }
      onSave();
      toggleState();
    }
  };

  return (
    <Modal show={isActive} onHide={toggleState}   enforceFocus={true} backdrop={true} animation={false} centered>
      <Modal.Header closeLabel='Close' closeButton>
        <div className="modal-title">
          {name.length === 0 ? "Add Report" : "Edit Report"}
        </div>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Form
          className="report-form"
          autoComplete="off"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          noValidate
        >
          <Form.Group controlId="report-name">
            <Form.Label>Report Name</Form.Label>
            <Form.Control
              type="text"
              value={reportName}
              onChange={(e) => {
                setName(e.target.value);
              }}
              isInvalid={reportName.length === 0 && isSubmit}
              placeholder="Report Name"
            />
          </Form.Group>
          <Form.Group controlId="report-url">
            <Form.Label>URL</Form.Label>
            <Form.Control
              type="text"
              value={reportUrl}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              isInvalid={reportUrl.length === 0 && isSubmit}
              placeholder="url"
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Report Description</Form.Label>
            <Form.Control
              as="textarea"
              value={reportDes}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              isInvalid={reportDes.length === 0 && isSubmit}
              rows={3}
              placeholder="description.."
            ></Form.Control>
          </Form.Group>
          <div>
            <button type="submit" className="primary-btn">
              Save Report
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ReportContainer;
