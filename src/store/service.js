import { createPinia} from "pinia";


const useServiceStore = definedStore('service', {
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
    
    }
})