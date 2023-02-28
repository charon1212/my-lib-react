import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type Context<State extends unknown> = [state: State, setState: Dispatch<SetStateAction<State>>];
/**
 * example:
 *
 * ```tsx
 * // UserContext.tsx
 * const [ UserContextProvider, useUserContext ] = createStateContext({name: '', age: 0});
 * export { UserContextProvider, useUserContext };
 *
 * // App.tsx
 * const App = () => (
 *   <UserContextProvider>
 *     <Some />
 *   </UserContextProvider>
 * );
 *
 * // Some.tsx
 * const Some = () => {
 *   const [ user, setUser ] = useUserContext();
 *   useEffect(() => {
 *     setUser({ name: 'Sam', age: 20 });
 *   },[]);
 *   return <>
 *     {user.name} - {user.age}
 *   </>;
 * };
 * ```
 *
 */
export const createStateContext = <State extends unknown>(initialState: State) => {
  const context = createContext<Context<State>>([initialState, () => {}]);
  const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<State>(initialState);
    return <context.Provider value={[state, setState]}>{children}</context.Provider>;
  };
  const useContextState = () => useContext(context);
  return [ContextProvider, useContextState] as const;
};
