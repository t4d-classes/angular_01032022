import { ICurrentUser } from "./models/CurrentUser";

export interface UserLibState { 
  currentUser: ICurrentUser | null;
}