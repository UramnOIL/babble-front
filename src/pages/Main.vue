<template>
    <v-app>
        <Header/>
        <SideBar selected-content="dashboard"/>
        <MainContent>
            <component v-bind:is="content"></component>
        </MainContent>
    </v-app>
</template>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import Header from "@/components/organisms/Header.vue";
	import SideBar from "@/components/organisms/SideBar.vue";
	import MainContent from "@/components/organisms/MainContent.vue";

	@Component({
		components: {MainContent, SideBar, Header},
	})

	export type Contents = "console" | "dashboard"

	@Component({
		components: {
			Header,
			SideBar,
			MainContent
		}
	})
	export default class Main extends Vue {
		private content: Contents = "dashboard"

		private setContent(content: Contents) {
			//TODO
		}
	}
</script>

<style scoped>

</style>
