<script lang="ts">
  import menu from "$lib/data/menu";
  import NavButtons from "$lib/components/NavButtons/NavButtons.svelte";
</script>

<nav>
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

<style lang="scss">
  @use "nav";
</style>
