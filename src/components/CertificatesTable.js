import React from "react"
import { parsedResponse } from "../service/listCertificateTable";

// ID,name,transactionID,schemaName,status

const TableContent = () => {
     
return(
    <div className="container-fluid px-1 py-3 mx-auto OnSubmitCertify2">
        <table >
            <tbody>
            <tr>
                <th align= "center">ID</th>
                <th align= "center">Name</th>
                <th align= "center">Transaction ID</th>
                <th align= "center">Schema Name</th>
                <th align= "center">Status</th>
            </tr>
            
            {
            parsedResponse.map((val, index) => {
                return (
                <tr key={index}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.transactionId}</td>
                    <td>{val.schemaname}</td>
                    <td>{val.status}</td>
                </tr>
                )
            })
            }
            </tbody>
        </table>
    </div>
)
}

export default TableContent;