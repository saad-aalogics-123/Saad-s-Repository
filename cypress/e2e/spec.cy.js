import {site_visit, visit} from "./pom/pom.cy"

describe('template spec', () => 
{

  it('passes', () => {
    const lv=new visit();
    lv.site_visit()


  })
})