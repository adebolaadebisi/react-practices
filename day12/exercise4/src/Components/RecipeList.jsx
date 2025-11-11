import RecipeItem from "./RecipeItem";

const recipes = ["Jollof Rice", "Egusi Soup", "Suya", "Pounded Yam", "Moi Moi", "Pepper Soup"];

const RecipeList = () => {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
