<template>
    <v-app>
        <Header/>
        <side-bar>
            <slot name="sidebar"/>
        </side-bar>
        <MainContent>
            <slot name="main"/>
        </MainContent>
    </v-app>
</template>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import Header from "@/components/organisms/Header.vue";
	import MainContent from "@/components/organisms/MainContent.vue";
	import SideBar from "@/components/organisms/SideBar.vue";
	@Component({
		components: {
			Header,
			SideBar,
            MainContent
		}
	})
	export default class DefaultLayout extends Vue {
	}
</script>

<style scoped>

</style>
