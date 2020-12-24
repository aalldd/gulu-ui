<template>
  <div class="g-button-group"><slot></slot></div>
</template>
<script>
  export default {
    mounted() {
      for(let node of this.$el.children){
        let name=node.nodeName.toLowerCase()
        if(name!=='button'){
          console.warn(`g-button-group的子元素应该全是g-button,但你写的是${name}`)
        }
      }
    }
  }
</script>
<style lang="scss">
.g-button-group{
  display: inline-flex;
  .g-button{
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px;
    }
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
