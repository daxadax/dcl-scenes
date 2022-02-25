import * as utils from '@dcl/ecs-scene-utils'
import { Player } from './player'

export class PlaceableObject extends Entity {
  constructor(model: GLTFShape, transform: Transform, player: Player) {
    super()
    engine.addEntity(this)
    this.addComponent(model)
    this.addComponent(transform)

    this.addComponent(
      new OnPointerDown(
        () => {
          if (player.emptyHanded()) {
            player.pickupObject(this)

            this.addComponentOrReplace(
              new Transform({
                rotation: Quaternion.Euler(0, 0, -15),
                position: new Vector3(0.25, -0.2, 0.3),
              })
            )

            this.setParent(player.grip)
          }
        },
        {
          button: ActionButton.ANY,
          hoverText: "Pick Up",
          distance: 5
        }
      )
    )
  }
}
