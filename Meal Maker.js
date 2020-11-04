const menu = {
    _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
      return this._courses.appetizers
  },
  set appetizers(appetizers) {
      this._courses.appetizers.push(appetizers)
  },
  get mains() {
      return this._courses.mains
  },
  set mains(mains) {
      this._courses.mains.push(mains)
  },
  get desserts() {
      return this._courses.desserts
  },
  set desserts(desserts) {
      this._courses.desserts.push(desserts)
  },
  get courses() {
      return {
          appetizers: this.appetizers,
          mains: this.mains,
          desserts: this.desserts
      }; 
  },
    addDishToCourse: function (courseName,dishName,dishPrice) {
      let dish = {name: dishName, price: dishPrice}
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse: function(courseName){
      let dishes = this._courses[courseName];
      let randomSelector = Math.floor(Math.random()*dishes.length);
      return dishes[randomSelector];
    
    },
    generateRandomMeal: function() {
      let appetizer = this.getRandomDishFromCourse('appetizers')
      let main = this.getRandomDishFromCourse('mains')
      let dessert = this.getRandomDishFromCourse('desserts')
      let totalPrice = appetizer.price + main.price + dessert.price
      return `Your meal will begin with the ${appetizer.name} to be followed by the ${main.name} and finished with the ${dessert.name}.  The total bill will be $${totalPrice}`
    },
  };
  
  menu.addDishToCourse('appetizers','Salad', 9);
  menu.addDishToCourse('appetizers','Soup', 7);
  menu.addDishToCourse('appetizers','Snack Plate', 12);
  menu.addDishToCourse('mains','Duck',30);
  menu.addDishToCourse('mains','Eggplant Parm', 22);
  menu.addDishToCourse('mains','Roast Lamb', 35);
  menu.addDishToCourse('desserts','Cake', 10);
  menu.addDishToCourse('desserts','Pie', 9);
  menu.addDishToCourse('desserts','Ice Cream', 7);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);