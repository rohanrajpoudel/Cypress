//AgroTech API-Testing

import { publicFarmAPI } from "./APIs/publicFarm.api";

describe('Farm API', () => {
    it('Farm-API', () => {
        const qs = { 
            page: 1, 
            size: 10,
            longitude: 10,
            latitude: 10,
            rangeInKm: null,
            enterprise: ["null","null"],
            search: "null" 
        };
        publicFarmAPI('/', qs)
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
    it('Farm-Nearby-API', () => {
        const qs = { 
            size: 10,
            longitude: 10,
            latitude: 10
        };
        publicFarmAPI('/nearby', qs)
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
    it('ID-Farm-API', () => {
        const id = 1;
        publicFarmAPI('/'+id)
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
})