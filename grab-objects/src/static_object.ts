import * as utils from '@dcl/ecs-scene-utils'

export class StaticObject extends Entity {
  constructor(model: GLTFShape, transform: Transform) {
    super()
    engine.addEntity(this)
    this.addComponent(model)
    this.addComponent(transform)
  }
}
