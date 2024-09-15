import React, { ReactNode } from 'react';
import { Popover } from 'react-vant';
import { Chat, Friends } from '@react-vant/icons';
import { PopoverAction } from 'react-vant/es/popover/PropsType';

interface HeaderProps {
  title: string;
  rightIcon?: ReactNode;
}

const actions: PopoverAction[] = [
  {
    text: '发起群聊',
    icon: <Chat />,
  },
  { text: '添加朋友', icon: <Friends /> },
];
const Header: React.FC<HeaderProps> = ({ title, rightIcon }) => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-white z-10'>
      <div className='text-black py-3 px-4 flex items-center justify-between border-b border-gray-100'>
        <div className='flex-1'></div>
        <h1 className='text-md text-center font-bold flex-1'>{title}</h1>
        <div className='flex-1 flex justify-end mr-1'>
          {rightIcon && (
            <Popover
              placement='bottom-end'
              theme='dark'
              offset={[15, 14]}
              actions={actions}
              onSelect={() => {}}
              reference={rightIcon}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
