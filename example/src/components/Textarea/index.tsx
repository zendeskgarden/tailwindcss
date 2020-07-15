/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './textarea.module.css';

export const Textarea = React.forwardRef<HTMLTextAreaElement, HTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={classNames(styles.textarea, className)} {...props} />
  )
);

Textarea.displayName = 'Textarea';
