import React from 'react'

const TableBody = ({ tableHeaders, data }) => {

  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(tableHeaders)?.map(keys => {
              return <th>{tableHeaders[keys]}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => {
            return (<tr>
              {
                Object.keys(tableHeaders).map(keys => {
                  return <td className='tableCell'>{item[keys]}</td>
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