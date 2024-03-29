<script lang="ts" setup>
import type { Component } from 'vue'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useDisplay } from 'vuetify'
import { useLoginDataStore } from '@/stores/api/oauth/loginData'
import { useAppState } from '@/stores/appState'
const loginData = useLoginDataStore();
const appState = useAppState();

interface Props {
	tag?: string | Component
	isOverlayNavActive: boolean
	toggleIsOverlayNavActive: (value: boolean) => void
}

const props = withDefaults(defineProps<Props>(), {
	tag: 'aside',
})

const { mdAndDown } = useDisplay()

const refNav = ref()

/*
  ℹ️ Close overlay side when route is changed
  Close overlay vertical nav when link is clicked
*/
const route = useRoute()

watch(
	() => route.path,
	() => {
		props.toggleIsOverlayNavActive(false)
	})

const isVerticalNavScrolled = ref(false)
const updateIsVerticalNavScrolled = (val: boolean) => isVerticalNavScrolled.value = val

const handleNavScroll = (evt: Event) => {
	isVerticalNavScrolled.value = (evt.target as HTMLElement).scrollTop > 0
}
</script>

<template>
	<Component :is="props.tag" ref="refNav" class="layout-vertical-nav" :class="[
		{
			'visible': isOverlayNavActive,
			'scrolled': isVerticalNavScrolled,
			'overlay-nav': mdAndDown,
		},
	]">
		<!-- 👉 Header -->
		<div class="nav-header">
			<slot name="nav-header">
				<RouterLink to="/" class="app-logo d-flex align-center gap-x-3 app-title-wrapper w-75">
					<div class="d-flex">
						<v-row justify="start" align="center">
							<v-col cols="3">
								<VAvatar color="background">
									<VImg :src="(loginData.botData?.avatarURL as string)" />
								</VAvatar>
							</v-col>
							<v-col cols="9">
								<h1 class="text-no-wrap">{{ appState.botInfo?.name }}</h1>
							</v-col>
						</v-row>
					</div>
				</RouterLink>
			</slot>
		</div>
		<slot name="before-nav-items">
			<div class="vertical-nav-items-shadow" />
		</slot>
		<slot name="nav-items" :update-is-vertical-nav-scrolled="updateIsVerticalNavScrolled">
			<PerfectScrollbar tag="ul" class="nav-items" :options="{ wheelPropagation: false }"
				@ps-scroll-y="handleNavScroll">
				<slot />
			</PerfectScrollbar>
		</slot>

		<slot name="after-nav-items" />
	</Component>
</template>

<style lang="scss">
@use "@configured-variables" as variables;
@use "@layouts/styles/mixins";

// 👉 Vertical Nav
.layout-vertical-nav {
	position: fixed;
	z-index: variables.$layout-vertical-nav-z-index;
	display: flex;
	flex-direction: column;
	block-size: 100%;
	inline-size: variables.$layout-vertical-nav-width;
	inset-block-start: 0;
	inset-inline-start: 0;
	transition: transform 0.25s ease-in-out, inline-size 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
	will-change: transform, inline-size;

	.nav-header {
		display: flex;
		align-items: center;

		.header-action {
			cursor: pointer;
		}
	}

	.app-title-wrapper {
		margin-inline-end: auto;
	}

	.nav-items {
		block-size: 100%;

		// ℹ️ We no loner needs this overflow styles as perfect scrollbar applies it
		// overflow-x: hidden;

		// // ℹ️ We used `overflow-y` instead of `overflow` to mitigate overflow x. Revert back if any issue found.
		// overflow-y: auto;
	}

	.nav-item-title {
		overflow: hidden;
		margin-inline-end: auto;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	// 👉 Collapsed
	.layout-vertical-nav-collapsed & {
		&:not(.hovered) {
			inline-size: variables.$layout-vertical-nav-collapsed-width;
		}
	}

	// 👉 Overlay nav
	&.overlay-nav {
		&:not(.visible) {
			transform: translateX(-#{variables.$layout-vertical-nav-width});

			@include mixins.rtl {
				transform: translateX(variables.$layout-vertical-nav-width);
			}
		}
	}
}
</style>
