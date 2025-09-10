<script lang="ts">
  import { events, hero } from "$lib/data/events";
  import EventCard from "$lib/components/EventCard/EventCard.svelte";
</script>

<div class="events">
  {#each events as event}
    <EventCard {event} />
  {/each}
</div>

<EventCard event={hero} isHero={true} />

<style lang="scss">
  @use "events.scss";
</style>
