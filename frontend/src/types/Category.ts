export interface Category {
  id: number;
  name: string;
  children?: [{ id: number; name: string }];
}
