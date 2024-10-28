"use client";
import React, { useState } from "react";
import styles from "./home-content-switcher.module.css";

function ContentSwitcher() {
  const [selectedContent, setSelectedContent] = useState<
    "clients" | "attorneys"
  >("clients");

  return (
    <div className={styles.contentSwitcherContainer}>
      <div className={styles.contentSwitcherContent}>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.buttonSwitch} ${
              selectedContent === "clients" ? styles.active : ""
            }`}
            onClick={() => setSelectedContent("clients")}
          >
            <span>for</span> Clients
          </button>
          <button
            className={`${styles.buttonSwitch} ${
              selectedContent === "attorneys" ? styles.active : ""
            }`}
            onClick={() => setSelectedContent("attorneys")}
          >
            <span>for</span> Attorneys
          </button>
        </div>
        <div className={styles.contentDisplay}>
          {selectedContent === "clients" ? (
            <div>Informações para Clientes</div>
          ) : (
            <div>Informações para Attorneys</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContentSwitcher;
