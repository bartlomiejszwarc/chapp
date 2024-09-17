import {createStore} from 'zustand/vanilla';

export interface AuthenticatedUser {
  id: string;
  avatarUrl: string;
  displayName: string;
  email: string;
  sentInvitations: string[];
  incomingInvitations: string[];
}

export type AuthenticatedUserState = {
  authenticatedUser: AuthenticatedUser | null;
};

export type AuthenticatedUserActions = {
  setAuthenticatedUserData: (authenticatedUser: AuthenticatedUser) => void;
  setAuthenticatedUserSentInvitations: (sentInvitations: string[]) => void;
};

export type AuthenticatedUserStore = AuthenticatedUserState & AuthenticatedUserActions;

export const defaultInitState: AuthenticatedUserState = {
  authenticatedUser: null,
};

export const createAuthenticatedUserStore = (initState: AuthenticatedUserState = defaultInitState) => {
  return createStore<AuthenticatedUserStore>()((set, get) => ({
    ...initState,
    setAuthenticatedUserData: (authenticatedUser: AuthenticatedUser) => {
      set((state) => ({authenticatedUser: authenticatedUser}));
    },
    setAuthenticatedUserSentInvitations: (sentInvitations: string[]) => {
      set((state) => ({
        authenticatedUser: {
          ...state.authenticatedUser,
          sentInvitations,
        } as AuthenticatedUser,
      }));
    },
  }));
};
