//AgroTech API-Testing

import { defaultAPI } from "./APIs/default.api";

describe('Default -Get-API', () => {
    it('Get-API', async () => {
      defaultAPI('GET', '/api')
      .then((response)=>{
        expect(response.status).to.eq(200)
    })
  })
})