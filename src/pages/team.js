// pages/team.js
import React from "react";
import styles from "./Team.module.css";
import { motion } from "framer-motion";

// Animation variants
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const sectionTitleVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const gridContainerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// =====================
// Team Member Component
// =====================
const TeamMember = ({ name1, name, program }) => {
  const imgSrc = `/headshots/${name1.toLowerCase()}.png`;

  return (
    <motion.div className={styles.card} variants={cardVariant}>
      <img
        src={imgSrc}
        alt={name}
        className={styles.image}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/logo.png";
        }}
      />
      <h3>{name}</h3>
      <p>{program}</p>
    </motion.div>
  );
};

// ============
// Section Block
// ============
const Section = ({ title, members, color, useInView = true }) => (
  <div className={styles.section} style={{ backgroundColor: color }}>
    <motion.h2
      className={styles.sectionTitle}
      initial="hidden"
      animate={useInView ? undefined : "visible"}
      whileInView={useInView ? "visible" : undefined}
      viewport={{ once: true }}
      variants={sectionTitleVariant}
    >
      {title}
    </motion.h2>

    <motion.div
      className={styles.grid}
      initial="hidden"
      animate={useInView ? undefined : "visible"}
      whileInView={useInView ? "visible" : undefined}
      viewport={{ once: true }}
      variants={gridContainerVariant}
    >
      {members.map((m) => (
        <TeamMember key={m.name} {...m} />
      ))}
    </motion.div>

    <div className={styles.divider}></div>
  </div>
);

// =========
// Main Page
// =========
const Teams = () => {
  const coPresidents = [
    { name1: "Maya", name: "Maya Elfizy", program: "Honours Life Sciences" },
    { name1: "Leen", name: "Leen Ramahi", program: "Honours Life Sciences" },
  ];

  const editorialBoard = [
    { name1: "Chaza", name: "Chaza Elfizy", program: "Computer Engineering" },
    { name1: "Kumkum", name: "Kumkum Anugopal", program: "Honours Health Sciences" },
    { name1: "Noor", name: "Noor Anora", program: "iBioMed" },
    { name1: "Jen", name: "Jen Chen", program: "PNB Mental Health" },
  ];

  const illustrativeBoard = [
    { name1: "Bolden", name: "Bolden", program: "Arts & Science" },
    { name1: "Isra", name: "Isra Chowdhury", program: "Honours Life Sciences Co-op" },
    { name1: "Angela", name: "Angela Liu", program: "Medical Radiology" },
    { name1: "Anson", name: "Anson Lim", program: "Honours Life Sciences" },
    { name1: "Japleen", name: "Japleen Saini", program: "Biochemistry" },
    { name1: "Erin", name: "Erin Zhang", program: "Honours Health Sciences" },
    { name1: "Simran", name: "Simran Ram", program: "Honours Life Sciences" },
  ];

  const authorBoard = [
    { name1: "Rida", name: "Rida Salahudin", program: "Integrated Rehabilitation & Humanities" },
    { name1: "Lona", name: "Lona Tofaj", program: "Honours Life Sciences" },
    { name1: "Salma", name: "Salma Abuzaiter", program: "Honours Life Sciences" },
    { name1: "Ameena", name: "Ameena Taher", program: "Honours Health Sciences" },
    { name1: "Arun", name: "Arun Nadarajah", program: "Honours Life Sciences" },
  ];

  const managerialBoard = [
    { name1: "Thyana", name: "Thyana Tran", program: "Marketing — Honours Life Sciences Co-op" },
    { name1: "Sahana", name: "Sahana Vinoth", program: "Finance — Honours Life Sciences" },
    { name1: "Chaza", name: "Chaza Elfizy", program: "Website — Computer Engineering" },
  ];

  return (
    <div className={styles.container}>
      {/* Journal Title */}
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About the Journal
      </motion.h1>

      {/* Journal Blurb Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariant}
        style={{
          backgroundColor: "#eaeff6ff",
          borderRadius: "16px",
          padding: "30px 25px",
          maxWidth: "800px",
          margin: "20px auto 50px auto",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          lineHeight: 1.5,
        }}
      >
        <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
          SciWISE is an innovative undergraduate journal from McMaster University that celebrates the intersection of science and art, with the goal of bridging the gap between the analytical rigor of science and the emotional depth of art. The journal gives a platform for anyone to explore and showcase both interests, by publishing poems, comics, stories, news articles, interviews, as well as the typical scientific article abstracts, and research manuscripts. By challenging these boundaries SciWISE demonstrates how science and art can interconnect to meaningfully understand and engage with the world, humanizing the scientific field. The goal is to foster a space where empathetic storytelling harmonizes with the analytical precision of science, to create engaging science communication.
        </p>
      </motion.div>

      {/* This Year's Team Title */}
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        This Year's SciWISE Team
      </motion.h1>

      {/* Co-Directors without scroll animation */}
      <Section title="Co-Directors" members={coPresidents} color="#ffffff" useInView={false} />
      <Section title="Editorial Board" members={editorialBoard} color="#f4f7faff" />
      <Section title="Illustrative Board" members={illustrativeBoard} color="#ffffff" />
      <Section title="Author Board" members={authorBoard} color="#f8fbf8ff" />
      <Section title="Managerial Board" members={managerialBoard} color="#ffffff" />
    </div>
  );
};

export default Teams;
