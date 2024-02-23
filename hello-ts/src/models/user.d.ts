export interface User {
  id: string; // GUID from UUI generator in the DB
  name: string;
  surname: string;
  age: number;
  email: string;
}

type NewUser = Omit<User, 'id'>;

interface Article {
  author: User;
  body: string;
  created: Date;
  comments: string[];
}

export type UserWithArticles = User & { articles: Article[] };
