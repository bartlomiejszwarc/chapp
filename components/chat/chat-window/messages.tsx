'use client';
import {useLayoutEffect, useRef} from 'react';
import Message from './message';

export default function Messages() {
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({behavior: 'instant'});
    }
  }, []);
  return (
    <div className='flex flex-col space-y-6 overflow-auto my-6'>
      {Array.from({length: 10}, (_, idx) => (
        <div ref={idx === 10 - 1 ? lastMessageRef : null} key={idx}>
          <Message />
        </div>
      ))}
    </div>
  );
}
