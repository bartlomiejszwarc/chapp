import {createStore} from 'zustand/vanilla';

export interface People {
  id: string;
  avatar_url: string;
  display_name: string;
  email: string;
}
export type PeopleState = {
  people: People[];
};

export type PeopleActions = {
  setPeopleList: (people: People[]) => void;
};

export type PeopleStore = PeopleState & PeopleActions;

export const defaultInitState: PeopleState = {
  people: [],
};

export const createPeopleStore = (initState: PeopleState = defaultInitState) => {
  return createStore<PeopleStore>()((set, get) => ({
    ...initState,
    setPeopleList: (people: People[]) => {
      set((state) => ({people: people}));
    },
  }));
};
