<script>
  //@ts-nocheck
  import recipes from '$lib/recipes.json';
  import '../../../app.css';
  export let data

  let recipe = recipes.filter(x => x.id.toString() == data.data)[0];
  
  function getContentType(type){
    let textTypes = ['b', 'it', 'itb'];
    if(type.match(/\-/g) != null && type.match(/\-/g).length > 1){
      return{
        mainTypeName: type.includes("-") ? type.slice(0,type.indexOf("-")) : type.slice(0,type.length+1),
        typeName: type.slice(type.indexOf("-")+1, type.lastIndexOf("-")),
        typeFormat: textTypes[textTypes.indexOf(type.slice(type.lastIndexOf("-")+1))]
      }
    } else {
      return{
        mainTypeName: type.includes("-") ? type.slice(0,type.indexOf("-")) : type.slice(0,type.length),
        typeName: type.includes("-") ? type.slice(type.indexOf("-")+1,type.length) : type.slice(0,type.length+1),
      }
    }
  }
</script>

<svelte:head>
  <title>{recipe == null ? "Hiba" : recipe.title} - Neumann Receptek</title>
</svelte:head>
{#if recipe != null}
  <div class="flex md:flex-row flex-col md:items-center gap-4">
    <a href="../recipes">Vissza</a>
    <h1 class="b">{recipe.title}</h1>
  </div>
  {#each recipe.content as r}
    {#if getContentType(r.type).mainTypeName == "text"}
      {#if getContentType(r.type).typeName == "xxl"}
        <h1 class={getContentType(r.type).typeFormat}>{r.content}</h1>
        {:else if getContentType(r.type).typeName == "xl"}
        <h2 class={getContentType(r.type).typeFormat}>{r.content}</h2>
        {:else if getContentType(r.type).typeName == "lg"}
        <h3 class={getContentType(r.type).typeFormat}>{r.content}</h3>
        {:else if getContentType(r.type).typeName == "md"}
        <h4 class={getContentType(r.type).typeFormat}>{r.content}</h4>
        {:else if getContentType(r.type).typeName == "sm"}
        <p class={getContentType(r.type).typeFormat}>{r.content}</p>
      {/if}
      {:else if getContentType(r.type).mainTypeName == "img"}
      <img src={r.content} alt={r.content}>
        {#if r.content.includes("http")}
          <p class="img-src">Fénykép forrása: <a href={r.content.slice(0, r.content.indexOf("/", 8))}>{r.content.slice(0, r.content.indexOf("/", 8))}</a></p>
        {/if}
      {:else if getContentType(r.type).mainTypeName == "bullet"}
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
  {:else}
  <h1 class="b">A recept nem létezik!</h1>
  <a href="../recipes">Vissza</a>
{/if}

<style lang="postcss">
  @tailwind components;

  @layer components{
    .b, .itb{
      @apply font-bold;
    }

    .it, .itb{
      @apply italic;
    }

    .img-src{
      @apply md:text-base text-xs mt-[-1em];
    }

    a:hover{
      @apply underline
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