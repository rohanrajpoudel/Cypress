//AgroTech API-Testing

import { defaultRoleAPI } from "./APIs/defaultRole.api";

describe('Default -Role-sync', () => {
    it('role-sync', async () => {
      defaultRoleAPI('POST', '/sync')
      .then((response)=>{
        expect(response.status).to.eq(201)
        expect(response.body).to.eq('Roles synced')
    })
  })
})