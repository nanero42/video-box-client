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
