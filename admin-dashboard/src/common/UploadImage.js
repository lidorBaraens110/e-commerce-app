import React from 'react';


const UploadImage = ({ getRootProps, getInputProps, isDragActive }) => {
    return (
        <div {...getRootProps()} style={{ cursor: 'pointer', backgroundColor: '#D3D3D3', border: '1px black dashed', textAlign: 'center', alignItems: 'center' }}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>לחץ כאן או גרור לכאן תמונות שתרצה לעלות</p>
            }
        </div>
    )
}

export default UploadImage