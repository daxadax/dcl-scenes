import * as utils from '@dcl/ecs-scene-utils'

export function createStaticPlatform(
  scene: Entity,
  model: GLTFShape,
  transform: Transform
): Entity {
  const entity = new Entity()
  engine.addEntity(entity)
  entity.setParent(scene)
  entity.addComponent(model)
  entity.addComponent(transform)
  // entity.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 45, 0)))

  return entity
}
