import React from 'react'
import './MessageBox.css'

interface MessageBoxProps {
    mode: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ mode }) => {
    const [text, setText] = React.useState('');
    return (
        <div className={mode}>
            Это сообщение от {mode}
        </div>
    )
}

export default MessageBox