import Contribution from '@domain/entities/Contribution'
import User from '@domain/entities/User'

class Offer {
  private _Contribution: Contribution
  private _User: User
  private _price: number

  get Contribution (): Contribution {
    return this._Contribution
  }

  set Contribution (Contribution: Contribution) {
    this._Contribution = Contribution
  }

  get User (): User {
    return this._User
  }

  set User (User: User) {
    this._User = User
  }

  get price (): number {
    return this._price
  }

  set price (price: number) {
    this._price = price
  }
}

export default Offer
