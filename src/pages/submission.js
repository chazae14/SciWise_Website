// pages/annual.js

import React from "react";
import { motion } from "framer-motion";

const submissions = [
    {
        title: "Poems",
        description:
            "Original poems of any style or theme are welcome. Submissions should be carefully proofread and edited for clarity and impact. Maximum length: 3 pages per poem.",
    },
    {
        title: "Short Stories",
        description:
            "Fictional short stories should be engaging, well-structured, and demonstrate creativity. Maximum length: 5 pages per story. Please ensure proper formatting and readability.",
    },
    {
        title: "Visual Art & Photography",
        description:
            "Include drawings, paintings, digital art, mixed media, or photographs. Submissions should be up to 3 high-quality images in JPEG or PNG format. Include a brief description (100–200 words) of the work.",
    },
    {
        title: "Research Articles",
        description:
            "Full-length academic papers should follow standard academic formatting, include references, and demonstrate thorough research. Maximum length: 10 pages. Submissions should be polished and clearly structured.",
    },
    {
        title: "Abstracts",
        description:
            "Concise summaries of research or academic projects. Abstracts should clearly outline the objectives, methods, and key findings. Maximum length: 250 words. Ensure clarity and proper academic formatting.",
    },
    {
        title: "Multimedia",
        description:
            "Audio or video submissions must be accompanied by a brief description (max 200 words). Formats accepted include MP3, WAV, MP4, and MOV. Ensure files are high quality and accessible.",
    },
];

const AnnualReport = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "40px 20px",
                minHeight: "100vh",
                backgroundColor: "#f9f9f9",
            }}
        >
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: "20px" }}
            >
                We Accept Submissions from All Students Across All Faculties!
            </motion.h1>

            {/* Intro paragraph */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ maxWidth: "700px", marginBottom: "40px" }}
            >
                From poems and short stories to visual art, photography, abstracts, and
                research articles, we welcome creative and academic work of all kinds.
                Please follow the specific guidelines for each type of submission:
            </motion.p>

            {/* Submission cards */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "20px",
                    width: "100%",
                    maxWidth: "900px",
                    marginBottom: "40px",
                }}
            >
                {submissions.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        style={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            textAlign: "left",
                        }}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Submission process */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    maxWidth: "700px",
                    marginBottom: "40px",
                    textAlign: "left",
                }}
            >
                <h2>Submission Process</h2>
                <p>
                    Submissions are made through SciWise’s Open Journal Systems:{" "}
                    <a
                        href="https://journals.mcmaster.ca/sw/about/submissions"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Submission Portal
                    </a>
                    . The journal follows a double-blind, multistage peer-review process for
                    written submissions:
                </p>
                <ul>
                    <li>
                        <strong>Initial Screening:</strong> Senior Editor checks compliance
                        with guidelines.
                    </li>
                    <li>
                        <strong>Peer Review:</strong> Editors review structure, grammar,
                        relevance, and validity. Multiple rounds may occur (Round 1: 1–4
                        weeks, Round 2: 1–3 weeks, Round 3 if needed).
                    </li>
                    <li>
                        <strong>Illustrations:</strong> An art piece accompanies all
                        submissions, created by our illustrators, finalized by round 2.
                    </li>
                    <li>
                        <strong>Final Review:</strong> Author checks copy edits and personal
                        information before publication.
                    </li>
                    <li>
                        <strong>Decisions:</strong> Copyediting stage = accepted.
                        Out-of-scope or incomplete edits may result in waitlisting or
                        rejection, with justification provided. Resubmissions are allowed
                        unlimited times.
                    </li>
                </ul>
            </motion.div>

            {/* Submit button */}
            <motion.a
                href="https://journals.mcmaster.ca/sw/about/submissions"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                    padding: "14px 28px",
                    backgroundColor: "#1a3b75",
                    color: "white",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "16px",
                    display: "inline-block",
                }}
            >
                Submit Here
            </motion.a>
        </div>
    );
};

export default AnnualReport;
