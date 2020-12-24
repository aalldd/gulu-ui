<template>
  <div class="g-button-group"><slot></slot></div>
</template>
<script></script>
<style lang="scss">
.g-button-group{
  display: inline-flex;
  .g-button{
    border-radius: 0;
    margin:0 -1px;
    &:first-child{
      border-top-left-radius: var(--border-raidus);
      border-bottom-left-radius: var(--border-raidus);
    }
    &:last-child{
      border-top-right-radius: var(--border-raidus);
      border-bottom-right-radius: var(--border-raidus);
    }
    &:hover{
      position: relative;
      z-index: 1;
    }
  }
}
</style>
