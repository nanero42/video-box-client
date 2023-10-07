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

export interface GridTab {
  id: number;
  icon: Icons;
  width?: string;
  height?: string;
  fillSvg?: string;
  fillPath?: string;
}
