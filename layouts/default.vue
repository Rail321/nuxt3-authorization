<template>
  <div class="app-layout">
    <div class="ui-min-h-100-vh ui-d-flex ui-flex-column">
      <div>
        <AppNavigation />
      </div>

      <div class="app-layout__page ui-flex-grow-1 ui-d-flex ui-flex-column">
        <div class="app-layout-page-content app-layout-page__content ui-flex-grow-1">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .app-layout {
    background-color: #D3D3D3;
  }
  .app-layout__page {
    padding: 10px 15px;
  }
  .app-layout-page-content {
    background-color: #FFFFFF;
    border-radius: 10px;
  }
  .app-layout-page__content {
    padding: 10px 15px;
  }
</style>