<template>
    <v-card outlined class="screen">
        <v-virtual-scroll
                :items="lines"
                :item-height="18"
                height="80vh"
        >
            <template v-slot="{ item }">
                <span class="lines" v-html="item"/>
            </template>
        </v-virtual-scroll>
    </v-card>
</template>

<script lang="ts">
	import {Component, Prop, Vue, Watch} from "vue-property-decorator";

	@Component
	export default class ConsoleScreen extends Vue {
		@Prop({required: true})
		private lines!: string[]
	}
</script>

<style scoped>
    .lines {
        white-space: pre;
        color: white;
    }

    .screen {
        background-color: darkslategrey;
    }
</style>
