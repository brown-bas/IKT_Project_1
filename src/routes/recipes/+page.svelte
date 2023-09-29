<script>
  //@ts-nocheck
  import recipes from '$lib/recipes.json';
</script>

<div class="recipeContainer">
  {#each recipes as recipe}
    <a class="recipe" href="recipes/{recipe.id}">
      {#if recipe.cover}
          <div class="coverImg" style={`background-image: url(${recipe.cover})`}/>
        {:else if recipe.content.filter(x => x.type == "img").length > 0}
          <div class="coverImg" style={`background-image: url(${recipe.content.filter(x => x.type == "img")[0].content})`}/>
        {:else}
          <div class="coverImg" style="background-image: url(./favicon.png)"/>
      {/if}
      <h2>{recipe.title}</h2>
    </a>
  {/each}
</div>

<style lang="postcss">
  @import '../../app.css';

  @layer components{
    .recipeContainer{
      @apply flex md:flex-row flex-col gap-6 items-center;
    }

    .recipe{
      @apply hover:translate-y-[-.25rem] transition-all rounded-lg p-8 bg-white w-72 h-max flex flex-col gap-5;
    }

    .recipe .coverImg{
      @apply w-full h-32 rounded-lg bg-cover bg-no-repeat bg-center;
    }

    .recipe h2{
      @apply font-bold text-3xl md:text-2xl md:text-start text-center w-full;
    }
  }
</style>