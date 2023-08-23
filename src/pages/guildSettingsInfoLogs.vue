<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
import { useAppState } from '@/stores/appState';
const appState = useAppState();
// Return user to guild selection if no guild selected
if (!appState.selectedGuild) router.push({ name: 'guilds' });

import { useGuildSettingsInfoLogsStore } from '@/stores/API Data/guildSettingsInfoLogs';
const guildSettingsInfoLogsStore = useGuildSettingsInfoLogsStore();

let guildSettingsInfoLogsLocal = ref({ ...guildSettingsInfoLogsStore.guildSettingsInfoLogs });

const resetForm = () => {
	guildSettingsInfoLogsLocal.value = { ...guildSettingsInfoLogsStore.guildSettingsInfoLogs }
}

async function updateSettings() {
	guildSettingsInfoLogsStore.$patch({ guildSettingsInfoLogs: guildSettingsInfoLogsLocal.value });
	await guildSettingsInfoLogsStore.update();
	return resetForm();
}

onMounted(async () => {
	if (!guildSettingsInfoLogsStore.guildSettingsInfoLogs) await guildSettingsInfoLogsStore.fetch(appState.selectedGuild!.id);
	resetForm();
});

// Return user to guild selection if guild selection cleared on this page
appState.$subscribe(() => {
	if (!appState.selectedGuild) router.push({ name: 'guilds' });
});
</script>

<template>
	<VCard v-for="value, setting in guildSettingsInfoLogsLocal">
		<VCardTitle>
			{{ setting }}
		</VCardTitle>
		<VCardText>
			{{ value }}
		</VCardText>
	</VCard>
</template>