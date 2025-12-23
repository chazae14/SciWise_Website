import React from "react";
import { motion } from "framer-motion";

import bknd from "../bkrd1.png";       // TOP
import issueBg from "../middle6.png"; // FEATURED ISSUE BG
import aboutBg from "../bottom5.png"; // ABOUT + TEAM BG
import contact from "../contact.png"; // CONTACT
import issue5 from "../issue5.png";

/* ================= FADE FROM WHITE ================= */
const fadeFromWhite = {
  hidden: { opacity: 1 },
  show: {
    opacity: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ================= SECTION ================= */
const Section = ({ bg, children, animateOnScroll = true }) => (
  <motion.div
    style={{
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {animateOnScroll && (
      <motion.div
        variants={fadeFromWhite}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "white",
          zIndex: 1,
        }}
      />
    )}

    <div style={{ position: "relative", zIndex: 2 }}>
      {children}
    </div>
  </motion.div>
);

/* ================= PAGE ================= */
const About = () => {
  return (
    <div style={{ width: "100%", overflowX: "hidden", backgroundColor: "white" }}>

      {/* ================= TOP ================= */}
      <Section bg={bknd} animateOnScroll={false} />

      {/* ================= FEATURED ISSUE ================= */}
      <Section bg={issueBg}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "60px",
            maxWidth: "1100px",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <a
            href="https://heyzine.com/flip-book/eedf66a455.html"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              src={issue5}
              alt="SciWISE Issue 5"
              whileHover={{
                y: -6,
                scale: 1.04,
                boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ width: "260px", cursor: "pointer" }}
            />
          </a>

          <div style={{ maxWidth: "420px", color: "#111" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 700 }}>
              Featured Issue
            </h2>
            <h3 style={{ marginBottom: "16px" }}>
              Issue 5 (Dec 2025)
            </h3>
            <p style={{ lineHeight: 1.6 }}>
              This issue explores the human side of science — from medical
              innovation and community research to art, poetry, interviews,
              and short features celebrating curiosity across disciplines.
            </p>
          </div>
        </div>
      </Section>

      {/* ================= ABOUT + MEET THE TEAM ================= */}
      <Section bg={aboutBg}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.25 } },
          }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "80px",
            maxWidth: "1200px",
            padding: "40px",
            textAlign: "center",
          }}
        >
          {/* TEXT */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            style={{
              maxWidth: "520px",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#222",
            }}
          >
            <p>
              <strong>SciWISE</strong> is an undergraduate journal from
              McMaster University that explores the intersection of science
              and art. We provide a platform for diverse creative and
              scientific works, including poems, comics, stories, articles,
              interviews, and research manuscripts. By blending analytical
              rigor with empathetic storytelling, we aim to humanize science
              and foster engaging science communication.
            </p>
          </motion.div>

          {/* GRADIENT BLOB BUTTON */}
          <motion.button
            variants={{
              hidden: { opacity: 0, scale: 0.7 },
              show: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/team")}
            style={{
              width: "190px",
              height: "190px",
              borderRadius: "50% 60% 55% 45%",
              background:
                "radial-gradient(circle at top left, #e63946, #9b1c31)",
              color: "white",
              fontSize: "1.4rem",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 20px 45px rgba(0,0,0,0.35)",
            }}
          >
            Meet the
            <br />
            team
          </motion.button>
        </motion.div>
      </Section>

      {/* ================= CONTACT ================= */}
      <Section bg={contact}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          style={{
            display: "flex",
            gap: "22px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { label: "Instagram", href: "https://www.instagram.com/sciwise/" },
            { label: "Submissions", href: "https://journals.mcmaster.ca/sw" },
            { label: "LinkedIn", href: "https://www.linkedin.com/company/the-sciwise-journal/" },
            { label: "Email", href: "mailto:sciwise@mcmaster.ca" },
          ].map((btn) => (
            <motion.a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -6,
                scale: 1.06,
                borderRadius: "55% 45% 60% 40%",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              style={{
                padding: "18px 34px",
                borderRadius: "60% 40% 55% 45%",
                background:
                  "radial-gradient(circle at top left, #ffffff, #f2f2f2)",
                color: "#111",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 14px 30px rgba(0,0,0,0.25)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "150px",
              }}
            >
              {btn.label}
            </motion.a>

          ))}
        </motion.div>
      </Section>

    </div>
  );
};

export default About;
