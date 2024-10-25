import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	extend: {
    		rotate: {
    			'30': '30deg'
    		},
    		colors: {
    			black: {
    				'100': '#010103',
    				'200': '#0E0E10',
    				'300': '#1C1C21',
    				'500': '#3A3A49',
    				'600': '#1A1A1A',
    				DEFAULT: '#000'
    			},
    			white: {
    				'500': '#62646C',
    				'600': '#AFB0B6',
    				'700': '#D6D9E9',
    				'800': '#E4E4E6',
    				DEFAULT: '#FFFFFF'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		animation: {
    			spotlight: 'spotlight 2s ease .75s 1 forwards',
    			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
    			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
    			'shiny-text': 'shiny-text 8s infinite',
    			meteor: 'meteor 5s linear infinite',
    			ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
    			pulse: 'pulse var(--duration) ease-out infinite'
    		},
    		keyframes: {
    			spotlight: {
    				'0%': {
    					opacity: '0',
    					transform: 'translate(-72%, -62%) scale(0.5)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translate(-50%,-40%) scale(1)'
    				}
    			},
    			'shimmer-slide': {
    				to: {
    					transform: 'translate(calc(100cqw - 100%), 0)'
    				}
    			},
    			'spin-around': {
    				'0%': {
    					transform: 'translateZ(0) rotate(0)'
    				},
    				'15%, 35%': {
    					transform: 'translateZ(0) rotate(90deg)'
    				},
    				'65%, 85%': {
    					transform: 'translateZ(0) rotate(270deg)'
    				},
    				'100%': {
    					transform: 'translateZ(0) rotate(360deg)'
    				}
    			},
    			'shiny-text': {
    				'0%, 90%, 100%': {
    					'background-position': 'calc(-100% - var(--shiny-width)) 0'
    				},
    				'30%, 60%': {
    					'background-position': 'calc(100% + var(--shiny-width)) 0'
    				}
    			},
    			meteor: {
    				'0%': {
    					transform: 'rotate(215deg) translateX(0)',
    					opacity: '1'
    				},
    				'70%': {
    					opacity: '1'
    				},
    				'100%': {
    					transform: 'rotate(215deg) translateX(-500px)',
    					opacity: '0'
    				}
    			},
    			ripple: {
    				'0%, 100%': {
    					transform: 'translate(-50%, -50%) scale(1)'
    				},
    				'50%': {
    					transform: 'translate(-50%, -50%) scale(0.9)'
    				}
    			},
    			pulse: {
    				'0%, 100%': {
    					boxShadow: '0 0 0 0 var(--pulse-color)'
    				},
    				'50%': {
    					boxShadow: '0 0 0 8px var(--pulse-color)'
    				}
    			}
    		}
    	}
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("tailwindcss-animate")],
};
export default config;