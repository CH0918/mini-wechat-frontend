import { RouteObject } from 'react-router-dom';
import Chat from '@pages/Chat';
import Contact from '@pages/Contact';
import Moments from '@pages/Moments';
import Profile from '@pages/Profile';
import Message from '@/pages/Message';

const routes: RouteObject[] = [
  {
    path: '/chat',
    element: <Chat />,
  },
  {
    path: '/chat/message',
    element: <Message />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/moments',
    element: <Moments />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
];

export default routes;
