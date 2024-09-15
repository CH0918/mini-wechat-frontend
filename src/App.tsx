import React from 'react';
import { ChatO, FriendsO, ManagerO, PhotoO } from '@react-vant/icons';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import routes from '@/routes';
import { Tabbar } from 'react-vant';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className='flex flex-col h-screen'>
      {/* 主要内容区域 */}
      <main className='flex-1 overflow-y-auto mt-12 mb-16'>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path='/' element={<Navigate to='/chat' replace />} />
        </Routes>
      </main>

      {/* 底部导航栏 */}
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
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
