import React, { useMemo, useState } from 'react';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import { FaRegEye, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Chat from './Chat';

const Ticket = ({ data }) => {
    const [chatWindow,setChatWindow] =useState(null);


    function setChatWindowOnClick(row){
        setChatWindow(row);
    }
  const columns = useMemo(
    () => [
      {
        Header: 'Ticket ID',
        accessor: 'ticketId',
      },
      {
        Header: 'Ticket Title',
        accessor: 'ticketTitle',
      },
      {
        Header: 'Priority',
        accessor: 'priority',
        Cell: ({ value }) => {
          const getBadgeColor = () => {
            switch (value) {
              case 'High':
                return 'badge-high';
              case 'Medium':
                return 'badge-medium';
              case 'Low':
                return 'badge-low';
              default:
                return '';
            }
          };
          return <span className={`badge ${getBadgeColor()}`}>{value}</span>;
        },
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Created By',
        accessor: 'createdBy',
      },
      {
        Header: 'Last Reply',
        accessor: 'lastReply',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => {
          const getStatusColor = () => {
            switch (value) {
              case 'Open':
                return 'status-open';
              case 'In Progress':
                return 'status-progress';
              case 'Closed':
                return 'status-closed';
              default:
                return '';
            }
          };
          return <span className={`badge ${getStatusColor()}`}>{value}</span>;
        },
      },
      {
        Header: 'Action',
        Cell: () => (
          <div className="action-buttons">
            <FaRegEye className="action-icon view-icon" />
            <FaRegEdit className="action-icon edit-icon" />
            <FaTrashAlt className="action-icon delete-icon" />
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex, globalFilter } = state;

  return (<>

   { chatWindow==null?<div className="Ticket-container">
      <div className="stats-cards">
        <div className="stats-card">
          <h3>Total Tickets</h3>
          <p>313</p>
          <span className="stats-change">+11.54% Than Last Week</span>
        </div>
        <div className="stats-card">
          <h3>Open Tickets</h3>
          <p>150</p>
          <span className="stats-change">+8.15% Than Last Week</span>
        </div>
        <div className="stats-card">
          <h3>Hold Tickets</h3>
          <p>100</p>
          <span className="stats-change">+2.19% Than Last Week</span>
        </div>
        <div className="stats-card">
          <h3>Cancelled Tickets</h3>
          <p>63</p>
          <span className="stats-change">-4.19% Than Last Week</span>
        </div>
      </div>

      <div className="table-container">
      <div className='flex justify-between items-center mb-[15px]'>
      <span>
          Show{' '}
          <select
            value={24}
     
            style={{border:"1px solid #cbcbcb", width:"70px", fontSize:"1.2rem", outline:"none",borderRadius:"5px"}}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={12} value={24}>
                {24}
              </option>
            ))}
          </select>{' '}
          entries
        </span>
        <div className='flex justify-center items-center'>
        <h2>Search:</h2>
        <input
          className="search-input"
          value={globalFilter || ''}
          onChange={e => setGlobalFilter(e.target.value || undefined)}
          placeholder="Search..."
        />
        </div>
        </div>
        <table {...getTableProps()} className="custom-table">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
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
                <tr {...row.getRowProps()} onClick={()=>{
                    setChatWindowOnClick(row)
                    }}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>
        </div>
      </div>
    </div>:<Chat/>}
    </>
  )
};

export default Ticket;
