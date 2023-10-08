<script>
  //@ts-nocheck
  import recipes from '$lib/recipes.json';
  import '../../../app.css';
  import Back from '/back.svg';
  export let data;

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
    <a href="../recipes"><img src={Back} alt="Vissza" title="Vissza">Vissza</a>
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
      {:else if getContentType(r.type).mainTypeName == "numbered"}
      <ol>
        {#each r.content as point}
          <li>{point}</li>
        {/each}
      </ol>
      {:else if getContentType(r.type).mainTypeName == "link"}
      {#if isNaN(r.content[0])}
        <a href={r.content[1]}>{r.content[0]}</a>
        {:else if recipes.filter(x=>x.id == r.content[0]).length == 1}
        <a href="./{r.content[0]}" target="_blank">{recipes.filter(x=>x.id == r.content[0])[0].title}</a>
        {:else}
        <p class="it">A recept nem létezik vagy törölve lett.</p>
      {/if}
    {/if}
  {/each}
  {:else}
  <h1 class="b">Hiba!</h1>
  <h4>A recept nem létezik!</h4>
  <a href="../recipes">Vissza</a>
{/if}

<style lang="postcss">
  @import '../../../app.css';

  @layer components{
    h1, h2, h3, h4, h5, h6, p, a{
      @apply break-words hyphens-auto;
    }

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
      @apply md:text-4xl text-3xl;
    }

    h3{
      @apply md:text-3xl text-2xl;
    }

    h4{
      @apply md:text-2xl text-xl;
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

    a{
      @apply w-max flex flex-row gap-1
    }
  }
</style>