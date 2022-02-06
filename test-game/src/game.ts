// utilities
import * as utils from '@dcl/ecs-scene-utils'
import * as ui from '@dcl/ui-scene-utils'
import { getUserData } from "@decentraland/Identity"

// local resources
import { Plant } from './plant'
import { Inventory } from './inventory'
import { Character } from './character'
import { Item } from './item'

// set serverUrl
const serverUrl = 'https://63f1-82-118-30-27.ngrok.io';

// initialize canvas
const canvas = new UICanvas()

// initialize inventory
const inventory = new Inventory(canvas)
inventory.hide()

// initialize character
const character = new Character()
initializeCharacter(character, inventory)

// initialize plants
new Plant(
  'mountain_ragweed',
  new Transform({ position: new Vector3(8, 0, 8) }),
  updateInventory
)

new Plant(
  'void_tulip',
  new Transform({ position: new Vector3(13, 0, 12) }),
  updateInventory
)

// initialize input events
const input = Input.instance

input.subscribe("BUTTON_DOWN", ActionButton.SECONDARY, false, (e) => {
  if ( inventory.isVisible() ) {
    inventory.hide()
  } else {
    inventory.show()
  }
})

// define functions
async function getCharacterData() {
  const charId = character.userData.publicKey;
  const    url = serverUrl + '/character/' + charId

  try {
    let request = await fetch(url, { method: 'GET' })
    let response = await request.json()

    log(response)
    log("[success] character data pulled from server")
    return response.character
  } catch {
    log("[error] character data not pulled from server")
  }
}

async function initializeCharacter(character: Character, inventory: Inventory) {
  // pull basic character information from DCL
  const userData = await getUserData()
  character.setuserData(userData);

  // set character attributes from server
  const characterData = await getCharacterData()
  character.xp        = characterData.xp;

  // set inventory items
  inventory.refreshItems(characterData.inventory);
}

async function updateInventory(itemName: String) {
  const charId = character.userData.publicKey;
  const    url = serverUrl + '/character/' + charId + '/harvest/' + itemName;

  try {
    log('updating inventory')
    let request       = await fetch(url, { method: 'POST'});
    let response      = await request.json();
    let characterData = response.character;

    // update xp
    character.xp = characterData.xp;

    // set inventory items
    inventory.refreshItems(characterData.inventory);

    // return result
    return response.result
  } catch {
    log('server error')
  }
}
