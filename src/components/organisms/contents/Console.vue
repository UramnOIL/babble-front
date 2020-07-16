<template>
    <v-container>
        <ConsoleScreen :lines="lines" />
        <ConsoleInput @enter="onEnter" />
    </v-container>
</template>

<script lang="ts">
	import {Component, Vue, Prop, Emit} from "vue-property-decorator";
	import ConsoleScreen from "@/components/molecules/ConsoleScreen.vue";
	import ConsoleInput from "@/components/molecules/ConsoleInput.vue";

	@Component({
		components: {ConsoleInput, ConsoleScreen}
	})
	export default class Console extends Vue {
		@Prop({required: true})
		public lines!: string[]

		public onEnter(input: string) {
			this.send(input)
        }

        @Emit()
        public send(input: string) {
			return input
        }
	}
</script>

<style scoped>

</style>
