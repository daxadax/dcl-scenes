// import * as ui from '@dcl/ui-scene-utils'
import { UserData } from "@decentraland/Identity"

export class Character {
  userData!: UserData;
  xp!: number;

  setuserData(userData: UserData) {
    this.userData = userData as UserData;
  }

  displayUserData() {
    log(this.userData)
  }
}
