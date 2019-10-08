import "mocha"
import "should"

import { User } from "@models/User"

const FACEBOOK_USER_ID: string = '534973630640609'
const ROLE: string = 'worker'

describe("User", () => {
    let tested: User

    beforeEach(() => tested = new User())

    describe("Test Facebook user ID", () => {
        it("should set/get Facebook user ID", () => {
            tested.facebookUserID = FACEBOOK_USER_ID
            tested.facebookUserID.should.be.equal(FACEBOOK_USER_ID)
        })
    })
})