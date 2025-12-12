import React from "react";
import styles from "../components/Footer.module.css";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/esm/Button";

export default function Footer() {
  return (
    <div
      className={styles.footer}
      style={{
        display: "flex",
        padding: "20px",
        backgroundColor: "#F875AA",
        gap: "20px",
        flexWrap: "wrap",        // 👈 Makes it responsive
        justifyContent: "center" // 👈 Centers on small screens
      }}
    >
     

      {/* RIGHT FOOTER */}
      <div
        style={{
          height: "100px",
          width: "100%",         // 👈 full width responsive
          maxWidth: "600px",
          backgroundColor: "#FDEDED",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold" }}>
          © 2025 MegaMart — All Rights Reserved
        </p>
      </div>
    </div>
  );
}
