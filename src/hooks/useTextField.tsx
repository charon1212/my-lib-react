import { useState } from 'react';

/**
 * 文字列のstateと、それをTextFieldに適用するためのpropを取得する。
 * 戻り値の第3要素（props）をspread演算子で使うことを想定。
 *
 * ```tsx
 *   const [value, setter, props] = useTextField();
 *   return <input {...props}/>
 * ```
 *
 * @param initialValue 状態の初期値
 */
export const useTextField = (initialValue?: string) => {
  const [value, setter] = useState(initialValue ?? '');
  const props = {
    value,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setter(e.target.value);
    },
  };
  return [value, setter, props] as const;
};
