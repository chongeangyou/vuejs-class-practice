import { defineStore } from "pinia";


const useAboutStore = defineStore('about', {
    state: () => ({
        aboutData: [
            {
                image: "images/about-img.png",
                title: "We Are Finexo",
                description: "lorem is lorem page"
            }
        ]
    })
})

export default useAboutStore