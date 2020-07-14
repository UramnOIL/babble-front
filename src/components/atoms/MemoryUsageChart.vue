<template>
    <chart :chart-data="data" :chart-options="options"/>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator"
	import Chart from "@/components/atoms/Chart.vue";
	import {ChartData, ChartOptions} from "chart.js";

	@Component({
		components: {Chart}
	})
	export default class MemoryUsageChart extends Vue {
		@Prop({required: true})
		usages!: number[]

		public data: ChartData = {
			labels: [60, 50, 40, 30, 20, 10, 0],
			datasets: [
				{
					type: "line",
					label: "Memory Usage",
                    lineTension: 0,
					data: this.usages,
					fill: true,
					borderColor: "#27C4C4"
				}
			]
		}

		public options: ChartOptions = {
			responsive: true,
			maintainAspectRatio: false,
			title: {
				display: true,
				fontSize: 18,
				text: "Memory Usage"
			},
			scales: {
				yAxes: [{
					ticks: {
						suggestedMax: 100,
						suggestedMin: 0,
						stepSize: 10,
						callback: function (value) {
							return value + "%"
						}
					}
				}],
				xAxes: [{
					ticks: {
						callback: function (value) {
							return value + "秒前"
						}
					}
				}]
			},
		};
	}
</script>

<style scoped>

</style>
