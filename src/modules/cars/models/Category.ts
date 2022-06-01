interface ICategory {
  id: string;
  name: string;
  description: string;
  created_at: Date;
}
export default class Category {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  constructor(category: ICategory) {
    this.id = category.id;
    this.name = category.name;
    this.description = category.description;
    this.created_at = category.created_at;
  }
}
