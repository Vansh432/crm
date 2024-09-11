import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const MyDataTable = () => {
  const [filterText, setFilterText] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = [
    { name: 'Employee', selector: row => row.name, sortable: true },
    { name: 'Subject', selector: row => row.position, sortable: true },
    { name: 'Warning Date', selector: row => row.office, sortable: true },
    { name: 'Deesciption', selector: row => row.age, sortable: true },
 
  
  ];

  const data = [
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: '61', },
    { name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: '63',  },
    // Add more data as needed
  ];

  const filteredData = data.filter(
    item =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase()) ||
      item.position && item.position.toLowerCase().includes(filterText.toLowerCase()) ||
      item.office && item.office.toLowerCase().includes(filterText.toLowerCase())
  );

  const customStyles = {
    headCells: {
      style: {
        fontWeight: 'bold',
      },
    },
  };

  const SubHeaderComponent = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <div>
        <label>
          Show{' '}
          <select
            value={rowsPerPage}
            onChange={e => setRowsPerPage(Number(e.target.value))}
            style={{ marginRight: '10px' }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>{' '}
          entries
        </label>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          style={{ width: '300px' }}
        />
      </div>
    </div>
  );

  return (
    <DataTable
      columns={columns}
      data={filteredData}
      pagination

      paginationPerPage={rowsPerPage}
      highlightOnHover
      subHeader
      subHeaderComponent={SubHeaderComponent}
      customStyles={customStyles}
    />
  );
};

export default MyDataTable;
