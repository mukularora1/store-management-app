import CheckIcon from '@mui/icons-material/Check';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import Button from '@mui/material/Button';
import React from 'react';
import pdf from '../../../assets/pdf.pdf';
import SnackBarAlert from '../../../reusable/SnackBarAlert';
function BillView() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
            <iframe
                src={pdf}
                style={{ width: '80%', height: '700px' }}
                scrolling='no'
                frameborder='0'
                title='hello'></iframe>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant='contained' startIcon={<CheckIcon />}>
                    Set Design
                </Button>
                <Button variant='outlined' startIcon={<RotateLeftIcon />}>
                    Reset
                </Button>
            </div>
            <SnackBarAlert />
        </div>
    );
}

export default BillView;
