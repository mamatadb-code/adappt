import React from 'react'
import { useTable , useMemo } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'
import './BasicTable.css'



export const BasicTable = () => {
// useMemo so that data will not rcreated in every render

const columns = useMemo(() => COLUMNS, [])
const data = useMemo(() => MOCK_DATA, [])

// This is table Instance
const tableInstance = useTable({
    columns: columns,
    data: data
})

// Use tableIntance to render all nessesary UI
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRows,
} = tableInstance

    return (
        <div>
            {/* HTML Table Structure */}
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroups =>(
                            <tr {...headerGroups.getHeaderGroupProps()}>
                                {
                                    headerGroups.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))
                                }  
                            </tr>
                        ))
                    }
                    
                </thead>
                <tbody  {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRows(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) =>{
                                            return  <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                                        })
                                    }
                                   </tr>
                            )
                        })
                    }
                   
                </tbody>
 </table>


        </div>
    )
}

export default BasicTable;