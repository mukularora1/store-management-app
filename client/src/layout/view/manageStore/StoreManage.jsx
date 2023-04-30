import AddIcon from '@mui/icons-material/Add';
import UploadIcon from '@mui/icons-material/Upload';
import { Button } from '@mui/material';
import Papa from 'papaparse';
import React, { useEffect, useRef, useState } from 'react';
import AddInventory from './AddInventory';

import InventoryDetailTable from './InventoryDetailTable';
import './storeManage.css';
function StoreManage() {
    const fileInputRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [csvData, setCsvData] = useState([]);
    const handleUploadClick = () => {
        console.log('here');
        fileInputRef.current.click();
    };
    const uploadCSV = async (e) => {
        const file = e.target.files[0];

        Papa.parse(file, {
            complete: (results) => {
                results.data.forEach((data) => {
                    setCsvData((pre) => [...pre, data]);
                });
                // Do something with the parsed data here
            },
            header: true,
            dynamicTyping: true,
        });
    };
    useEffect(() => {
        console.log(csvData);
    }, [csvData]);
    return (
        <div className='manageStore'>
            <div className='manageStore__heading'>
                <h1
                    style={{
                        marginLeft: '24px',
                        padding: '7px',
                        borderBottom: '1px solid red',
                        fontWeight: 400,
                    }}>
                    Manage store
                </h1>
                <div>
                    <Button
                        variant='contained'
                        startIcon={<UploadIcon />}
                        sx={{ height: '40px', marginRight: '10px' }}
                        onClick={handleUploadClick}>
                        <input
                            hidden
                            accept='.csv'
                            multiple
                            type='file'
                            onChange={uploadCSV}
                            ref={fileInputRef}
                        />
                        Upload CSV
                    </Button>
                    <Button
                        variant='outlined'
                        startIcon={<AddIcon />}
                        sx={{ height: '40px' }}
                        onClick={() => setIsModalOpen(true)}>
                        Add
                    </Button>
                </div>

                <AddInventory
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
            </div>
            <div className='manageStore__table'>
                <InventoryDetailTable />
            </div>
        </div>
    );
}

export default StoreManage;
