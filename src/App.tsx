import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import routes from '@/routes';
import VConsole from 'vconsole';

function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function App() {
  useEffect(() => {
    // 只在开发环境中初始化 vConsole
    if (process.env.NODE_ENV === 'development') {
      new VConsole();
    }
  }, []);

  // 初始设置
  setVH();
  window.addEventListener('resize', setVH);
  return (
    <div className='flex flex-col h-full'>
      {/* 主要内容区域 */}
      <main className='flex-1 overflow-y-auto'>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path='/' element={<Navigate to='/chat' replace />} />
        </Routes>
      </main>
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
