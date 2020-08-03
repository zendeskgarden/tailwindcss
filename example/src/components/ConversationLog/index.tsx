/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useLayoutEffect, useRef } from 'react';
import styles from './conversationlog.module.css';

export const ConversationLog: React.FC = ({ children }) => {
  const logRef = useRef<HTMLDivElement>(null);

  /** Scroll to bottom of log on first render */
  useLayoutEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className={styles.log} ref={logRef}>
      {children}
    </div>
  );
};
