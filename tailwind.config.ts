import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                monoa: {
                    50: '#f6f6f6',
                    100: '#e7e7e7',
                    200: '#d1d1d1',
                    300: '#b0b0b0',
                    400: '#888888',
                    500: '#6d6d6d',
                    600: '#5d5d5d',
                    700: '#4f4f4f',
                    800: '#454545',
                    900: '#191919',
                    950: '#0a0a0a'
                },
                lavanda: {
                    50: '#f0f1fd',
                    100: '#e3e5fc',
                    200: '#cdcff8',
                    300: '#afaff2',
                    400: '#958eeb',
                    500: '#8473e1',
                    600: '#7458d3',
                    700: '#694ebc',
                    800: '#513d96',
                    900: '#453778',
                    950: '#292046'
                },
                minta: {
                    50: '#e7fff9',
                    100: '#c6ffed',
                    200: '#92ffe2',
                    300: '#4dffd8',
                    400: '#1fffce',
                    500: '#00e8b3',
                    600: '#00be94',
                    700: '#00987b',
                    800: '#007863',
                    900: '#006252',
                    950: '#003830'
                }
            },
            fontFamily: {
                'sans': ['Nunito', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
                'nunito': ['Nunito', 'sans-serif'],
                'playwrite': ['PlaywriteCU', 'sans-serif'],
            }
        }
    }
}
