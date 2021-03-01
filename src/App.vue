<template>  
  <component :is="layout">
    <router-view/>
  </component>
</template>
<script>
import EmptyLayout from '@/layouts/EmptyLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

export default {
 computed: {
   layout() {
     return (this.$route.meta.layout || 'empty') + '-layout'
   }
 },
 components: {
   EmptyLayout, MainLayout
 }
}
</script>
<style>
#app {
  font-family: "Inter", sans-serif;
  color: #2c3e50;
  max-width: 1440px;
  margin: auto;
  /* border-radius: 14px; */
}
</style>
