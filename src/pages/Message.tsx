import React, { useState, useRef, useEffect } from 'react';
import { Input, ActionSheet, Button } from 'react-vant';
import { SmileO, ArrowLeft, AddO } from '@react-vant/icons';
import Header from '@/component/HeadComp';
import { useLocation, useNavigate } from 'react-router-dom';
import { InputInstance } from 'react-vant';

interface Message {
  id: number;
  content: string;
  isSelf: boolean;
}

const Message: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    // mock data
    { id: 1, content: '你好啊啊啊啊拾', isSelf: false },
    { id: 2, content: '你好', isSelf: true },
    { id: 3, content: '你好啊啊啊啊啊啊啊11222拾收拾', isSelf: true },
    { id: 4, content: '你好', isSelf: true },
    { id: 5, content: '你好啊啊啊啊拾', isSelf: false },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showActionSheet, setShowActionSheet] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef<InputInstance>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        { id: Date.now(), content: inputValue, isSelf: true },
      ]);
      setInputValue('');
      // 保持输入框焦点
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    // 滚动到最新消息
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, []);
  useEffect(() => {
    const resizeHandler = () => {
      if (pageRef.current && messageContainerRef.current) {
        const viewportHeight =
          window.visualViewport?.height || window.innerHeight;
        pageRef.current.style.height = `${viewportHeight}px`;

        // 调整内容区域高度，减去其他元素的高度（如头部、底部等）
        // const otherElementsHeight = 100; // 根据实际情况调整这个值
        // messageContainerRef.current.style.height = `100px`;
      }
    };

    window.visualViewport?.addEventListener('resize', resizeHandler);
    resizeHandler(); // 初始化高度

    return () => {
      window.visualViewport?.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const actions = [{ name: '图片' }, { name: '视频' }, { name: '文件' }];

  return (
    <div ref={pageRef} className='flex flex-col bg-gray-100 overflow-hidden'>
      <Header
        title={state.name}
        leftIcon={<ArrowLeft onClick={() => navigate(-1)} />}
      />
      <div ref={messageContainerRef} className='flex-1 overflow-y-auto p-4'>
        {messages.map((message) => (
          <React.Fragment key={message.id}>
            {!message.isSelf ? (
              <div className={`mb-1 flex justify-start items-start`}>
                <img
                  src={state.avatar}
                  alt='对方头像'
                  className='w-10 h-10 rounded-full mr-2'
                />
                <div className='relative  max-w-[calc(100%-6rem)]'>
                  <div className='absolute left-0 top-5 transform -translate-x-full -translate-y-1/2'>
                    <div className='w-0 h-0 border-t-[6px] border-r-[10px] border-b-[6px] border-transparent border-r-white'></div>
                  </div>
                  <div className='bg-white text-grayPrimary p-2 rounded-lg break-words w-max'>
                    {message.content}
                  </div>
                </div>
              </div>
            ) : (
              <div className={`mb-1 flex justify-end items-start`}>
                <div className='relative max-w-[calc(100%-6rem)]'>
                  <div className='absolute right-0.5 top-5 transform translate-x-full -translate-y-1/2'>
                    <div className='w-0 h-0 border-t-[6px] border-l-[10px] border-b-[6px] border-transparent border-l-secondary'></div>
                  </div>
                  <div className='bg-secondary text-grayPrimary p-2 rounded-lg break-words'>
                    {message.content}
                  </div>
                </div>
                <img
                  src='https://api.dicebear.com/7.x/avataaars/svg?seed=我的头像'
                  alt='我的头像'
                  className='w-10 h-10 rounded-full ml-2'
                />
              </div>
            )}
          </React.Fragment>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className='pt-2 pb-3 px-2 bg-100 border-t'>
        <div className='flex items-center'>
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={setInputValue}
            className='flex-1 bg-white rounded-md h-8 px-2 py-4'
          />
          <SmileO className='mx-2 text-2xl' />
          {inputValue.length === 0 ? (
            <AddO
              className='text-2xl'
              onClick={() => setShowActionSheet(true)}
            />
          ) : (
            <Button
              size='small'
              className='ml-2 bg-green-500 rounded-md h-8 text-white text-[14px] font-medium'
              onClick={sendMessage}
            >
              发送
            </Button>
          )}
        </div>
      </div>

      <ActionSheet
        visible={showActionSheet}
        onCancel={() => setShowActionSheet(false)}
        actions={actions}
        onSelect={(action) => {
          console.log(action.name);
          setShowActionSheet(false);
        }}
      />
    </div>
  );
};

export default Message;
