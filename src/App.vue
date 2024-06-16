<template>
    <div class="bg-white min-h-screen">
        <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">
                <component :is="Component" :key="route.path" />
            </transition>
        </router-view>
    </div>
</template>

<style>
	@font-face {
		font-family: 'Acumin Variable Concept';
		font-style: normal;
		font-weight: normal;
		src: local('AcuminVariableConcept'), url('/fonts/AcuminVariableConcept.otf') format('opentype');
		font-display: swap;
	}

	@font-face {
		font-family: 'MADE Canvas Regular';
		font-style: normal;
		font-weight: normal;
		src: local('MADE Canvas Regular'), url('/fonts/MADE Canvas Regular PERSONAL USE.woff') format('woff');
		font-display: swap;
	}

	@font-face {
		font-family: 'MADE Canvas Light';
		font-style: normal;
		font-weight: normal;
		src: local('MADE Canvas Light'), url('/fonts/MADE Canvas Light PERSONAL USE.woff') format('woff');
		font-display: swap;
	}

	@font-face {
		font-family: 'MADE Canvas Black';
		font-style: normal;
		font-weight: normal;
		src: local('MADE Canvas Black'), url('/fonts/MADE Canvas Black PERSONAL USE.woff') format('woff');
		font-display: swap;
	}
</style>