<template>
  <div class="wrapper" :class="{'error':error}">
    <input type="text"
           :value="value"
           :disabled="disabled"
           :readonly="readonly"
           @change="$emit('change',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @input="$emit('input',$event.target.value)"
           @blur="$emit('blur',$event.target.value)"
    >
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>
<script>
import Icon from './icon'

export default {
  //这个name其实是用来调试的
  name: 'GuluInput',
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  components: {
    Icon
  }
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, .5);
$red: #F1453D;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  >*{
    margin-right: .5em;
    &:last-child{
      margin-right: 0;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }

  .icon-error {
    fill: $red;
  }

  .errorMessage {
    color: $red;
  }

  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    outline: none;
    font-size: inherit;

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }

    &[disabled], &[readonly] {
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
  }
}
</style>
