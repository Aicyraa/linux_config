let recipeOBJ = []
function SetRecipe(id, type, dish, time, madeBy, recipe) {
  this.id = id;
  this.type = type;
  this.dishName = dish;
  this.cookingTime = time;
  this.madeBy = madeBy;
  this.recipes = structuredClone(recipe);
  recipeOBJ.push(this)
}

const recipes = [
  {
    condiments: [
      { condiment: "asdasd", details: "1/2 spoon" },
      { condiment: "Suka", details: "1/2 spoon" },
    ],
    ingriedients: [
      {
        ingriedient: "Measdat",
        details: "Cut Cut",
      },
      {
        ingriedient: "Meat",
        details: "Cut Cut",
      },
    ],
  },
];

 new SetRecipe(1, "Frie", "Creamy Steak", "10mins", "aali", recipes);
 new SetRecipe(2, "Fried", "Creamy Steak", "10mins", "aali", recipes);

console.log(recipeOBJ[0].recipes[0].ingriedients);

