import React from "react"
import { parsedResponse } from "../service/listCertificateTable";

// ID,name,transactionID,schemaName,status

const TableContent = () => {
     console.log(parsedResponse)
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
                        <td data-title="ID">{val.id} </td>
                        <td data-title="Name">{val.name} </td>
                        <td data-title="Transaction ID">{val.transactionId}</td>
                        <td data-title="Schema Name">{val.schemaname} </td>
                        <td data-title="Status">{val.status}</td>
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