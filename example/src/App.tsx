/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME, IGardenTheme, ThemeProvider } from '@zendeskgarden/react-theming';
import { Field, Toggle } from '@zendeskgarden/react-forms';
import React, { useLayoutEffect, useState } from 'react';
import IconDark from '@zendeskgarden/svg-icons/src/16/moon-stroke.svg?react';
import IconLight from '@zendeskgarden/svg-icons/src/16/sun-stroke.svg?react';
import { Span } from '@zendeskgarden/react-typography';
import WordmarkAnswerBot from '@zendeskgarden/svg-icons/src/26/answer-bot.svg?react';

import { Action, Message } from './components/Message';
import { ConversationLog } from './components/ConversationLog';
import { MessageGroup } from './components/MessageGroup';
import { Textarea } from './components/Textarea';
import { Widget } from './components/Widget';

import styles from './app.module.css';

const ColorSchemeToggle: React.FC = () => {
  const [checked, setChecked] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const theme = {
    ...DEFAULT_THEME,
    colors: {
      ...DEFAULT_THEME.colors,
      base: checked ? 'dark' : 'light'
    }
  } as IGardenTheme;

  useLayoutEffect(() => {
    if (checked) {
      document.documentElement.dataset.scheme = 'dark';
    } else {
      document.documentElement.dataset.scheme = 'light';
    }
  }, [checked]);

  return (
    <ThemeProvider theme={theme}>
      <Field>
        <Span>
          <Span.StartIcon>
            <IconLight />
          </Span.StartIcon>
        </Span>
        <Toggle
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        >
          <Field.Label hidden>Color mode</Field.Label>
        </Toggle>
        <Span>
          <Span.Icon className="ml-2">
            <IconDark />
          </Span.Icon>
        </Span>
      </Field>
    </ThemeProvider>
  );
};

const App: React.FC = () => (
  <div className="py-4 px-2">
    <Widget title="Help">
      <ConversationLog>
        <MessageGroup
          type="maker"
          title="Willow Kohlrabi • Bot"
          avatar={<WordmarkAnswerBot className={styles['answer-bot']} role="presentation" />}
        >
          <Message>Hi, how can I help you today?</Message>
          <Message>Ask me a question and I&rsquo;ll find you the answer.</Message>
          <Message>Or you can get in touch.</Message>
        </MessageGroup>
        <MessageGroup type="user">
          <Message>Hours</Message>
        </MessageGroup>
        <MessageGroup
          type="maker"
          avatar={<WordmarkAnswerBot className={styles['answer-bot']} role="presentation" />}
        >
          <Message>Our shop is open today from 10am to 8pm.</Message>
          <Message>Is there anything else I can help you with?</Message>
        </MessageGroup>
        <MessageGroup type="user">
          <Message>Get in touch</Message>
        </MessageGroup>
        <MessageGroup
          type="maker"
          title="Answer Bot"
          avatar={<WordmarkAnswerBot className={styles['answer-bot']} role="presentation" />}
        >
          <Message
            actions={
              <>
                <Action>Chat with a team member</Action>
                <Action>Leave a message</Action>
                <Action>Request a callback</Action>
              </>
            }
          >
            Here are some ways to get in touch.
          </Message>
        </MessageGroup>
      </ConversationLog>
      <Textarea
        placeholder="Type a search query here..."
        aria-label="Type a search query here..."
      />
    </Widget>
    <div className="max-w-4xl mx-auto mt-16">
      <h1 className="text-3xl leading-3xl font-semibold mb-6">
        Zendesk Garden Tailwind CSS Example
      </h1>
      <div className="mb-5">
        <ColorSchemeToggle />
      </div>
      <p className="mb-5">
        This is a mock implementation using <a href="https://tailwindcss.com/">Tailwind CSS</a> and
        the <a href="https://github.com/zendeskgarden/tailwindcss">@zendeskgarden/tailwindcss</a>{' '}
        plugin. No custom styles are used in this example. All styling and states are applied via
        Garden design tokens.{' '}
        <a href="https://github.com/zendeskgarden/tailwindcss/tree/main/example">View the source</a>{' '}
        for more information.
      </p>
    </div>
  </div>
);

export default App;
