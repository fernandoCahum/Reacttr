import React from 'react'

import styles from './input-text.module.css'

const InputText = ({ onSendText, userNameToReply, onCloseText  }) => (
    <form className={styles['form']} action="POST" onSubmit={onSendText}>
        <textarea className={styles['text']} name="text" id="" cols="30" rows="10">
             {(userNameToReply) ? `@${userNameToReply} ` : ''}
        </textarea>
        <div className={styles.buttons}>
            <button
                className={styles['close']}
                onClick={onCloseText}
            >
                Cerrar
            </button>
            <button
                className={styles['send']}
                type='submit'
            >
                Enviar
            </button>


        </div>
    </form>
)


export default InputText