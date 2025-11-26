// pages/blogs.js

import React from "react";

const Blogs = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                padding: "20px",
            }}
        >
            <h1 style={{ marginBottom: "20px" }}>SciWISE Journal Manual</h1>
            
            {/* PDF Embed */}
            <iframe src="https://drive.google.com/file/d/1cyqi5idKGerWRqB2zvAShhZZo219-to4/preview" 
            title="SciWISE Journal Manual"
            width="640" 
            height="480" 
            allow="autoplay">
            </iframe>
        </div>
    );
};

export default Blogs;
