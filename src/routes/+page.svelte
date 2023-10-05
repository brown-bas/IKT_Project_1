<svelte:head>
  <title>Főoldal - Neumann Receptek</title>
</svelte:head>
<div class="text-container">
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
      @apply flex flex-col gap-8 h-[65vh] md:items-start justify-center items-center rounded-lg p-6 md:p-12 bg-landing bg-center bg-no-repeat bg-cover bg-neutral-500 text-neutral-100 bg-blend-soft-light;
    }

    a{
      @apply hover:underline md:hover:no-underline md:bg-lime-300 md:hover:bg-lime-200 md:p-2 md:rounded-md md:transition-all md:text-black;
    }
  }
</style>