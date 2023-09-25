<script>
  import Header from '$lib/components/Header.svelte';
  import '../app.css';
</script>

<Header/>
<slot/>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;800&display=swap');

  :global(body){
    margin: 0;
    background-color: #ddd;
    font-family: 'Mukta', sans-serif;
  }
</style>