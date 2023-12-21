/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ReactNode } from 'react';
import WordmarkZendesk from '@zendeskgarden/svg-icons/src/26/wordmark-zendesk.svg?react';
import styles from './widget.module.css';

export const Widget: React.FC<{ title: string; children: ReactNode }> = ({ children, title }) => (
  <div className={styles.widget}>
    <div className={styles.header}>{title}</div>
    <div className={styles.content}>
      {children}
      <WordmarkZendesk className={styles.wordmark} role="presentation" />
    </div>
  </div>
);
