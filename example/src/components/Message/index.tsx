/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes, ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { MessageGroupContext } from '../MessageGroup';
import styles from './message.module.css';

export const Message: React.FC<{ actions?: React.ReactElement; children: ReactNode }> = ({
  children,
  actions
}) => {
  const messageType = useContext(MessageGroupContext);

  return (
    <div
      className={classNames(styles.message, {
        [styles['message--maker']]: messageType === 'maker',
        [styles['message--user']]: messageType === 'user'
      })}
    >
      {children}
      {actions && <div className={styles['action-list']}>{actions}</div>}
    </div>
  );
};

export const Action: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...other
}) => <button className={classNames(className, styles.action)} type="button" {...other} />;
