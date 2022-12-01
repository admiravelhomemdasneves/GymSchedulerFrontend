import React, { useState, useEffect } from 'react'
import { useTable } from 'react-table'
import './table.css'

export const BasicTable = props => {
    
    const [data, setData] = useState([]);
    const fetchCall = props.tableData;
    const columns = props.tableColumns;
    
    useEffect(()=>{
        fetch(fetchCall)
        .then(res=>res.json())
        .then((result)=>{
            setData(result);
        })
      }, [])

    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

  return (
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}
