import { createI18n } from "vue-i18n";

const messages = {
    en: {
        home : 'Home',
        welcome: 'Magni quod blanditiis non minus sed aut voluptatum illum quisquamaspernatur ullam vel beatae rerum ipsum voluptatibus',
        btn_lang:'Change EN/KH'
    },
    khm: {
        home: 'ទំព័រដើម',
        welcome: 'សួស្ដី បងប្អូន ជីដូនមួយទាំងអស់គ្នា',
        btn_lang: 'ប្ដូរភាសា EN/KH'
    }
}

const i18n = createI18n({
    locale: 'en',
    fallbackFormat: 'en',
    messages
})

export default i18n