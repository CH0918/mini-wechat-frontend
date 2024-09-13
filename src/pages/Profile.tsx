import React from 'react';
import { Image } from 'react-vant';

const Profile: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      {/* 顶部导航栏 */}
      <div className='bg-green-500 text-white p-4'>
        <h1 className='text-xl font-bold'>我</h1>
      </div>

      {/* 用户信息 */}
      <div className='bg-white p-4 flex items-center'>
        <Image
          src='https://randomuser.me/api/portraits/men/10.jpg'
          className='w-16 h-16 rounded-full mr-4'
        />
        <div>
          <h2 className='text-lg font-bold'>用户名</h2>
          <p className='text-gray-500'>微信号: wxid_123456</p>
        </div>
      </div>

      {/* 功能列表 */}
      <div className='mt-4'>
        <div className='bg-white'>
          <div className='p-4 flex items-center border-b'>
            <i className='text-2xl mr-4 text-yellow-500'>🌟</i>
            <span>收藏</span>
          </div>
          <div className='p-4 flex items-center'>
            <i className='text-2xl mr-4 text-red-500'>📸</i>
            <span>朋友圈</span>
          </div>
        </div>

        <div className='bg-white mt-4'>
          <div className='p-4 flex items-center border-b'>
            <i className='text-2xl mr-4 text-green-500'>💳</i>
            <span>卡包</span>
          </div>
          <div className='p-4 flex items-center'>
            <i className='text-2xl mr-4 text-blue-500'>😊</i>
            <span>表情</span>
          </div>
        </div>

        <div className='bg-white mt-4'>
          <div className='p-4 flex items-center'>
            <i className='text-2xl mr-4 text-gray-500'>⚙️</i>
            <span>设置</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
