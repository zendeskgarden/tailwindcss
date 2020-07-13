import React from "react";
import styles from "./conversationlog.module.css";

export const ConversationLog: React.FC = ({ children }) => (
  <div className={styles.log}>{children}</div>
);
