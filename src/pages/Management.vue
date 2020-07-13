<template>
    <DefaultLayout>
        <template v-slot:sidebar>
            <v-divider/>
            <v-list>
                <v-subheader>Server</v-subheader>
                <v-list-item-group v-model="item" :mandatory="true">
                    <list-item v-for="item in serverItems" :key="item.type" @click="changeContent(item.type)">
                        <template #icon>{{item.icon}}</template>
                        <template #title>{{item.title}}</template>
                    </list-item>
                </v-list-item-group>
            </v-list>
        </template>
        <template v-slot:main>
            <component v-bind:is="content"/>
        </template>
    </DefaultLayout>
</template>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import Content from "@/modules/Content";
	import DefaultLayout from "@/layouts/DefaultLayout.vue";
	import ListItem from "@/components/atoms/ListItem.vue";
	import DashBoard from "@/components/organisms/DashBoard.vue";
	import Console from "@/components/organisms/Console.vue";

	type Item = {
		title: string;
		type: Content;
		icon: string;
	}

	@Component({
		components: {
			DefaultLayout,
            ListItem,
            dashboard: DashBoard,
            console: Console
		}
	})
	export default class Main extends Vue {
		private content: Content = "dashboard"
		private item = this.serverItems.findIndex((item) => item.type == this.content)

		changeContent(content: Content) {
			if(this.content == content) return
            this.content = content
		}

		get serverItems(): Item[] {
			return [
				{title: "Dashboard", type: "dashboard", icon: "fas fa-chart-line"},
				{title: "Console", type: "console", icon: "fas fa-terminal"}
			]
		}
	}
</script>

<style scoped>

</style>
