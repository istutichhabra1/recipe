const addrecipeform = document.getElementById('add-recipe-form');
const recipeContainer= document.getElementById('recipe-container');
addrecipeform.addEventListener('submit',(event) => {
    event.preventDefault();
    const recipename = document.getElementById('recipe-name').value.trim();
    const ingredients = document.getElementById('ingredients').value.trim();
    const category = document.getElementById('category').value.trim();
    const preparationstep = document.getElementById('preparation-steps').value.trim();
    if(!recipename || !ingredients || !preparationstep){
        alert('please fill in all required fields');
        return;



    }
    const newrecipe = {
        name : recipename,
        ingredients: ingredients.split('\n'),
        category:category,
        preparationsteps:preparationstep

    };
    displayrecipe(newrecipe);
    addrecipeform.reset();



});
function displayrecipe(recipe){
    const recipecard = document.getElementById('div');
    recipecard.classList.add('recipe-card');
    recipecard.innerHTML ` = <h2>${recipe.name}</h2>
    <p><strong>category:</strong>${recipe.category}</p>
    <h3>ingredients</h3>
    <ul>
        ${recipe.ingredients.map(ingredients =>` <li>${ingredients}</li>`).join('')}
    </ul>
    <h3>ingredients:</h3>
    <ul>
        ${recipe.ingredients.map(ingredients=>` <li>${ingredients}</li>`).join('')}
    </ul>
    <h3>prepartionsteps:</h3>
    <p>${recipe.preparationstep}</p> `;
    
    

}
const filtercategory = document.getElementById('filter-category');
filtercategory.addEventListener('change',filtercategory);
function filtercategory(){
    const selectedcategory = filtercategory.value ;
    const filtercategory= selectedcategory === 'all'
    ?savedrecipes
    :savedrecipes.filter(recipe=>recipe.category===selectedcategory);
    recipeContainer.innerHTML='';
    filterrecipes.foreach(displayrecipe);
}

