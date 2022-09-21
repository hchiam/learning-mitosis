<template>
  <div>
    {{ message || "Hello" }} {{ name }}! I can run in React, Vue, Solid or
    Svelte!
  </div>
</template>

<script>
export default {
  name: "my-basic-component",

  props: ["message"],

  data: () => ({ name: "Foo" }),
};
</script>
