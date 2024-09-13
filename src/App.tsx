import React from 'react';
import { ChatO, FriendsO, ManagerO, PhotoO } from '@react-vant/icons';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import routes from '@/routes';
import { Tabbar } from 'react-vant';

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen min-w-screen'>
        <div className='flex-1'>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route path='/' element={<Navigate to='/chat' replace />} />
          </Routes>
        </div>
        <Tabbar>
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
      </div>
    </Router>
  );
}

export default App;
