<template>
    <button @click="$emit('click')" class="g-button" :class="{[`icon-${iconPosition}`]:true}">
      <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
      <g-icon class="loading icon" name="loading" v-if="loading"></g-icon>
      <div class="content">
        <slot></slot>
      </div>
    </button>
</template>
<script>
import Icon from './icon'
export default {
  name:'GuluButton',
  components:{
     'g-icon':Icon
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      //属性的检查器
      validate(value) {
        return !(value !== 'left' || value !== 'right');
      }
    },
    loading:{
      type:Boolean,
      default:false
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes spin {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.g-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-raidus);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: var(--button-height);
  //不对齐就加这个
  vertical-align: top;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: .1em;
    margin-left: 0;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }

    > .content {
      order: 1;
    }

  }
  .loading{
    animation: spin 1s infinite linear;
  }
}
</style>
