import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import React from 'react';
function BillSetting() {
    const open = true;
    return (
        <>
            <Collapse in={open} timeout='auto'>
                <CardContent>
                    <Container
                        sx={{
                            height: 100,
                            lineHeight: 2,
                        }}>
                        An interview-centric course designed to prepare you for
                        the role of SDE for both product and service-based
                        companies. A placement preparation pack built with years
                        of expertise. Learn Resume Building, C++, Java, DSA, CS
                        Theory concepts, Aptitude, Reasoning, LLD, and much
                        more!
                    </Container>
                </CardContent>
            </Collapse>
        </>
    );
}

export default BillSetting;
