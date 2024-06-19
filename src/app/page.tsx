"use client"

import React from 'react';
import styles from "./page.module.css";
import Home from "./pages/home/page";

export default function App() {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
}
