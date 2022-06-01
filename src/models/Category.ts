interface Icategory {
  id: String;
  name: String;
  description: String;
  created_at: Date;
}
export default class Category {
  id: String;
  name: String;
  description: String;
  created_at: Date;
  constructor(category: Icategory) {
    this.id = category.id;
    this.name = category.name;
    this.description = category.description;
    this.created_at = category.created_at;
  }
}
