interface Person {
    name: string;
    id: number;
  }
   
  class User {
    name: string;
    id: number;
   
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }

module.exports = { User }