'use client';

import {type ReactNode, createContext, useRef, useContext} from 'react';
import {useStore} from 'zustand';

import {type AuthenticatedUserStore, createAuthenticatedUserStore} from '@/stores/authenticated-user-store';

export type AuthenticatedUserApi = ReturnType<typeof createAuthenticatedUserStore>;

export const AuthenticatedUserContext = createContext<AuthenticatedUserApi | undefined>(undefined);

export interface AuthenticatedUserProviderProps {
  children: ReactNode;
}

export const AuthenticatedUserProvider = ({children}: AuthenticatedUserProviderProps) => {
  const storeRef = useRef<AuthenticatedUserApi>();
  if (!storeRef.current) {
    storeRef.current = createAuthenticatedUserStore();
  }

  return <AuthenticatedUserContext.Provider value={storeRef.current}>{children}</AuthenticatedUserContext.Provider>;
};

export const useAuthenticatedUserStore = <T,>(selector: (store: AuthenticatedUserStore) => T): T => {
  const authenticatedUserContext = useContext(AuthenticatedUserContext);

  if (!authenticatedUserContext) {
    throw new Error(`useAuthenticatedUserStore must be used within AuthenticatedUserProvider`);
  }

  return useStore(authenticatedUserContext, selector);
};
