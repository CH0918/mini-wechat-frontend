import ChatRecordComp from '@/component/ChatRecordComp';
import Header from '@/component/HeadComp';
import { formatChatTime } from '@/utils/tool';
import { AddO } from '@react-vant/icons';
// import { AddO } from '@react-vant/icons';
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

interface ChatRecord {
  avatar: string;
  name: string;
  lastMessage: string;
  time: number;
}

const Chat: React.FC = () => {
  const [chatRecords, setChatRecords] = useState<ChatRecord[]>([]);

  useEffect(() => {
    const fetchChatRecords = async () => {
      try {
        // const response = await axios.get<ChatRecord[]>('/api/chat-records');
        // 模拟一批聊天记录数据
        const mockChatRecords: ChatRecord[] = [
          {
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=张三',
            name: '张三',
            lastMessage: '你好，最近怎么样？',
            time: Date.now(), // mock时间戳
          },
          {
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=李四',
            name: '李四',
            lastMessage: '周末一起出去玩吗？',
            time: Date.now() - 1000 * 60 * 60 * 24, // 昨天时间戳
          },
          {
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=王五',
            name: '王五',
            lastMessage: '记得带上文件哦',
            time: Date.now() - 1000 * 60 * 60 * 24 * 3, // 星期二时间戳
          },
          {
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=王五',
            name: '王五',
            lastMessage: '记得带上文件哦',
            time: Date.now() - 1000 * 60 * 60 * 24 * 3, // 星期二时间戳
          },
          {
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=王五',
            name: '王五',
            lastMessage: '记得带上文件哦',
            time: Date.now() - 1000 * 60 * 60 * 24 * 3, // 星期二时间戳
          },
          {
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=王五',
            name: '王五',
            lastMessage: '记得带上文件哦',
            time: Date.now() - 1000 * 60 * 60 * 24 * 3, // 星期二时间戳
          },
          {
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=王五',
            name: '王五',
            lastMessage: '记得带上文件哦',
            time: Date.now() - 1000 * 60 * 60 * 24 * 3, // 星期二时间戳
          },
          {
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=王五',
            name: '王五',
            lastMessage: '记得带上文件哦',
            time: Date.now() - 1000 * 60 * 60 * 24 * 3, // 星期二时间戳
          },
          {
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=王五',
            name: '王五',
            lastMessage: '记得带上文件哦',
            time: Date.now() - 1000 * 60 * 60 * 24 * 3, // 星期二时间戳
          },
        ];
        const response = { data: mockChatRecords };
        setChatRecords(response.data);
      } catch (error) {
        console.error('获取聊天记录失败:', error);
      }
    };

    fetchChatRecords();
  }, []);

  return (
    <div className='flex flex-col pb-10'>
      <Header title='微信' rightIcon={<AddO className='text-xl' />} />
      {chatRecords.map((record, index) => (
        <ChatRecordComp
          key={index}
          avatar={record.avatar}
          name={record.name}
          lastMessage={record.lastMessage}
          time={formatChatTime(record.time)}
        />
      ))}
    </div>
  );
};

export default Chat;
