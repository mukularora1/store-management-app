import React from 'react';
import BillSetting from './BillSetting';
import BillView from './BillView';

import Grid from '@mui/material/Grid';
function BillSetup() {
    return (
        <div>
            <div className='manageStore__heading'>
                <h1
                    style={{
                        marginLeft: '24px',
                        padding: '7px',
                        borderBottom: '1px solid red',
                        fontWeight: 400,
                        width: 'contain',
                    }}>
                    Bill Design
                </h1>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <BillSetting />
                </Grid>
                <Grid
                    item
                    xs={6}
                    md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}>
                    <BillView />
                </Grid>
            </Grid>
        </div>
    );
}

export default BillSetup;
