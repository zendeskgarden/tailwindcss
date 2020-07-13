import React, { HTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./textarea.module.css";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  HTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={classNames(styles.textarea, className)}
    {...props}
  />
));
