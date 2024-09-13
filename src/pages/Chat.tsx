import React, { useState } from 'react';
import { Button, Input } from 'react-vant';

interface Message {
  id: number;
  text: string;
  isSent: boolean;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputText,
        isSent: true,
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      {/* 顶部导航栏 */}
      <div className=' text-black p-4'>
        <h1 className='text-md text-center font-500'>微信</h1>
      </div>

      {/* 聊天消息区域 */}
      <div className='flex-1 overflow-y-auto p-4'>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isSent ? 'justify-end' : 'justify-start'
            } mb-4`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                message.isSent
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* 底部输入框 */}
      <div className='bg-white p-4 flex items-center'>
        <Input
          className='flex-1 mr-2'
          value={inputText}
          onChange={setInputText}
          placeholder='输入消息...'
        />
        <Button type='primary' onClick={handleSend}>
          发送
        </Button>
      </div>
    </div>
  );
};

export default Chat;
