import {Component, Vue} from 'vue-property-decorator';
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ListItem from "@/components/atoms/ListItem.vue";
import DashBoard from "@/components/organisms/contents/DashBoard.vue";
import Console from "@/components/organisms/contents/Console.vue";
import Onlines from "@/components/organisms/contents/Onlines.vue";

type Item = {
	title: string;
	type: ContentIndex;
	icon: string;
}

const Content = {
	dashboard: {
		template: "<dash-board :cpuUsages='cpu-usages' :memoryUsages='memory-usages' :players='players'></dash-board>"
	},
	console: {
		template: "<console :players='players' @send='onSend'></console>"
	},
	onlines: {
		template: "<onlines></onlines>"
	},
}

type ContentIndex = keyof typeof Content

@Component({
	components: {
		DefaultLayout,
		ListItem,
		DashBoard,
		Console,
		Onlines,
	}
})

export default class Main extends Vue {
	private content = Content.dashboard
	private item = this.serverItems.findIndex((item) => item.type == this.content)

	public cpuUsages = [10, 15, 30, 30, 20, 10, 40, 10]
	public memoryUsages = [10, 15, 30, 30, 20, 10, 40, 10]
	public players = [10, 12, 15, 15, 13, 15, 18, 24, 25]

	public lines = ["<text style=color:#ff0000>a</text>", "b"]

	changeContent(index: ContentIndex) {
		if(this.content == Content[index]) return
		this.content = Content[index]
	}

	public onSend(input: string) {
		this.lines.push(input)
	}

	get serverItems(): Item[] {
		return [
			{title: "Dashboard", type: "dashboard", icon: "fas fa-chart-line"},
			{title: "Console", type: "console", icon: "fas fa-terminal"},
			{title: "Onlines", type: "onlines", icon: "fas fa-user"}
		]
	}
}
