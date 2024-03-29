import 'mocha'
import 'should'

import User from '@domain/entities/User'

const FACEBOOK_USER_ID = '534973630640609'

describe('User', () => {
  let tested: User

  beforeEach(() => { tested = new User() })

  describe('Test Facebook user ID', () => {
    it('should set/get Facebook user ID', () => {
      tested.facebookUserID = FACEBOOK_USER_ID
      tested.facebookUserID.should.be.equal(FACEBOOK_USER_ID)
    })
  })
})
