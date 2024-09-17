import React from 'react';
import { Tabbar } from 'react-vant';
import { ChatO, FriendsO, PhotoO, ManagerO } from '@react-vant/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const FooterComp: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className='fixed bottom-0 left-0 right-0 bg-white z-10'>
      <Tabbar
        value={location.pathname}
        onChange={(value) => navigate(value as string)}
      >
        <Tabbar.Item icon={<ChatO />} name='/chat'>
          聊天
        </Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />} name='/contact'>
          通讯录
        </Tabbar.Item>
        <Tabbar.Item icon={<PhotoO />} name='/moments'>
          朋友圈
        </Tabbar.Item>
        <Tabbar.Item icon={<ManagerO />} name='/profile'>
          我
        </Tabbar.Item>
      </Tabbar>
    </footer>
  );
};

export default FooterComp;
