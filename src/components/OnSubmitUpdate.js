import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { UpdatetheForm } from "./UpdateForm";
// import { SchemaName } from "./Home";


const OnSubmitUpdate = () => {
    
    const [CertificateId, setCertificateId] = useState("");
    const Redirect = useHistory();
//    
//     const handleList = (e) => {
//         e.preventDefault();
//         ListCertificates();
//         TableContent();
//         Redirect.push("/ListCertificate");
//     }

    const handleUpdate = (e) => {
        e.preventDefault();
        //UpdatetheForm();
        Redirect.push("/UpdateForm");
    }

return(
    <div className="container-fluid px-1 py-3 mx-auto OnSubmitCertify1">
        <div className="container card-0 justify-content-center">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-10 col-lg-10 col-md-10 col-11 text-center mb-4 flex-column"> 
                    <h2 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left mt-3 mb-2 form-title">Update Certificate</h2> 
                    <div className="card box-form">
                        <form className="form-card" >
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 col-md-6 col-lg-6 flex-column d-flex"> 
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
                                        <button type="submit" className="btn btnsubmit" onClick={handleUpdate}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

);}

export default OnSubmitUpdate;