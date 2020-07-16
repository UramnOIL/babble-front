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
	export default class PlayersChart extends Vue {
		@Prop({required: true})
		players!: number[]

		public data: ChartData = {
			labels: [120, 105, 90, 75, 60, 45, 30, 15],
			datasets: [
				{
					type: "line",
					label: "Players",
					lineTension: 0,
					data: this.players,
					fill: true,
					borderColor: "#1F74D1"
				}
			]
		}

		public options: ChartOptions = {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display: false
			},
			title: {
				display: true,
				fontSize: 18,
				text: "Players"
			},
			scales: {
				yAxes: [{
					ticks: {
						suggestedMax: 50,
						suggestedMin: 0,
						stepSize: 5,
						callback: function (value: number) {
							return value + "人"
						}
					}
				}],
				xAxes: [{
					ticks: {
						callback: function (value: number) {
							return value + "分前"
						}
					}
				}]
			},
		};
	}
</script>

<style scoped>

</style>
