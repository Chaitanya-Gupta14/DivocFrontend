import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { DownloadCertificate } from "../service/DownloadCertificate";
import { ListCertificates } from "../service/listCertificateTable";
import TableContent from "./CertificatesTable";
import { SchemaName } from "./Home";


const OnSubmitDownload = () => {
    
    const [CertificateId, setCertificateId] = useState("");
    const Redirect = useHistory();
    let name = "";
    if(SchemaName === "HealthProfessional7")
        name = "Health Professional Certificate";
    else
        name = "NHAUIP Certificate";

    const handleDownload = (e) => {
        e.preventDefault();
        DownloadCertificate();
    }

    const handleList = (e) => {
        e.preventDefault();
        ListCertificates();
        TableContent();
        Redirect.push("/ListCertificate");
    }

return(
    <div className="container-fluid px-1 py-3 mx-auto OnSubmitCertify1">
        <div className="container card-0 justify-content-center">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-10 col-lg-10 col-md-10 col-11 text-center mb-4 flex-column"> 
                    <h2 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left mt-3 mb-2 form-title">{name}</h2> 
                    <div className="card box-form">
                        <form className="form-card">
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 col-md-6 col-lg-3 flex-column d-flex"> 
                                    <label className="form-control-label px-0">Certificate Id</label> 
                                    <input 
                                    type="text"
                                    required 
                                    className="form-control" 
                                    value= {CertificateId}
                                    onChange={(e) => setCertificateId(e.target.value)}
                                    />
                                </div>
                                <div className="row justify-content-end">
                                    <div className="form-group col-12"> 
                                        <button type="submit" className="btn btnsubmit" onClick={handleDownload}>Download</button>
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