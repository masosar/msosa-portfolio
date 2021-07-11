<template>
  <div>
    <span><strong>Total: </strong>{{total}}</span>
  </div>
</template>
<script>
export default {
  props: {
    num1: Number,
    num2: Number
  },
  computed: {
    total() {
      return parseInt(this.num1) + parseInt(this.num2);
    }
  }
}
</script>