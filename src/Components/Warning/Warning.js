import React from 'react';

import DataTableComponent from './Warningtable';

const sampleData = [
    { name: 'John Doe', age: 28, position: 'Software Engineer' },
    { name: 'Jane Smith', age: 32, position: 'Project Manager' },
    { name: 'Sam Wilson', age: 25, position: 'UX Designer' },
];

const Warning = () => (
    <div className='shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-[10px] bg-[#fff] p-[10px]'>
        <h1>Warnings</h1>
        <DataTableComponent data={sampleData} />
    </div>
);

export default Warning;