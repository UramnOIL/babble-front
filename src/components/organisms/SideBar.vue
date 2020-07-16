<template>
    <v-navigation-drawer app :permanent="true" :clipped="$vuetify.breakpoint.lgAndUp">
        <slot />
    </v-navigation-drawer>
</template>

<script lang="ts">
	import {Component, Emit, Prop, Vue} from "vue-property-decorator";
	import ListItem from "@/components/atoms/ListItem.vue";

	@Component({
		components: {
			ListItem
		}
	})
	export default class SideBar extends Vue {
	}
</script>

<style scoped>

</style>
