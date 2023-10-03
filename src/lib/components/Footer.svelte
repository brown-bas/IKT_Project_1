<script>
  export let scrollTopBtn = true
</script>

<footer>
  <p>Made with ❤ at NJIT © 2023</p>
  {#if scrollTopBtn}
    <button on:click={() => window.scrollTo(0,0)}>Vissza a tetejére</button>
  {/if}
</footer>

<style lang="postcss">
  @import "../../app.css";

  @layer components{
    footer{
      @apply w-screen px-16 md:h-16 h-32 bg-lime-200 gap-4 flex md:flex-row flex-col md:justify-between justify-center items-center relative z-50
    }

    h1{
      @apply text-3xl md:text-start md:w-max w-full text-center;
    }

    button{
      @apply hover:underline
    }
  }
</style>