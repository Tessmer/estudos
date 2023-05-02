<template>
  <div>
    <h1>{{ course }}</h1>
    <router-link :to="{ name: 'description' }">Descrição</router-link>
    <router-link :to="{ name: 'classes' }">Aulas</router-link>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["course"],
  created() {},
  beforeRouteUpdate(to, from, next) {
    next();
  },
};
</script>

<style></style>
