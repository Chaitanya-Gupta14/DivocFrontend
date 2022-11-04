import React from "react"
import { parsedResponse } from "../service/listCertificateTable";

// ID,name,transactionID,schemaName,status

const TableContent = () => {
     
return(
    <div className="container px-1 py-3 mx-auto OnSubmitCertify2" id="generaltables">
        <div class="table-responsive">
            <table className="table table-striped table-bordered">
                <thead class="cf">
                    <tr>
                        <th align= "center">ID</th>
                        <th align= "center">Name</th>
                        <th align= "center">Transaction ID</th>
                        <th align= "center">Schema Name</th>
                        <th align= "center">Status</th>
                    </tr>
                </thead>
                <tbody>         
                { 
                parsedResponse.map((val, index) => {
                    return (
                    <tr key={index}>
                        <td data-title="ID">{val.id} 1</td>
                        <td data-title="Name">{val.name} 11</td>
                        <td data-title="Transaction ID">{val.transactionId} 111</td>
                        <td data-title="Schema Name">{val.schemaname}  1111</td>
                        <td data-title="Status">{val.status}  11111</td>
                    </tr>
                    )
                })
                }
                </tbody>
            </table>
        </div>
    </div>
)
}

export default TableContent;