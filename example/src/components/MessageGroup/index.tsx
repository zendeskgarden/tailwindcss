/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import classNames from 'classnames';

import styles from './messagegroup.module.css';

type MESSAGE_TYPE = 'maker' | 'user';

export const MessageGroupContext = React.createContext<MESSAGE_TYPE>('user');

export const MessageGroup: React.FC<{
  type: MESSAGE_TYPE;
  title?: string;
  avatar?: React.ReactElement;
}> = ({ children, type, title, avatar }) => (
  <MessageGroupContext.Provider value={type}>
    <div
      className={classNames(styles['message-group'], {
        [styles['message-group--maker']]: type === 'maker',
        [styles['message-group--user']]: type === 'user'
      })}
    >
      {title && <div className={styles.title}>{title}</div>}
      {children}
      {avatar && <div className={styles.avatar}>{avatar}</div>}
    </div>
  </MessageGroupContext.Provider>
);
