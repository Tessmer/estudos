<template>
  <div>
    <h1>Curso ativo: {{ course }}</h1>
    <router-link :to="{ name: 'course', params: { course: 'javascript' } }"
      >JavaScript</router-link
    >
    <router-link :to="{ name: 'course', params: { course: 'html' } }"
      >HTML</router-link
    >
    <router-link :to="{ name: 'course', params: { course: 'css' } }"
      >CSS</router-link
    >
    <transition mode="out-in">
      <router-view :key="course"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["course"],
};
</script>

<style></style>
