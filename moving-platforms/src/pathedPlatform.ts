import * as utils from '@dcl/ecs-scene-utils'

export function createPathedPlatform(
  scene: Entity,
  model: GLTFShape,
  path: Vector3[],
  time: number
): Entity {
  const entity = new Entity()
  engine.addEntity(entity)
  entity.setParent(scene)
  entity.addComponent(model)
  entity.addComponent(new Transform())
  entity.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 45, 0)))

  // Move the platform along a path before looping back again
  entity.addComponent(
    new utils.ToggleComponent(
      utils.ToggleState.Off,
      (value: utils.ToggleState) => {
        if (value === utils.ToggleState.On) {
          entity.addComponentOrReplace(
            new utils.FollowPathComponent(path, time, () => {
              entity.getComponent(utils.ToggleComponent).toggle()
            })
          )
        } else {
          entity.addComponentOrReplace(
            new utils.MoveTransformComponent(
              path[path.length - 1],
              path[0],
              time / path.length,
              () => {
                entity.getComponent(utils.ToggleComponent).toggle()
              }
            )
          )
        }
      }
    )
  )
  entity.getComponent(utils.ToggleComponent).toggle()
  return entity
}
