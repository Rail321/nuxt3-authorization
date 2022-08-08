<template>
  <div class="loader" />
</template>

<style scoped>
  .loader {
    width: 40px;
    height: 40px;
    border: 5px solid cornflowerblue;
    border-top-color: transparent;
    border-radius: 50%;
    animation-name: spinning;
    animation-iteration-count: infinite;
    animation-duration: 1000ms;
    animation-timing-function: linear;
  }
  @keyframes spinning {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>