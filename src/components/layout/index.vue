<template>
    <layout>
        <template #home>
          <home></home>
        </template>
        <template #about>
          <about></about>
        </template>
    </layout>
</template>

<script>
    import Layout from './Layout.vue'
    import Home from '../../views/Home.vue'
    import About from "../../views/About.vue";

    export default {
        components: {About, Layout, Home}
    }
</script>

<style></style>
