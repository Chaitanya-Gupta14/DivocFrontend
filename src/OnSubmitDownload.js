import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import ReactTable from 'react-table';  
// import TableContent from "./CertificatesTable";

const OnSubmitDownload = () => {
    const [TransactionId, setTransactionId] = useState("");
    const Redirect = useHistory();
    const handleList = () => {
        Redirect.push("/ListCertificate");
    }

return(
    <div className="container-fluid px-1 py-3 mx-auto OnSubmitCertify1">
        <div className="container card-0 justify-content-center">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-10 col-lg-10 col-md-10 col-11 text-center mb-4 flex-column"> 
                    <h2 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left mt-3 mb-2 form-title">NHAUIP Certificate</h2> 
                    <div className="card box-form">
                        <form className="form-card">
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                                    <label className="form-control-label px-0">Transaction Id:</label> 
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    value= {TransactionId}
                                    onChange={(e) => setTransactionId(e.target.value)}
                                    />
                                </div>
                                <div className="row justify-content-end">
                                    <div className="form-group col-12"> 
                                        <button type="submit" className="btn btnsubmit">Download</button>
                                        <button type="submit" className="btn btnsubmit" onClick={handleList}>List Certificates</button> 
                                    </div>
                                </div>
                                
                                {/* <div>
                                    <ReactTable  
                                        data={TableContent.data}  
                                        columns={TableContent.columns}  
                                        defaultPageSize = {2}  
                                        pageSizeOptions = {[2,4, 6]}  
                                    /> 
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

);}

export default OnSubmitDownload;