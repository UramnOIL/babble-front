<template>
    <v-app-bar app color="blue-grey" :clipped-left="$vuetify.breakpoint.lgAndUp">
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">BABBLE</v-toolbar-title>

        <v-spacer/>

        <v-btn icon>
            <v-icon>fas fa-cog</v-icon>
        </v-btn>

    </v-app-bar>
</template>

<script lang="ts">
	import {Component, Vue} from "vue-property-decorator";

	@Component
	export default class Header extends Vue {
	}
</script>
<style scoped>

</style>
