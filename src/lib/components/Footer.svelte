<script>
  import Heart from '/heart.svg';
  import ScrollUp from '/scrollup.svg';
</script>

<footer>
  <p class="flex flex-row gap-1">Made with <img src={Heart} alt="love" title="love"> at NJIT © 2023</p>
  <button on:click={() => window.scrollTo(0,0)}><img src={ScrollUp} alt="Vissza a tetejére" title="Vissza a tetejére">Vissza a tetejére</button>
</footer>

<style lang="postcss">
  @import "../../app.css";

  @layer components{
    footer{
      @apply w-screen px-16 md:h-16 h-32 bg-lime-200 gap-4 flex md:flex-row flex-col md:justify-between justify-center items-center relative z-50;
    }

    h1{
      @apply text-3xl md:text-start md:w-max w-full text-center;
    }

    p{
      @apply md:text-start text-center w-full md:w-max md:justify-start justify-center;
    }

    button{
      @apply hover:underline flex flex-row gap-1;
    }
  }
</style>
