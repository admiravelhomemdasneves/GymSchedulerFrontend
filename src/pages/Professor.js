import React, { useMemo } from 'react'
import { COLUMNS } from '../components/columns/ProfessorColumns'
import { BasicTable } from '../components/BasicTable'

function Professor(){

  const apiCall = "http://localhost:8080/professor";
  const columns = useMemo(() => COLUMNS, []);

  return (
    <div className='Professor'>
        <BasicTable tableData={apiCall} tableColumns={columns}/>
    </div>
  )
}

export default Professor;