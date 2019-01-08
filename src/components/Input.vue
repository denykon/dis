<template>
    <input :value="value" @input="updateText"/>
</template>

<script>
  export default {
    name: 'VInput',
    props: ['value'],
    methods: {
      updateText (e) {
        //Validation
        let value = e.target.value;
        // if (!/^\d+$/.test(value)) {
        //   value = '';
        // }
        this.$emit('input', value);
      }
    }
  }
</script>

<style lang="less" scoped>
    input {
        display: block;
        width: 100%;
        padding: .375rem .75rem;
        margin: 1rem 0;
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: white;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    }
</style>