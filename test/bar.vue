<template>
  <input v-model="bar" id="foo" />
</template>

<script lang="ts">
const foobar: any = ""

export default {
  name: 'foo',

  data: () => ({
    bar: ''
  }),
}
</script>
