<template>
    <default-layout>
        <template v-slot:sidebar>
            <v-divider/>
            <v-list>
                <v-list-item-group v-model="item" :mandatory="true">
                    <list-item v-for="item in serverItems" :key="item.type" @click="changeContent(item.type)">
                        <template #icon>{{item.icon}}</template>
                        <template #title>{{item.title}}</template>
                    </list-item>
                </v-list-item-group>
            </v-list>
        </template>
        <template v-slot:main>
            <dashboard v-if="content === 'dashboard'"
                       :cpu-usages="cpuUsages"
                       :memory-usages="memoryUsages"
                       :participants-count-so-far="participantsCounts"
                       :operating-time="operatingTime"
                       :participants-count="participantsCount"
                       :total-participants-count="totalParticipantsCount"
            ></dashboard>
            <console v-if="content === 'console'" @send="onSend" :lines="lines"></console>
            <participants v-if="content === 'participants'"></participants>
        </template>
    </default-layout>
</template>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import DefaultLayout from "@/layouts/DefaultLayout.vue";
	import ListItem from "@/components/atoms/ListItem.vue";
	import Dashboard from "@/components/organisms/contents/Dashboard.vue";
	import Console from "@/components/organisms/contents/Console.vue";
	import Participants from "@/components/organisms/contents/Participants.vue";

	type Item = {
		title: string;
		type: Content;
		icon: string;
	}

	type Content = "dashboard" | "console" | "participants"

	@Component({
		components: {
			DefaultLayout,
			ListItem,
			Dashboard,
			Console,
			Participants,
		}
	})

	export default class Main extends Vue {
		private content = "dashboard"
		private item = this.serverItems.findIndex((item) => item.type == this.content)

		public cpuUsages = [10, 15, 30, 30, 20, 10, 40, 10]
		public memoryUsages = [10, 15, 30, 30, 20, 10, 40, 10]
		public participantsCounts = [10, 12, 15, 15, 13, 15, 18, 24, 25]
        public operatingTime = 100
        public participantsCount = 25
        public totalParticipantsCount = 1000

		public lines = ["<text style=color:#ff0000>a</text>", "b"]

        public participants = []

		changeContent(content: Content) {
			this.content = content
		}

		public onSend(input: string) {
			this.lines.push(input)
		}

		get serverItems(): Item[] {
			return [
				{title: "Dashboard", type: "dashboard", icon: "fas fa-chart-line"},
				{title: "Console", type: "console", icon: "fas fa-terminal"},
				{title: "Participants", type: "participants", icon: "fas fa-user"}
			]
		}
	}

</script>

<style scoped>

</style>
