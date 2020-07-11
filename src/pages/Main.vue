<template>
    <v-app>
        <Header/>
        <SideBar selected-content="dashboard" change-content=""/>
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
	import Content from "@/modules/Content";

	@Component({
		components: {
			Header,
			SideBar,
			MainContent
		}
	})

	export default class Main extends Vue {
		private content: Content = "dashboard"

		private setContent(content: Content) {
			this.content = content
		}
	}
</script>

<style scoped>

</style>
