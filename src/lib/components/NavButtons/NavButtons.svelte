<script lang="ts">
  import type { MenuItem } from "$lib/types/menu.ts";

  export let menu: MenuItem[] = [];
  let openMenus: boolean[] = [];
</script>

{#each menu as item, i}
  {#if item.subMenu}
    <li class={`navEl ${openMenus[i] ? "open" : ""}`}>
      <button class="label" on:click={() => (openMenus[i] = !openMenus[i])}>
        {#if item.icon}
          <div class="icon">{item.icon}</div>
        {/if}
        {item.label}
      </button>

      <span class="arrow"></span>

      {#if openMenus[i]}
        <ul class="subMenu">
          {#each item.subMenu as subItem}
            <li class="subMenuItem">
              <a class="label" href={subItem.link}>{subItem.label}</a>
            </li>
          {/each}
        </ul>
      {/if}
    </li>
  {:else}
    <li class="navEl">
      <a class="label" href={item.link}>{item.label}</a>
    </li>
  {/if}
{/each}

<style lang="scss">
  @use "navbuttons.scss";
</style>
