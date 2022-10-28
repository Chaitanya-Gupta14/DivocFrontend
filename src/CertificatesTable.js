import React from "react"

const TableContent = (ID,name,transactionID,schemaName,status) => {
  

    const data = [
        {  
            id: ID,
            name: name,  
            transactionId: transactionID,
            schemaName: schemaName,
            status: status 
        }]  


    const columns = [
        {  
            Header: 'ID',  
            accessor: 'id'  
        },
        {  
            Header: 'Name',  
            accessor: 'name'  
        },
        {  
            Header: 'Transaction Id',  
            accessor: 'transactionId'  
        },
        {  
            Header: 'Schema Name',  
            accessor: 'schemaName'  
        },
        {  
            Header: 'Status',  
            accessor: 'status'  
        }
    ]  
    console.log(data)
    console.log(columns)

    return(
        <div className="App">
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Transaction ID</th>
          <th>Schema Name</th>
          <th>Status</th>
        </tr>
        {
            data.map((val, key) => {
            return (
                <tr key={key}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.transactionId}</td>
                <td>{val.schemaName}</td>
                <td>{val.status}</td>
                </tr>
            )
            })
        }
      </table>
    </div> 
    )
}

export default TableContent;