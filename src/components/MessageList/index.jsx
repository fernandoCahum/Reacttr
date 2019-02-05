import React from 'react'

import styles from './message-list.module.css'
import Message from '../Message'


const MessageList = ({ messages, onRetweet, onFavorite, onReplyTweet }) =>(
    <div className={styles['root']}>
        {
            messages.map(message => (
                <Message
                    key={message.id}
                    text={message.text}
                    picture={message.picture}
                    displayName={message.displayName}
                    username={message.username}
                    date={message.date}
                    numRetweets={message.retweets}
                    numFavorites={message.favorites}
                    onRetweet={() => onRetweet(message.id)}
                    onFavorite={() => onFavorite(message.id)}
                    onReplyTweet={() => onReplyTweet(message.id, message.username)}
                />
            )).reverse()
        }
    </div>
)


export default MessageList