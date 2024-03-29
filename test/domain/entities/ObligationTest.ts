import 'mocha'
import 'should'

import Obligation from '@domain/entities/Obligation'
import Payment from '@domain/entities/Payment'

const PAYMENT: Payment = new Payment()
const CODE = 'unique secret code'

describe('Obligation', () => {
  let tested: Obligation

  beforeEach(() => { tested = new Obligation() })

  describe('Test Payment', () => {
    it('should set/get Payment', () => {
      tested.Payment = PAYMENT
      tested.Payment.should.be.equal(PAYMENT)
    })
  })

  describe('Test code', () => {
    it('should set/get code', () => {
      tested.code = CODE
      tested.code.should.be.equal(CODE)
    })
  })
})
