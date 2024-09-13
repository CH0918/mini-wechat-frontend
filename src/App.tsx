import React, { useEffect, useState } from 'react';
import useStore from './store';
import api from '@/utils/api';
import { Button } from 'react-vant';

interface User {
  id: number;
  name: string;
  // 添加其他需要的属性
}

function App() {
  const { count, increment } = useStore();
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get<User[]>(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(response.data);
      } catch (err) {
        setError(
          `获取用户数据失败: ${err instanceof Error ? err.message : err}`
        );
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold text-blue-600 mb-4'>
        Tailwind CSS 测试
      </h1>
      <p className='text-lg text-gray-700 mb-6'>
        这是一个使用 Tailwind CSS 样式的段落。
      </p>
      <button
        className='px-4 py-2 bg-blue-400 text-white rounded hover:bg-green-600 transition-colors mb-4'
        onClick={increment}
      >
        点击我
      </button>
      <p className='text-xl text-gray-800 mb-4'>计数器: {count}</p>

      <h2 className='text-2xl font-bold text-blue-600 mb-4'>用户列表</h2>
      {error && <p className='text-red-500'>{error}</p>}
      <ul className='list-disc pl-5'>
        {users?.map((user) => (
          <li key={user.id} className='text-gray-700'>
            {user.name}
          </li>
        ))}
      </ul>
      <Button>click me</Button>
    </div>
  );
}

export default App;
