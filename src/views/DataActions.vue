<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p>{{ symbol }}</p>
      <div>{{ action }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["symbol"],
  data() {
    return {
      loading: true,
      action: null,
    };
  },
  methods: {
    pushAction() {
      this.loading = true;
      this.action = null;
      fetch(`https://api.origamid.dev/stock/${this.symbol}/quote`)
        .then((r) => r.json())
        .then((r) => {
          this.action = r;
          this.loading = false;
        });
    },
  },
  created() {
    this.pushAction();
  },
  watch: {
    $route: "pushAction",
  },
};
</script>

<style></style>
