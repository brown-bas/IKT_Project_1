<header>
  <h1>Neumann Receptek</h1>
  <div id="links">
    <a href="/">Főoldal</a>
    <a href="/recipes">Receptek</a>
  </div>
</header>

<style lang="postcss">
  @import "../../app.css";

  @layer components{
    header{
      @apply w-screen px-16 md:h-16 h-32 bg-lime-300 gap-4 flex md:flex-row flex-col md:justify-between justify-center items-center fixed
    }

    h1{
      @apply text-3xl;
    }

    #links{
      @apply flex flex-row gap-6
    }

    #links a{
      @apply text-lg hover:bg-white hover:bg-opacity-50 p-2 rounded-md transition-all;
    }
  }
</style>