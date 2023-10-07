<script>
  import Logo from '/logo.svg'
  import HomeIcon from '/home.svg'
  import RecipesIcon from '/recipes.svg'
</script>

<header>
  <img src={Logo} alt="Logo" title="Neumann Receptek">
  <div id="links">
    <a href="/"><img src={HomeIcon} alt="Főoldal" title="Főoldal">Főoldal</a>
    <a href="/recipes"><img src={RecipesIcon} alt="Receptek" title="Receptek">Receptek</a>
  </div>
</header>

<style lang="postcss">
  @import "../../app.css";

  @layer components{
    header{
      @apply w-screen px-16 md:h-16 h-32 bg-lime-300 gap-4 flex md:flex-row flex-col md:justify-between justify-center items-center fixed z-50;
    }

    header img{
      @apply md:h-2/3 h-1/3;
    }

    h1{
      @apply text-3xl md:text-start md:w-max w-screen text-center;
    }

    #links{
      @apply flex flex-row gap-6;
    }

    #links a{
      @apply text-lg hover:bg-white hover:bg-opacity-50 p-2 rounded-md transition-all flex flex-row items-center justify-center gap-1;
    }

    #links a img{
      @apply h-6
    }
  }
</style>