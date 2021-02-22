import { Photo } from "./photo";

export interface Member {
  id: number;
  username: string;
  photoUrl: string;
  age: number;
  knownAs: string;
  created: Date;
  lastActive: Date;
  city: string;
  photos: Photo[];
  }
  