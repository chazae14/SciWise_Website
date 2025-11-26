import React from "react";
import { motion } from "framer-motion";
import "./Issues.css";

import issue1 from "../issue1.png";
import issue2 from "../issue2.png";
import issue3 from "../issue3.png";
import issue4 from "../issue4.png";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Events = () => {
    return (
        <motion.div
            initial="hidden"
            animate="show"
            style={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "40px 20px",
                textAlign: "center",
            }}
        >
            {/* PAGE TITLE */}
            <motion.h1
                variants={fadeUp}
                style={{
                    marginBottom: "40px",
                    fontSize: "2.5rem",
                }}
            >
                Our Issues
            </motion.h1>

            {/* FEATURED ISSUE */}
            <motion.div
                variants={fadeUp}
                className="issue3-feature-box"
                style={{
                    backgroundColor: "#f5f7ff",
                    padding: "30px",
                    borderRadius: "12px",
                    display: "flex",
                    gap: "25px",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "900px",
                    marginBottom: "50px",
                    flexWrap: "wrap",
                    transition: "all 0.3s ease",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.08)";
                }}
            >
                <motion.a
                    href="https://heyzine.com/flip-book/464803b2d1.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                >
                    <img
                        src={issue3}
                        alt="Issue 3"
                        className="issue3-image"
                        style={{ maxWidth: "300px", borderRadius: "8px" }}
                    />
                </motion.a>

                <div style={{ textAlign: "left", maxWidth: "450px" }}>
                    <h1 style={{ 
                        marginBottom: "10px" }}>
                        Featured Issue
                    </h1>
                    <h2 style={{ 
                        marginBottom: "10px" }}>
                        Issue 3 (May 2025)
                    </h2>
                    <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                        This issue explores the human side of science—from medical innovation and
                        community research to art, poetry, interviews, and short features that
                        celebrate curiosity and discovery across disciplines.
                    </p>
                </div>
            </motion.div>

            {/* OTHER ISSUES */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "40px",
                    flexWrap: "wrap",
                    marginBottom: "40px",
                }}
            >
                {/* ISSUE 4 */}
                <motion.div variants={fadeUp} whileHover={{ y: -5 }}>
                    <a
                        href="https://journals.mcmaster.ca/sw/issue/view/229/166"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.img
                            src={issue4}
                            alt="Issue 4"
                            className="issue-image"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.25 }}
                        />
                    </a>
                    <h3 style={{ marginTop: "10px" }}>
                        Issue 4 (July 2025)
                    </h3>
                </motion.div>

                {/* ISSUE 2 */}
                <motion.div variants={fadeUp} whileHover={{ y: -5 }}>
                    <a
                        href="https://journals.mcmaster.ca/sw/issue/view/178/104"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.img
                            src={issue2}
                            alt="Issue 2"
                            className="issue-image"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.25 }}
                        />
                    </a>
                    <h3 style={{ marginTop: "10px" }}>
                        Issue 2 (April 2021)
                    </h3>
                </motion.div>

                {/* ISSUE 1 EXAMPLE (if needed) */}
                <motion.div variants={fadeUp} whileHover={{ y: -5 }}>
                    <a
                        href="https://journals.mcmaster.ca/sw/issue/view/177/101"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.img
                            src={issue1}
                            alt="Issue 1"
                            className="issue-image"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.25 }}
                        />
                    </a>
                    <h3 style={{ marginTop: "10px" }}>
                        Issue 1 (Dec 2020)
                    </h3>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Events;
