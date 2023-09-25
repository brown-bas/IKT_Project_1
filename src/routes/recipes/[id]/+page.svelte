<script>
  import recipes from '$lib/recipes.json';
  export let data

  let recipe = recipes.filter(x => x.id.toString() == data.data)[0];
</script>

<h1>{recipe.title}</h1>