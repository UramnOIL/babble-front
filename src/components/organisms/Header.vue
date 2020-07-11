<template>
    <v-toolbar dense app>

        <v-toolbar-title>Babble</v-toolbar-title>

        <v-spacer/>

        <v-btn icon>
            <v-icon>fas fa-cog</v-icon>
        </v-btn>

    </v-toolbar>
</template>

<script lang="ts">
	import {Component, Vue} from "vue-property-decorator";

	@Component
	export default class Header extends Vue {
	}
</script>
<style scoped>

</style>
