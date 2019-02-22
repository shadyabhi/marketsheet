<template>
  <!-- Spinner -->
  <div class="ui row spinner">
    <div class="ui center aligned grid">
      <atom-spinner
        :animation-duration="1000"
        :size="100"
        color="#1d61ff"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["isLoading"]
};
</script>

<style>
.spinner {
  margin: 10em;
}
</style>
