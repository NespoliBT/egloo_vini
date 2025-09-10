<script lang="ts">
  import type { Event } from "$lib/types/events";
  export let event: Event;
  export let isHero: boolean = false;
</script>

<div class={`eventCard ${isHero ? "hero" : ""}`}>
  <div class="image">
    <img src={event.image} alt={event.title} />
    <p class="date">{new Date(event.date).toLocaleDateString()}</p>
  </div>
  <div class="info">
    <div class="top">
      {#if event.wine}
        <span class="icon wine"></span>
      {/if}
      {#if event.food}
        <span class="icon food">󰩰</span>
      {/if}
      {#if event.loto}
        <span class="icon loto">󰧲</span>
      {/if}
      <span class="duration">
        <span class="icon"></span>
        {event.duration}'
      </span>
    </div>

    <div class="bottom">
      <h2 class="title">{event.title}</h2>
      <p class="description">{event.description}</p>
      <div class="priceContainer">
        <p>PREZZO</p>
        <div class="price">
          <div class="label">€{event.price},00 a persona</div>
          <div class="tax">IVA INCLUSA</div>
        </div>
      </div>
    </div>
    <button class="details">Dettagli <span class="icon"></span></button>
  </div>
</div>

<style lang="scss">
  @use "eventCard.scss";
</style>
