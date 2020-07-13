<template>
    <v-card outlined>
        <slot />
    </v-card>
</template>

<script lang="ts">
	import {Component, Vue} from "vue-property-decorator";

	@Component
    export default class Panel extends Vue {

    }
</script>

<style scoped>

</style>
