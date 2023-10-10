import { Icons, ReactionType } from "../enums";

export interface Video {
  id: string;
  title: string;
  createdDate: Date;
  author: User;
  previewUrl: string;
}

export interface User {
  id: string;
  name: string;
  pictureUrl: string;
}

export interface TabStyle {
  iconName: Icons;
  width?: string;
  height?: string;
  fillSvg?: string;
  fillPath?: string;
}

export interface Video {
  id: string
  title: string
  description: string
  createdDate: Date
  author: Author
  url: string
  previewUrl: string
}

export interface Reaction {
  id?: string;
  videoId?: string;
  author?: Author;
  postedDate?: Date;
  createdDate?: Date;
  timeframe?: number;
  imageUrl?: string;
  type?: ReactionType;
  dataUri?: string;
}

export interface Author {
  id: string
  name: string
  pictureUrl: string
}

export interface videoTimeframe {
  videoTimeframe: number | null;
}
