import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

const columns = [
    { field: 'id', headerName: 'ID', width: 70, sortable: false },
    {
        field: 'serialNumber',
        headerName: 'Serial Number',
        width: 150,
        sortable: false,
    },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'companyName', headerName: 'Company name', width: 200 },
    {
        field: 'quantity',
        headerName: 'Quantity',
        type: 'number',
        width: 130,
    },
    {
        field: 'manufacturingDate',
        headerName: 'Manufacturing Date',
        description: 'Manufacturing Date',
        sortable: false,
        width: 200,
        valueGetter: (params) =>
            `${params.row.name || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'expiryDate',
        headerName: 'Expiry Date',
        description: 'Expiry Date',
        sortable: false,
        width: 200,
        valueGetter: (params) =>
            `${params.row.name || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        description: 'Actions',
        sortable: false,
        width: 200,
        valueGetter: (params) =>
            `${params.row.name || ''} ${params.row.lastName || ''}`,
    },
];
const rows = [
    { id: 1, companyName: 'Snow', name: 'Jon', quantity: 35 },
    { id: 2, companyName: 'Lannister', name: 'Cersei', quantity: 42 },
    { id: 3, companyName: 'Lannister', name: 'Jaime', quantity: 45 },
    { id: 4, companyName: 'Stark', name: 'Arya', quantity: 16 },
    { id: 5, companyName: 'Targaryen', name: 'Daenerys', quantity: 20 },
    { id: 6, companyName: 'Melisandre', name: 'Vicky', quantity: 150 },
    { id: 7, companyName: 'Clifford', name: 'Ferrara', quantity: 44 },
    { id: 8, companyName: 'Frances', name: 'Rossini', quantity: 36 },
    { id: 9, companyName: 'Roxie', name: 'Harvey', quantity: 65 },
];
function InventoryDetailTable() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'end',
                    margin: '15px',
                }}>
                <TextField
                    id='standard-basic'
                    label='Search item'
                    variant='standard'
                    sx={{ marginRight: '15px' }}
                />
                <Button variant='outlined'>Search</Button>
            </div>

            <DataGrid
                rows={rows}
                columns={columns}
                paginationModel={{ page: 0, pageSize: 9 }}
                checkboxSelection
            />
        </>
    );
}

export default InventoryDetailTable;
