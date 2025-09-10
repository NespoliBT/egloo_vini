<script lang="ts">
  export let className = "";
  export let restProps = {};
</script>

<h1 class={className} {...restProps}><slot /></h1>

<style lang="scss">
  @use "title.scss";
</style>
