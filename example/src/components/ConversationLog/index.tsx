/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styles from './conversationlog.module.css';

export const ConversationLog: React.FC = ({ children }) => (
  <div className={styles.log}>{children}</div>
);
