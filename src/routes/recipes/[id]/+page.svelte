<script>
  //@ts-nocheck
  import recipes from '$lib/recipes.json';
  import '../../../app.css';
  export let data

  const textTypes = ['b', 'it', 'itb'];
  let recipe = recipes.filter(x => x.id.toString() == data.data)[0];
</script>

<div class="component">
  <h1 class="b">{recipe.title}</h1>
  {#each recipe.content as r}
    {#if r.type.slice(0,4) == "text"}
      {#if r.type.slice(5).includes("xxl")}
        <h1 class={textTypes[textTypes.indexOf(r.type.slice(r.type.lastIndexOf("-")+1))]}>{r.content}</h1>
        {:else if r.type.slice(5).includes("xl")}
        <h2 class={textTypes[textTypes.indexOf(r.type.slice(r.type.lastIndexOf("-")+1))]}>{r.content}</h2>
        {:else if r.type.slice(5).includes("lg")}
        <h3 class={textTypes[textTypes.indexOf(r.type.slice(r.type.lastIndexOf("-")+1))]}>{r.content}</h3>
        {:else if r.type.slice(5).includes("md")}
        <h4 class={textTypes[textTypes.indexOf(r.type.slice(r.type.lastIndexOf("-")+1))]}>{r.content}</h4>
        {:else if r.type.slice(5).includes("sm")}
        <p class={textTypes[textTypes.indexOf(r.type.slice(r.type.lastIndexOf("-")+1))]}>{r.content}</p>
      {/if}
      {:else if r.type.slice(0,3) == "img"}
      <img src={r.content} alt={r.content}>
      {:else if r.type.slice(0,6) == "bullet"}
      <ul>
        {#each r.content as point}
          <li>{point}</li>
        {/each}
      </ul>
      {:else if r.type.slice(0,8) == "numbered"}
      <ol>
        {#each r.content as point}
          <li>{point}</li>
        {/each}
      </ol>
    {/if}
  {/each}
</div>

<style lang="postcss">
  @tailwind components;
  @layer components{
    .component{
      @apply md:w-2/3 flex flex-col m-auto p-12 md:pt-32 pt-40 gap-5;
    }

    .b, .itb{
      @apply font-bold;
    }

    .it, .itb{
      @apply italic;
    }

    h1{
      @apply text-5xl;
    }

    h2{
      @apply text-3xl;
    }

    h3{
      @apply text-2xl;
    }

    h4{
      @apply text-xl;
    }

    p, ul li, ol li{
      @apply text-lg;
    }

    ul li{
      @apply list-item list-disc ml-10
    }

    ol li{
      @apply list-item list-decimal ml-10
    }

    img{
      @apply rounded-lg
    }
  }
</style>