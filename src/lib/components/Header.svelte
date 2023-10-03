<script>
  import Logo from '/logo.svg'
</script>

<header>
  <img src={Logo} alt="Logo" title="Neumann Receptek">
  <div id="links">
    <a href="/">Főoldal</a>
    <a href="/recipes">Receptek</a>
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
      @apply text-lg hover:bg-white hover:bg-opacity-50 p-2 rounded-md transition-all;
    }
  }
</style>