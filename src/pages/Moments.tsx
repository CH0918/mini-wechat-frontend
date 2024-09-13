import React from 'react';
import { Image } from 'react-vant';

interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  images: string[];
  likes: number;
  comments: number;
}

const posts: Post[] = [
  {
    id: '1',
    author: {
      name: '张三',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    content: '今天天气真好，出去玩了一天！',
    images: ['https://picsum.photos/200/300?random=1'],
    likes: 15,
    comments: 3,
  },
  {
    id: '2',
    author: {
      name: '李四',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    content: '刚刚吃了一顿美味的晚餐，太幸福了！',
    images: [
      'https://picsum.photos/200/300?random=2',
      'https://picsum.photos/200/300?random=3',
    ],
    likes: 20,
    comments: 5,
  },
];

const Moments: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      {/* 顶部导航栏 */}
      <div className='bg-green-500 text-white p-4 fixed top-0 left-0 right-0 z-10'>
        <h1 className='text-xl font-bold'>朋友圈</h1>
      </div>

      {/* 封面图和用户头像 */}
      <div className='relative pt-16 pb-20'>
        <Image
          src='https://picsum.photos/400/200'
          className='w-full h-48 object-cover'
        />
        <div className='absolute bottom-4 right-4 flex items-center'>
          <span className='text-white mr-2 font-bold'>我的名字</span>
          <Image
            src='https://randomuser.me/api/portraits/men/10.jpg'
            className='w-16 h-16 rounded-full border-2 border-white'
          />
        </div>
      </div>

      {/* 朋友圈内容 */}
      <div className='flex-1 pb-16'>
        {posts.map((post) => (
          <div key={post.id} className='bg-white mb-4 p-4'>
            <div className='flex items-start mb-2'>
              <Image
                src={post.author.avatar}
                className='w-12 h-12 rounded-full mr-3'
              />
              <div>
                <h3 className='font-bold text-blue-500'>{post.author.name}</h3>
                <p className='text-gray-700'>{post.content}</p>
              </div>
            </div>
            <div className='flex flex-wrap -mx-1 mb-2'>
              {post.images.map((image, index) => (
                <div key={index} className='w-1/3 px-1 mb-2'>
                  <Image
                    src={image}
                    className='w-full h-24 object-cover rounded'
                  />
                </div>
              ))}
            </div>
            <div className='flex justify-between text-gray-500 text-sm'>
              <span>{post.likes} 赞</span>
              <span>{post.comments} 评论</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moments;
