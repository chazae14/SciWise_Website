import React, { useState } from "react";
import { motion } from "framer-motion";
import bknd from "../bkrd.png";
import issue3 from "../issue3.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const [isIssueHovered, setIsIssueHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

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
        textAlign: "center",
        paddingTop: "40px",
      }}
    >
      {/* --- Background Section --- */}
      <motion.div
        variants={fadeUp}
        style={{
          width: "100%",
          padding: "280px 20px",
          marginTop: "0",
          backgroundImage: `url(${bknd})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></motion.div>

      {/* --- Latest Issue Section --- */}
      <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "40px", width: "100%" }}>
        <motion.div
          onMouseEnter={() => setIsIssueHovered(true)}
          onMouseLeave={() => setIsIssueHovered(false)}
          style={{
            backgroundColor: "#f4f4f4",
            borderRadius: "12px",
            padding: "20px",
            maxWidth: "600px",
            margin: "0 auto",
            boxShadow: isIssueHovered
              ? "0 12px 30px rgba(0,0,0,0.3)"
              : "0 8px 20px rgba(0,0,0,0.2)",
            transform: isIssueHovered
              ? "translateY(-10px) scale(1.05)"
              : "translateY(0) scale(1)",
            transition: "all 0.3s ease",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "15px",
              color: "#1a3b75",
            }}
          >
            Featured Issue
          </h2>
          <motion.a
            href="https://heyzine.com/flip-book/464803b2d1.html"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
            style={{ width: "100%", textDecoration: "none" }}
          >
            <img
              src={issue3}
              alt="Latest Issue"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                display: "block",
              }}
            />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <motion.hr
        variants={fadeUp}
        style={{ width: "80%", margin: "40px 0", borderColor: "#ccc" }}
      />

      {/* --- About Us Section on a Card --- */}
      <motion.div
        variants={fadeUp}
        style={{
          backgroundColor: "#eaeff6ff",
          borderRadius: "30px 30px 0 0",          
          padding: "30px 20px",
          maxWidth: "700px",
          margin: "0 auto 40px auto",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "20px",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          SciWise is an undergraduate journal from McMaster University that
          explores the intersection of science and art. We provide a platform
          for diverse creative and scientific works, including poems, comics,
          stories, articles, interviews, and research manuscripts. By blending
          analytical rigor with empathetic storytelling, we aim to humanize
          science and foster engaging science communication.
        </p>

        {/* Button with independent hover */}
        <motion.a
          href="/team"
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{
            padding: "12px 24px",
            fontSize: "1rem",
            backgroundColor: isButtonHovered ? "#163061" : "#1a3b75",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: isButtonHovered
              ? "0 4px 12px rgba(0,0,0,0.3)"
              : "0 2px 6px rgba(0,0,0,0.2)",
            transition: "all 0.2s ease",
          }}
        >
          Meet the Team
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default About;
