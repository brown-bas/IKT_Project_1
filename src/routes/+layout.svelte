<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header/>
<div class="component">
  <slot/>
</div>
<Footer/>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;800&display=swap');
  @import '../app.css';

  @layer base{
    :global(html){
      @apply scroll-smooth
    }

    :global(body){
      @apply m-0 bg-neutral-200 font-mukta overflow-x-hidden
    }
    
    :global(::selection){
      @apply bg-lime-200 text-black;
    }

    :global(::-webkit-scrollbar){
      @apply bg-neutral-300;
    }

    :global(::-webkit-scrollbar-thumb){
      @apply bg-neutral-400 rounded-lg;
    }

    .component{
      @apply md:w-2/3 flex flex-col m-auto p-12 md:pt-32 pt-40 gap-5 md:min-h-[calc(100vh-4rem)] min-h-[calc(100vh-8rem)];
    }
  }

  :global(img){
    pointer-events: none;
    -webkit-user-drag: none;
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
  }
</style>