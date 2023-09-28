export interface APIRickAndMorty {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: APIData;
  location: APIData;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface APIData {
  name: string;
  url: string;
}

export interface APIInfo extends Pick<APIRickAndMorty, "id" | "name"> {
  email: string;
}

export interface UserInfo {
  id: number;
  name: string;
  email: string;
}

export interface AppStore {
  user: UserInfo;
}

export interface Action {
  payload: UserInfo;
  type: string;
}

export const initialState: UserInfo = {
  id: 0,
  name: "",
  email: "",
};
