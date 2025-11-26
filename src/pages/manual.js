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
            <iframe
                src="/sciwise_manual.pdf"
                title="SciWISE Journal Manual"
                width="80%"
                height="600px"
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
                }}
            />
        </div>
    );
};

export default Blogs;
