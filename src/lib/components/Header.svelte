<header>
  <h1>Receptek</h1>
  <div id="links">
    <a href="/">Főoldal</a>
    <a href="/recipes">Receptek</a>
  </div>
</header>

<style lang="postcss">
  @import "../../app.css";

  @layer components{
    header{
      @apply w-screen px-16 h-16 bg-neutral-400 flex flex-row justify-between items-center
    }

    h1{
      @apply text-3xl;
    }

    #links{
      @apply flex flex-row gap-6
    }

    #links a{
      @apply text-lg hover:bg-neutral-500 p-2 rounded-md transition-all;
    }
  }
</style>