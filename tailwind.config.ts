import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        back: '#2f2f2f',
        font: '#1f1f1f',
        titles: "#BADE00",
        placeholder: "rgba(255,255,255,.5)",
        start: "#BAACDD",
        middle: "#87E5D3",
        end: "rgba(255,255,255,0)",
      },
      fontSize: {
        "10": '10px',
        "12": '12px',
        "16": '16px',
        "20": '20px',
        "26": '26px',
        "30": '30px',
        "40": '40px',
        "60": '60px',
      },
      fontFamily: {
        roboto: ["Roboto", 'sans-serif'],
      },
      borderRadius: {
        "16": '16px',
        "100%": '100%'
      },
      borderColor: {
        input: 'linear-gradient(to right, rgba(186,172,221,1) 0%, rgba(135,229,211,1) 50%, rgba(255,255,255,0) 100%) 1',
      },
      padding:{
        "2": '2px',
        "51": '51px'
      },
      width:{
        form: '448px',
        google: '20px',
        logo: '60px',
        circle: '120px',
        "76": '76px',
        "70": '70px',
        "90": '90px',
        "110": '110px',
        "100": '100px',

      },
      height:{
        form: '600px',
        input: '80px',
        button: '32px',
        google: '20px',
        logo: '70px',
        stadistic: '265px',
        circle: '120px',
        staDiv: '35px',
        "166": '166px',
        "70": '70px',
        "90": '90px',
        "110": '110px',
        "100": '100px',
        
      },
      strokeWidth:{
        "10": '10px'
      },
      margin: {
        button: '16px',
        small: '35px',
        middle: '43px',
        big: '78px',
        "3": "3px",
        "10": "10px",
        "21": "21px"
      },
      gridTemplateColumns:{
        or: '48% 4% 48% ',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        test: "#1f1f1f",
      },
      zIndex:{
        "1": "1"
      },
    },
  },
  plugins: [],
};
export default config;
