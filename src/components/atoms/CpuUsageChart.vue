<template>
    <chart :data="data" :options="options"/>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator"
	import Chart from "@/components/atoms/Chart.vue";

	@Component({
		components: {Chart}
	})
	export default class CpuUsageChart extends Vue {
		@Prop({required: true})
		usages!: number[]

		public data: Chart.ChartData = {
			labels: [60, 50, 40, 30, 20, 10, 0],
			datasets: [
				{
					type: "line",
					label: "CPU使用率",
					data: this.usages,
					fill: true,
					borderColor: "#AAFFAA"
				}
			]
		}

		public options: Chart.ChartOptions = {
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
			}
		};
	}
</script>

<style scoped>

</style>
