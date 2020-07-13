<template>
    <v-list-item @click="click">
        <v-list-item-icon>
            <v-icon><slot name="icon"/></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
            <v-list-item-title><slot name="title"/></v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script lang="ts">
	import {Component, Emit, Vue} from "vue-property-decorator";

	@Component
    export default class ListItem extends Vue {
		@Emit()
		public click(e: MouseEvent | KeyboardEvent) {
			return this.$emit("click", e)
        }
	}
</script>

<style scoped>

</style>
