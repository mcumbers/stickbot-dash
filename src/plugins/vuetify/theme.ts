import type { VuetifyOptions } from 'vuetify'

const theme: VuetifyOptions['theme'] = {
	defaultTheme: 'dark',
	themes: {
		dark: {
			dark: true,
			colors: {
				'primary': '#7289DA',
				'secondary': '#4E5D94',
				'on-secondary': '#fff',
				'success': '#56CA00',
				'info': '#16B1FF',
				'warning': '#FFB400',
				'error': '#FF4C51',
				'on-primary': '#FFFFFF',
				'on-success': '#FFFFFF',
				'on-warning': '#FFFFFF',
				'background': '#0F1118',
				'on-background': '#FFFFFF',
				'surface': '#181A22',
				'on-surface': '#FFFFFF',
				'grey-50': '#2A2E42',
				'grey-100': '#474360',
				'grey-200': '#4A5072',
				'grey-300': '#5E6692',
				'grey-400': '#7983BB',
				'grey-500': '#8692D0',
				'grey-600': '#AAB3DE',
				'grey-700': '#B6BEE3',
				'grey-800': '#CFD3EC',
				'grey-900': '#E7E9F6',
				'perfect-scrollbar-thumb': '#4A5072',
				'skin-bordered-background': '#312d4b',
				'skin-bordered-surface': '#312d4b',
			},
			variables: {
				'code-color': '#7289DA',
				'overlay-scrim-background': '#2C2942',
				'overlay-scrim-opacity': 0.6,
				'hover-opacity': 0.04,
				'focus-opacity': 0.1,
				'selected-opacity': 0.12,
				'activated-opacity': 0.1,
				'pressed-opacity': 0.14,
				'dragged-opacity': 0.1,
				'border-color': '#E7E3FC',
				'table-header-background': '#3D3759',
				'custom-background': '#373452',

				// Shadows
				'shadow-key-umbra-opacity': 'rgba(20, 18, 33, 0.08)',
				'shadow-key-penumbra-opacity': 'rgba(20, 18, 33, 0.12)',
				'shadow-key-ambient-opacity': 'rgba(20, 18, 33, 0.04)',
			},
		},
		light: {
			dark: false,
			colors: {
				'primary': '#7289DA',
				'secondary': '#4E5D94',
				'on-secondary': '#fff',
				'success': '#56CA00',
				'info': '#16B1FF',
				'warning': '#FFB400',
				'error': '#FF4C51',
				'on-primary': '#FFFFFF',
				'on-success': '#FFFFFF',
				'on-warning': '#FFFFFF',
				'background': '#F4F5FA',
				'on-background': '#3A3541',
				'on-surface': '#3A3541',
				'grey-50': '#FAFAFA',
				'grey-100': '#F0F2F8',
				'grey-200': '#EEEEEE',
				'grey-300': '#E0E0E0',
				'grey-400': '#BDBDBD',
				'grey-500': '#9E9E9E',
				'grey-600': '#757575',
				'grey-700': '#616161',
				'grey-800': '#424242',
				'grey-900': '#212121',
				'perfect-scrollbar-thumb': '#DBDADE',
				'skin-bordered-background': '#fff',
				'skin-bordered-surface': '#fff',
			},

			variables: {
				'code-color': '#7289DA',
				'overlay-scrim-background': '#3A3541',
				'overlay-scrim-opacity': 0.5,
				'hover-opacity': 0.04,
				'focus-opacity': 0.1,
				'selected-opacity': 0.12,
				'activated-opacity': 0.1,
				'pressed-opacity': 0.14,
				'dragged-opacity': 0.1,
				'border-color': '#3A3541',
				'table-header-background': '#F9FAFC',
				'custom-background': '#F9F8F9',

				// Shadows
				'shadow-key-umbra-opacity': 'rgba(var(--v-theme-on-surface), 0.08)',
				'shadow-key-penumbra-opacity': 'rgba(var(--v-theme-on-surface), 0.12)',
				'shadow-key-ambient-opacity': 'rgba(var(--v-theme-on-surface), 0.04)',
			},
		}
	},
}

export default theme
