import React from 'react'
import { useHistory,RouteComponentProps } from 'react-router-dom';
import { percentageReport ,onOffGuide } from "../util/sampledata";


type TParams = {url:string}
interface ReportProps extends RouteComponentProps<TParams> {
    title?:string
}


const Report:React.FC<ReportProps> =(props) => {
  const [reportData,setReport] =React.useState<onOffGuide[]|null>(percentageReport)
   const history =  useHistory()
   const {url = null} = props.match.params
   const handleReturn =()=>{
       history.goBack()
   }
   console.log(url)
    return (
        <div className="main-container">
      <div className="nav-report" onClick={handleReturn}>&lt; Return to Reports</div>
      <div className="title">Reports</div>
      <div className="summary">
        <div className="report-date-range">Dates Reported:</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
        justo commodo. Proin sodales pulvinar sic tempor.
      </div>
      <div className="reports-table-container">
        <table>
          <thead>
            <tr className="table-col-head">
              {reportData != null && Object.keys(reportData[0]).map((colName,index)=>{
                return(<th key={index}> {colName}</th>)
              })}
            </tr>
          </thead>
          <tbody>
            { reportData != null && reportData.map((rowData,index)=>{
              return(<tr key={index} className='reports-table-row'>{Object.values(rowData).map((data,ind)=> <td key={ind}>{data}</td>)}</tr>)
            })}

          </tbody>
        </table>
      </div>
    </div>
    )
}



export default Report;