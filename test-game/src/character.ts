// import * as ui from '@dcl/ui-scene-utils'
import { UserData } from "@decentraland/Identity"

export class Character {
  experiencePoints!: number;
  userData!: UserData;

  displayUserData() {
    log(this.userData)
  }

  incrementExperience(xp: number) {
    log("you gained "+ xp +" xp")

    if (!this.experiencePoints) {
      this.experiencePoints = xp
    } else {
      this.experiencePoints += xp
    }
  }
}
