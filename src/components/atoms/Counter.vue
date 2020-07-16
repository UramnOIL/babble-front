<template>
    <v-card :color="color" class="white--text">
        <v-card-title>{{title}}</v-card-title>
        <v-layout justify-center class="wrap" align-center><p>{{unit(count)}}</p></v-layout>
    </v-card>
</template>

<script lang="ts">
	import {Component, Prop, Vue} from "vue-property-decorator";
	import Panel from "./Panel.vue";
	@Component({
		components: {Panel}
	})
    export default class Counter extends Vue {
		@Prop()
        public color!: string

        @Prop()
        public title!: string

        @Prop()
        public count!: number

        @Prop({default: (count: number) => count})
        public unit!: (count: number) => string
	}
</script>

<style scoped>
    .wrap {
        font-size: 96px;
        height: 300px;
    }
</style>
