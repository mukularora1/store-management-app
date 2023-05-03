import React from 'react';

function BillView() {
    return (
        <iframe
            src='https://docs.google.com/gview?url=your-pdf-file.pdf&embedded=true'
            style={{ width: '100%', height: '600px' }}
            frameborder='0'
            title='hello'></iframe>
    );
}

export default BillView;
