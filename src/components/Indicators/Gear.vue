<template>
  <div class="gear">
    <span class="gear__label">N</span>
  </div>
</template>

<script>

export default {
  name: 'IndicatorGear',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .gear__label {
      font-family: 'Digit';
      color: #0e0e0e;
      font-size: 2em;
    }
</style>
