declare module 'styled-components' {
    export interface DefaultTheme {
        COLORS: {
            background: String,
            whiteBackground: String,
            darkBackground: String,
            neutral: String,
            color: String,
            primary: String,
            secondary: String,
            terciary: String,
            quartenary: String,
            colorTextSubmit: String,
            colorTextSocialButton: String,
            colorTextSingup: String,
            greyPrimary: String,
            greySecondary: String,
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
            LEXEND_BOLD: String,
            LEXEND_LIGHT: String,
            LEXEND_REGULAR: String,
            LEXEND_SEMI_BOLD: String,
            NUNITO_BLACK: String,
        },
    };
}