import styles from "./global.module.css";
import React, { useState } from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={styles.body}>
        {children}
      </body>
    </html>
  );
}