<template>
  <span :style="stylesBtn"></span>
  <span :style="styleSlot">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    bgColor: { type: String, default: 'black' },
    height: { type: Number, default: 30 },
    width: { type: Number, default: 30 },
    icon: { type: String },
  },
  computed: {
    stylesBtn() {
      return {
        display: 'inline-block',
        'vertical-align': 'middle',
        height: `${this.height}px`,
        width: `${this.width}px`,
        'padding': '1px',
        "background-color": this.bgColor,
        'mask-image': "url(" + require(`../../assets/${this.icon}.svg`) + ")",
        'mask-size': '95%',
        'mask-repeat': 'no-repeat',
        'mask-position': 'center',
        'mask-composite': 'add',
      };
    },
    styleSlot() {
      return {
        display: 'inline-block',
        'vertical-align': 'middle',
        width: 'auto',
        'margin-left': '10px'
      }
    }
  }
};
</script>
