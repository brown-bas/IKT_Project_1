<script>
  import Header from '$lib/components/Header.svelte';
</script>

<Header/>
<div class="component">
  <slot/>
</div>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;800&display=swap');
  @import '../app.css';

  @layer base{
    :global(body){
      @apply m-0 bg-neutral-200 font-mukta
    }

    .component{
      @apply md:w-2/3 flex flex-col m-auto p-12 md:pt-32 pt-40 gap-5;
    }
  }
</style>