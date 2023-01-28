// "use client"

import styles from "./global.module.css";

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