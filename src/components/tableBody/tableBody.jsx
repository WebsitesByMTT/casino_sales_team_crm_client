import React from 'react'
import './tableBody.css'

const TableBody = ({ tableHeaders, data }) => {

  return (
    <div className='tableContainer'>
      <table className='table'>

        <thead className='tableHeader'>
          <tr className='tableRowHeader'>
            {Object.keys(tableHeaders)?.map(keys => {
              return <th className='tableCellHeader'>{tableHeaders[keys]}</th>
            })}
          </tr>
        </thead>
        <tbody className='tableBody'>
          {data && data.map((item) => {
            return (<tr className='tableRowBody'>
              {
                Object.keys(tableHeaders).map(keys => {
                  return <td className='tableCellBody'>{item[keys]}</td>
                })
              }

            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableBody