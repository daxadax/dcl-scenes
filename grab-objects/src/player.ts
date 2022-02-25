import { UserData } from "@decentraland/Identity"
import { getUserData } from "@decentraland/Identity"
import { PlaceableObject } from './placeable_object'

export class Player {
  grip: Entity = null;
  heldObject: PlaceableObject = null;
  grabbedAt: Date = null;
  data!: UserData;

  emptyHanded() {
    return this.heldObject === null
  }

  pickupObject(object: PlaceableObject) {
    this.heldObject = object as PlaceableObject
    this.grabbedAt = new Date()
  }

  dropHeldObject() {
    this.heldObject.setParent(null)
    this.heldObject = null
    this.grabbedAt = null
  }

  async initialize() {
    log('initializing player')

    // pull basic character information from DCL
    const userData = await getUserData();
    this.data = userData as UserData;

    this.grip = new Entity()
    this.grip.addComponentOrReplace(
      new AttachToAvatar({
        avatarId: this.data.userId,
        anchorPointId: AttachToAvatarAnchorPointId.NameTag
      })
    )
    engine.addEntity(this.grip)
  }
}

