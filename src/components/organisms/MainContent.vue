<template>
    <v-main>
        <slot/>
    </v-main>
</template>

<script lang="ts">
	import {Component, Vue} from "vue-property-decorator";

	@Component
	export default class MainContent extends Vue {

	}
</script>

<style scoped>

</style>
