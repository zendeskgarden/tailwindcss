/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { ReactComponent as WordmarkAnswerBot } from '@zendeskgarden/svg-icons/src/26/answer-bot.svg';

import { Widget } from './components/Widget';
import { Textarea } from './components/Textarea';
import { ConversationLog } from './components/ConversationLog';
import { MessageGroup } from './components/MessageGroup';
import { Action, Message } from './components/Message';

import styles from './app.module.css';

const App: React.FC = () => (
  <div className="py-4 px-2">
    <Widget title="Help">
      <ConversationLog>
        <MessageGroup
          type="maker"
          title="Answer Bot"
          avatar={<WordmarkAnswerBot className={styles['answer-bot']} role="presentation" />}
        >
          <Message>Hi, welcome to Joe's Coffee.</Message>
          <Message>Ask me a question and I'll find you the answer</Message>
          <Message>Or you can get in touch</Message>
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
                <Action>Chat with an agent</Action>
                <Action>Leave a message</Action>
                <Action>Request a callback</Action>
              </>
            }
          >
            Our studio is open today from 10am to 10pm.
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
        plugin. No custom styles are used in this example, with all styling and states being
        provided by Garden design tokens.{' '}
        <a href="https://github.com/zendeskgarden/tailwindcss/tree/main/example">View the source</a>{' '}
        for more information.
      </p>
    </div>
  </div>
);

export default App;
