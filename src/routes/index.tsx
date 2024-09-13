import { RouteObject } from 'react-router-dom';
import Chat from '@pages/Chat';
import Contact from '@pages/Contact';
import Moments from '@pages/Moments';
import Profile from '@pages/Profile';

const routes: RouteObject[] = [
  {
    path: '/chat',
    element: <Chat />,
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
