<template>
    <v-container fluid class="gray lighten-5">
        <v-row>
            <v-col cols="12" sm="12" md="6">
                <panel>
                    <cpu-usage-chart :usages="usages"/>
                </panel>
            </v-col>
            <v-col cols="12" sm="12" md="6">
                <panel>b</panel>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
	import {Component, Prop, Vue, Watch} from "vue-property-decorator";
	import Panel from "@/components/atoms/Panel.vue";
	import Chart from "@/components/atoms/Chart.vue";
	import CpuUsageChart from "@/components/atoms/CpuUsageChart.vue";
	import {Stack} from "stack-typescript";

	@Component({
		components: {CpuUsageChart, Chart, Panel}
	})
	export default class DashBoard extends Vue {
		@Prop({required: true})
		public usage!: number

        public usagesStack = new Stack<number>(20, 15, 30, 80, 100, 20, 0)

		public get usages(): number[] {
			return this.usagesStack.toArray()
		}

		@Watch("usage")
		updateUsage() {
			if(this.usagesStack.size > 7) {
				this.usages.pop()
			}
			this.usages.push(this.usage)
		}
	}
</script>

<style scoped>

</style>
