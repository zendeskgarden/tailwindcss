import React, { useContext, ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import { MessageGroupContext } from "../MessageGroup";
import styles from "./message.module.css";

export const Message: React.FC<{ actions?: React.ReactElement }> = ({
  children,
  actions,
}) => {
  const messageType = useContext(MessageGroupContext);

  return (
    <div
      className={classNames(styles.message, {
        [styles["message--maker"]]: messageType === "maker",
        [styles["message--user"]]: messageType === "user",
      })}
    >
      {children}
      {actions && <div className={styles["action-list"]}>{actions}</div>}
    </div>
  );
};

export const Action: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...other
}) => <button className={classNames(className, styles["action"])} {...other} />;
