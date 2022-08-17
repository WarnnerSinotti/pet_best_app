declare module 'styled-components' {
    export interface DefaultTheme {
        COLORS: {
            background: string,
            whiteBackground: string,
            darkBackground: string,
            neutral: string,
            color: string,
            primary: string,
            secondary: string,
            terciary: string,
            quartenary: string,
            colorTextSubmit: string,
            colorTextSocialButton: string,
        },
        FONT_SIZE: {
            caption: Number,
            button: Number,
            bodySmall: Number,
            body: Number,
            large: Number,
            h6: Number,
            h5: Number,
            h4: Number,
            h3: Number,
            h2: Number,
            h1: Number,
        },
        FONTS: {
            LEXEND_BOLD: string,
            LEXEND_LIGHT: string,
            LEXEND_REGULAR: string,
            LEXEND_SEMI_BOLD: string,
            NUNITO_BLACK: string,
          },
    };
}