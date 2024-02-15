//AgroTech API-Testing

import { publicSellerAPI } from "./APIs/publicSeller.api";

describe('Seller API', () => {
    it('Seller-API', () => {
        const qs = { page: 1, size: 10 };
        publicSellerAPI('/', qs)
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
    it('ID-Seller-API', () => {
        const id = 1;
        publicSellerAPI('/'+id)
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
})