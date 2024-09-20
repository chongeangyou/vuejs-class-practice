import axios from 'axios'
import { defineStore } from 'pinia'

const useRepostsitoryStore = defineStore('repository', {
    state: () => ({
        courses: []
    }),
    actions: {
        async getAllRepositories() {
            try {
                const { data } = await axios.get('/v1/courses')
                console.log(data);
                this.courses = data;
            } catch (error) {
                console.log("this error js");
            }
        }

    }
})

export default useRepostsitoryStore