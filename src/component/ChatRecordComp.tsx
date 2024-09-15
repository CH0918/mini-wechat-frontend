import React from 'react';

interface ChatRecordProps {
  avatar: string;
  name: string;
  lastMessage: string;
  time: string;
}

const ChatRecordComp: React.FC<ChatRecordProps> = ({
  avatar,
  name,
  lastMessage,
  time,
}) => {
  return (
    <div className='flex items-center p-2 border-b border-gray-200'>
      <img src={avatar} alt={name} className='w-12 h-12 rounded-full mr-4' />
      <div className='flex-1'>
        <div className='flex justify-between items-center'>
          <h3 className='text-base font-semibold'>{name}</h3>
          <span className='text-sm text-gray-500'>{time}</span>
        </div>
        <p className='text-gray-400 truncate text-sm'>{lastMessage}</p>
      </div>
    </div>
  );
};

export default ChatRecordComp;
