<svelte:head>
  <title>Főoldal - Neumann Receptek</title>
</svelte:head>
<div class="text-container">
  <h1>Neumann Receptek</h1>
  <p>Ezen a weboldalon összegyűjtöttem a kedvenc receptjeimet, amiket a <a href="./recipes">Receptek</a> menüpontra kattintva lehet elérni</p>
</div>

<style lang="postcss">
  @import '../app.css';

  @layer base{
    :global(body){
      @apply bg-center bg-cover bg-no-repeat bg-landing bg-blend-soft-light;
    }

    h1{
      @apply md:text-7xl text-5xl font-bold;
    }

    .text-container{
      @apply flex flex-col gap-4 h-[50vh] md:items-start justify-center items-center;
    }

    a{
      @apply hover:underline md:hover:no-underline md:bg-lime-300 md:hover:bg-lime-200 md:p-2 md:rounded-md md:transition-all;
    }
  }
</style>