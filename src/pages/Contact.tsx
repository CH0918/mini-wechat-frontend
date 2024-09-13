import React from 'react';
// import { List } from 'react-vant';

interface ContactItem {
  id: string;
  name: string;
  avatar: string;
}

const contacts: ContactItem[] = [
  {
    id: '1',
    name: '张三',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: '李四',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '3',
    name: '王五',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  // 可以添加更多联系人
];

const Contact: React.FC = () => {
  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      {/* 顶部导航栏 */}
      <div className='bg-green-500 text-white p-4'>
        <h1 className='text-xl font-bold'>通讯录</h1>
      </div>

      {/* 搜索栏 */}
      <div className='bg-white p-2'>
        <input
          type='text'
          placeholder='搜索'
          className='w-full p-2 bg-gray-200 rounded-md'
        />
      </div>

      {/* 联系人列表 */}
      <div className='flex-1 overflow-y-auto'>
        {contacts.map((contact) => (
          <div key={contact.id} className='flex items-center p-4 border-b'>
            <img
              src={contact.avatar}
              alt={contact.name}
              className='w-10 h-10 rounded-full mr-3'
            />
            <span>{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
