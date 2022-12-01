import React, { useMemo } from 'react'
import { COLUMNS } from '../components/columns/ActivityColumns'
import { BasicTable } from '../components/BasicTable'

function Activity(){

  const apiCall = "http://localhost:8080/activity";
  const columns = useMemo(() => COLUMNS, []);

  return (
    <div className='Activity'>
        <BasicTable tableData={apiCall} tableColumns={columns}/>
    </div>
  )
}

export default Activity;