import React, { ReactNode } from 'react';
import { Popover } from 'react-vant';
import { Chat, Friends } from '@react-vant/icons';
import { PopoverAction } from 'react-vant/es/popover/PropsType';

interface HeaderProps {
  title: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
}

const actions: PopoverAction[] = [
  {
    text: '发起群聊',
    icon: <Chat />,
  },
  { text: '添加朋友', icon: <Friends /> },
];
const Header: React.FC<HeaderProps> = ({ title, rightIcon, leftIcon }) => {
  return (
    <header className='sticky top-0 left-0 right-0 bg-white z-10'>
      <div className='text-black py-3 px-4 border-b border-gray-100 relative flex justify-between items-center'>
        <div className='w-6'>
          {leftIcon && (
            <div className='absolute left-4 top-1/2 transform -translate-y-1/2'>
              {leftIcon}
            </div>
          )}
        </div>
        <h1 className='text-md font-bold flex-1 text-center'>{title}</h1>
        <div className='w-6 flex justify-center items-center'>
          {rightIcon && (
            <Popover
              placement='bottom-end'
              theme='dark'
              offset={[15, 14]}
              actions={actions}
              onSelect={() => {}}
              reference={<div className=''>{rightIcon}</div>}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
