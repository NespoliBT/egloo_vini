<script lang="ts">
  import Nav from "$lib/components/Nav/Nav.svelte";
  import Title from "$lib/components/Title/Title.svelte";
  import Events from "$lib/components/Events/Events.svelte";
</script>

<div class="main">
  <Nav />
  <div class="content">
    <Title className="center big">
      Prenota subito l'esperienza più adatta a te!
    </Title>
    <Title className="center small">
      Ti aspettiamo per farti scoprire il mondo, raccontato dai nostri vini e
      dalla nostra storia.
    </Title>

    <Events />
  </div>
</div>

<style lang="scss">
  @use "$lib/styles/app.scss";
</style>
