import React from "react";
import { ReactComponent as WordmarkZendesk } from "@zendeskgarden/svg-icons/src/26/wordmark-zendesk.svg";
import styles from "./widget.module.css";

export const Widget: React.FC<{ title: string }> = ({ children, title }) => (
  <div className={styles.widget}>
    <div className={styles.header}>{title}</div>
    <div className={styles.content}>
      {children}
      <WordmarkZendesk className={styles.wordmark} role="presentation" />
    </div>
  </div>
);
