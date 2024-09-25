import { defineStore} from "pinia"


const useServiceStore = defineStore('service', {
    state: () =>({
        serviceData: [
            {
              image: "images/s1.png",
              title: "CURRENCY WALLET",
              description:
                "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
            },
            {
              image: "images/s2.png",
              title: "CURRENCY WALLET",
              description:
                "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
            },
            {
              image: "images/s3.png",
              title: "CURRENCY WALLET",
              description:
                "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
            },
          ],
    }),
    actions: {
      // getAllServices(){
      //   return this.serviceData;
      // }
    }
})

export default useServiceStore