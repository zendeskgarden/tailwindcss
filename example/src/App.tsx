/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { ReactComponent as WordmarkAnswerBot } from '@zendeskgarden/svg-icons/src/26/answer-bot.svg';

import { Action, Message } from './components/Message';
import { ConversationLog } from './components/ConversationLog';
import { MessageGroup } from './components/MessageGroup';
import { Textarea } from './components/Textarea';
import { Widget } from './components/Widget';

import styles from './app.module.css';

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
