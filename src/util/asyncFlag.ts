export type AsyncFlag = {
  (f1: () => unknown): () => void;
  <T1>(f1: () => Promise<T1>, f2: (t1: T1) => unknown): () => void;
  <T1, T2>(f1: () => Promise<T1>, f2: (t1: T1) => Promise<T2>, f3: (t2: T2) => unknown): () => void;
  <T1, T2, T3>(f1: () => Promise<T1>, f2: (t1: T1) => Promise<T2>, f3: (t2: T2) => Promise<T3>, f4: (t3: T3) => unknown): () => void;
  <T1, T2, T3, T4>(f1: () => Promise<T1>, f2: (t1: T1) => Promise<T2>, f3: (t2: T2) => Promise<T3>, f4: (t3: T3) => Promise<T4>, f5: (t4: T4) => unknown): () => void;
  <T1, T2, T3, T4, T5>(f1: () => Promise<T1>, f2: (t1: T1) => Promise<T2>, f3: (t2: T2) => Promise<T3>, f4: (t3: T3) => Promise<T4>, f5: (t4: T4) => Promise<T5>, f6: (t5: T5) => unknown): () => void;
  <T1, T2, T3, T4, T5, T6>(f1: () => Promise<T1>, f2: (t1: T1) => Promise<T2>, f3: (t2: T2) => Promise<T3>, f4: (t3: T3) => Promise<T4>, f5: (t4: T4) => Promise<T5>, f6: (t5: T5) => Promise<T6>, f7: (t6: T6) => unknown): () => void;
  <T1, T2, T3, T4, T5, T6, T7>(f1: () => Promise<T1>, f2: (t1: T1) => Promise<T2>, f3: (t2: T2) => Promise<T3>, f4: (t3: T3) => Promise<T4>, f5: (t4: T4) => Promise<T5>, f6: (t5: T5) => Promise<T6>, f7: (t6: T6) => Promise<T7>, f8: (t7: T7) => unknown): () => void;
  <T1, T2, T3, T4, T5, T6, T7, T8>(f1: () => Promise<T1>, f2: (t1: T1) => Promise<T2>, f3: (t2: T2) => Promise<T3>, f4: (t3: T3) => Promise<T4>, f5: (t4: T4) => Promise<T5>, f6: (t5: T5) => Promise<T6>, f7: (t6: T6) => Promise<T7>, f8: (t7: T7) => Promise<T8>, f9: (t8: T8) => unknown): () => void;
  <T1, T2, T3, T4, T5, T6, T7, T8, T9>(f1: () => Promise<T1>, f2: (t1: T1) => Promise<T2>, f3: (t2: T2) => Promise<T3>, f4: (t3: T3) => Promise<T4>, f5: (t4: T4) => Promise<T5>, f6: (t5: T5) => Promise<T6>, f7: (t6: T6) => Promise<T7>, f8: (t7: T7) => Promise<T8>, f9: (t8: T8) => Promise<T9>, f10: (t9: T9) => unknown): () => void;
};

/**
 * useEffectで非同期関数を扱う際のflag設定utility。
 *
 * example:
 *
 * ```tsx
 * useEffect(() => {
 *   return asyncFlag(
 *     () => fetch(`http://hoge.com/${id}`),
 *     (res) => res.json(),
 *     (json) => setJson(json),
 *   );
 * }, [id]);
 * ```
 *
 */
export const asyncFlag: AsyncFlag = (...list: Function[]) => {
  let flag = true;
  const [first, ...rest] = list;
  rest.reduce((result: Promise<any>, next) => result.then((t) => { flag && next(t) }), first());
  return () => { flag = false };
};
