import { Icons } from "../enums";

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

export interface Author {
  id: string
  name: string
  pictureUrl: string
}
