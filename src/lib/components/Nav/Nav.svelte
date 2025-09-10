<script lang="ts">
  import menu from "$lib/data/menu";
  import NavButtons from "$lib/components/NavButtons/NavButtons.svelte";
  import { fly } from "svelte/transition";

  let mobileMenuOpen = false;
</script>

<nav class="desktop">
  <ul class="left">
    <NavButtons menu={menu.left} />
  </ul>

  <div class="center">
    <img class="logo" src="assets/logo.png" alt="" />
  </div>

  <ul class="right">
    <NavButtons menu={menu.right} />
  </ul>
</nav>
{#if mobileMenuOpen}
  <nav class="mobile" transition:fly={{ y: -100, duration: 300 }}>
    <div class="top">
      <img class="logo" src="assets/logo.png" alt="" />
    </div>

    <ul class="mobileMenu">
      <NavButtons menu={[...menu.left, ...menu.right]} />
    </ul>
  </nav>
{/if}

<button
  class="mobileToggle"
  on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
>
  <div class="icon"></div>
</button>

<style lang="scss">
  @use "nav";
</style>
