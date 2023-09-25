<script>
  import recipes from '$lib/recipes.json';
</script>

{#each recipes as recipe}
  <a href="recipes/{recipe.id}">{recipe.title}</a>
{/each}