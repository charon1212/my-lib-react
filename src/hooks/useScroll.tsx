import { useCallback, useRef } from 'react';

/** 参考：https://www.gaji.jp/blog/2022/02/25/9175/ */
export const useScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const moveTo = useCallback(() => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);
  return [ref, moveTo] as const;
};
