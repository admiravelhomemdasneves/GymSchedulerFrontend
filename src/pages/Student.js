import React, { useMemo } from 'react'
import { COLUMNS } from '../components/columns/StudentColumns'
import { BasicTable } from '../components/BasicTable'

function Student(){

  const apiCall = "http://localhost:8080/student";
  const columns = useMemo(() => COLUMNS, []);

  return (
    <div className='Student'>
        <BasicTable tableData={apiCall} tableColumns={columns}/>
    </div>
  )
}

export default Student