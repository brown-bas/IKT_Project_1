<script>
  import recipes from '$lib/recipes.json';

  let bgOptions = []
  while(bgOptions.length == 0){
    recipes.filter(x=>!x.hidden || x.hidden == undefined)[Math.floor(Math.random() * recipes.filter(x=>!x.hidden || x.hidden == undefined).length)].content.filter(y=>{if(y && y.type=="img") bgOptions.push(y.content)})
  }
  console.log(bgOptions);
</script>
<svelte:head>
  <title>Főoldal - Neumann Receptek</title>
</svelte:head>

<div class="text-container" style="background-image: url('{bgOptions[Math.floor(Math.random() * bgOptions.length)]}');">
  <h1>Neumann Receptek</h1>
  <p>Ezen a weboldalon összegyűjtöttem a kedvenc receptjeimet, amiket a <a href="./recipes">Receptek</a> menüpontra kattintva lehet elérni.</p>
</div>

<style lang="postcss">
  @import '../app.css';

  @layer base{
    h1{
      @apply md:text-7xl text-5xl font-bold;
    }

    .text-container{
      @apply flex flex-col gap-8 h-[65vh] md:items-start justify-center items-center rounded-lg p-6 md:p-12 bg-center bg-no-repeat bg-cover bg-neutral-500 text-neutral-100 bg-blend-soft-light;
    }

    a{
      @apply hover:underline md:hover:no-underline md:bg-lime-300 md:hover:bg-lime-200 md:p-2 md:rounded-md md:transition-all md:text-black;
    }
  }
</style>