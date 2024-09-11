import React, { useState } from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import './Announcement.css';

// Global Filter for Search
function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <input
      value={globalFilter || ''}
      onChange={e => setGlobalFilter(e.target.value)}
      placeholder="Search..."
      style={{
        marginBottom: '10px',
        padding: '8px',
        fontSize: '1rem',
        width: '100%'
      }}
    />
  );
}

const AnnouncementTable = () => {
  const data = React.useMemo(
    () => [
      { title: 'Annual Company Retreat', startDate: 'Jun 10, 2024', endDate: 'Jun 15, 2024', description: 'A week-long retreat for team building and strategy sessions.' },
      { title: 'Client Appreciation Event', startDate: 'Nov 05, 2024', endDate: 'Nov 05, 2024', description: 'Event to show appreciation for our valued clients.' },
      { title: 'Employee Training Program', startDate: 'Sep 05, 2024', endDate: 'Sep 10, 2024', description: 'Intensive training sessions for new employees.' },
      { title: 'End of Year Gala', startDate: 'Dec 20, 2024', endDate: 'Dec 20, 2024', description: 'Celebration event to close out the year.' },
      { title: 'Health and Wellness Fair', startDate: 'Sep 20, 2024', endDate: 'Sep 20, 2024', description: 'An event focused on promoting health and wellness among employees.' },
      { title: 'Mid-Year Performance Review', startDate: 'Jul 15, 2024', endDate: 'Jul 16, 2024', description: 'Review of employee performance for the first half of the year.' },
      { title: 'Product Launch', startDate: 'Aug 15, 2024', endDate: 'Aug 15, 2024', description: 'Official launch event for the new product line.' },
      { title: 'Quarterly Business Review', startDate: 'Jul 01, 2024', endDate: 'Jul 02, 2024', description: 'Review of business performance for the past quarter.' },
      { title: 'Team Building Workshop', startDate: 'Oct 12, 2024', endDate: 'Oct 13, 2024', description: 'Workshop aimed at improving team collaboration and communication skills.' },
      // Add more rows as needed
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        Header: 'Start Date',
        accessor: 'startDate'
      },
      {
        Header: 'End Date',
        accessor: 'endDate'
      },
      {
        Header: 'Description',
        accessor: 'description'
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    useGlobalFilter, // Use global filter (search)
    useSortBy,       // Use sort by feature
    usePagination    // Use pagination feature
  );

  return (
    <div className='mt-[20px]'>
     <div className='flex  justify-between items-center'>
       <span>
          Show{' '}
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
            style={{border:"1px solid #cbcbcb", width:"70px", fontSize:"1.2rem", outline:"none",borderRadius:"5px"}}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>{' '}
          entries</span>
          <div>
          <span>Search:</span>
            <input className='h-[35px] pl-[5px] ml-[5px] rounded-[5px] border-[1px] border-[#bcbcbc] outline-none  ' placeholder='Search...'/>
          </div>
        </div>
      <table {...getTableProps()} className="announcement-table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
      
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <div>
        <button className='bg-transparent text-[#ff7f50] border-[1px] border-[#ff7f50] py-[5px] px-[28px]' onClick={() => previousPage()} >
          Previous
        </button>
        <button className='bg-transparent text-[#ff7f50] border-[1px] border-[#ff7f50] py-[5px] px-[20px]'  onClick={() => nextPage()} >
          1
        </button>
        <button className='bg-transparent text-[#ff7f50] border-[1px] border-[#ff7f50] py-[5px] px-[20px]'  onClick={() => nextPage()} >
          2
        </button>

        <button className='bg-transparent text-[#ff7f50] border-[1px] border-[#ff7f50] py-[5px] px-[28px]  25px' onClick={() => nextPage()} >
          Next
        </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTable;
