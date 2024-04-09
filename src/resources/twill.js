/*eslint no-undef: "error"*/
/*eslint-env node*/

const twPlugin = require('tailwindcss/plugin');
const colar = require('./colar')._default;

export const plugin = twPlugin(function ({ matchUtilities, theme }) {
    matchUtilities(
        {
            colors: (value) => ({
                color: value
            }),
        },
        { values: theme('color') }
    )
}, {
    theme: {
        extend: {
            colors: {
                ...colar,
                light: {
                    accent: '#f6f6f6',
                    active: '#222222',
                    background: '#ffffff',
                    border: '#cbcbcb',
                    contrast: '#121212',
                    foreground: '#323232',
                },
                dark: {
                    accent: '#222222',
                    active: '#b6b6b6',
                    background: '#121212',
                    border: '#323232',
                    contrast: '#f6f6f6',
                    foreground: '#e0e0e0',
                },
                boulder: {
                    0: "#f6f6f6",
                    1: "#e0e0e0",
                    2: "#cbcbcb",
                    3: "#b6b6b6",
                    4: "#a1a1a1",
                    5: "#8d8d8d",
                    6: "#7a7a7a",
                    7: "#676767",
                    8: "#555555",
                    9: "#434343",
                    10: "#323232",
                    11: "#222222",
                    12: "#121212"
                },
                bunting: {
                    0: '#f1f4fd',
                    1: '#e2defb',
                    2: '#d1c8f6',
                    3: '#c0b4ee',
                    4: '#aea0e4',
                    5: '#9c8dd8',
                    6: '#897bc9',
                    7: '#7769b9',
                    8: '#6459a6',
                    9: '#524a92',
                    10: '#403c7c',
                    11: '#2e2e65',
                    12: '#1e224d'
                },
                roman: {
                    0: "#fff0f0",
                    1: "#ffd6d6",
                    2: "#ffbcbb",
                    3: "#ffa19e",
                    4: "#f78883",
                    5: "#eb706b",
                    6: "#da5b55",
                    7: "#c54944",
                    8: "#af3836",
                    9: "#97292a",
                    10: "#7f1b22",
                    11: "#670e1b",
                    12: "#4f0315"
                },
            }
        },
    }
});