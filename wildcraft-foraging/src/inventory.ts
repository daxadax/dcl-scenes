// import * as ui from '@dcl/ui-scene-utils'
import { Item } from './item'

// TODO: infopanel/character panel should probably be it's own class that just takes
// character and items as a constructor. so is there a need for inventory?
// or:
// character_sheet - one pane of info panel
// inventory - one pane of info panel
// skills - one pane of info panel
// etc
export class Inventory {
  items!: Item[];

  private container: UIContainerRect;
  private backpack: UIImage;

  // private infoPanelImage: UIImage;
  private itemTitle: UIText;
  private itemText: UIText;

  constructor(container: UIContainerRect) {
    this.container = container;

    // TODO: later add equipment
    // this.equipment (things like which items are equipped if any)

    this.backpack = new UIImage(this.container, new Texture("images/backpack.png"))
    this.backpack.sourceWidth = 400
    this.backpack.sourceHeight = 400
    this.backpack.width = this.container.width
    this.backpack.height = this.container.height
    this.backpack.positionY = this.container.childPositionY

    // // this.infoPanelImage = new UIImage(this.infoPanel, new Texture(''))
    // // this.infoPanelImage.sourceWidth = 400
    // // this.infoPanelImage.sourceHeight = 400
    // // this.infoPanelImage.width = 100
    // // this.infoPanelImage.height = 100
    // // this.infoPanelImage.positionX = 25
    // // this.infoPanelImage.positionY = 90

    this.itemTitle = new UIText(this.backpack)
    this.itemTitle.fontSize = 25
    this.itemTitle.hAlign = 'left'
    this.itemTitle.width = this.container.width
    this.itemTitle.positionX = 20
    this.itemTitle.positionY = '30%'

    this.itemText = new UIText(this.backpack)
    this.itemText.fontSize = 18
    this.itemText.hAlign = 'left'
    this.itemText.adaptWidth = false
    this.itemText.textWrapping = true
    this.itemText.width = parseInt(this.container.width) * 0.5
    this.itemText.positionX = 20
    this.itemText.positionY = '25%'

    log('width', parseInt(this.container.width))
  }

  refreshItems(items: Item[]) {
    this.items = items as Item[];
  }

  show() {
    const container = this.container
    const backpack = this.backpack
    const itemTitle = this.itemTitle
    const itemText = this.itemText
    const row = 0
    const col = 0

    log(this.items)
    // TODO: these should be instanciated in the SAME backpackSlots const
    // if the user presses 'f' 300 times there will be 300*items instances
    this.items.forEach(function(item, i) {
      const invItem = new UIImage(backpack, new Texture(item.img_url))
      invItem.sourceWidth = 600
      invItem.sourceHeight = 600
      invItem.width = 100
      invItem.height = 100

      if ( i % 6 == 0 ) { row++ }
      log('row',row)
      log('col',col)
      const rowStart = 50
      const colStart =  -43
      invItem.positionY = (rowStart - (row * 5)) + '%'
      log(invItem.positionY)
      invItem.positionX = (colStart + (i * 10)) + '%'
      log(invItem.positionX)
      invItem.isPointerBlocker = true
      invItem.onClick = new OnClick(() => {
        log(item.description)
        // TODO: ability to control inventory: like drop or stack)
        itemTitle.value = item.display_name
        itemText.value = item.description
      })

      const itemCount = new UIText(invItem)
      itemCount.fontSize = 20
      itemCount.width = '100%'
      itemCount.positionX = 80
      itemCount.positionY = -7
      itemCount.value = item.quantity;
    })

    this.container.visible = true;
  }

  hide() {
    this.container.visible = false;
  }

  isVisible() {
    return this.container.visible
  }

  // getContainer = () => {
  //   if (!this.container) {
  //     this. = new UIContainerRect(this.canvas)

  //     this.container.color = Color4.Black()
  //     this.container.width  = '70%'
  //     this.container.height = '80%'
  //     this.container.hAlign = 'center'
  //     this.container.vAlign = 'center'
  //     this.container.positionY = 30
  //   }

  //   return this.container
  // }

  // getTextBox = (container: UIContainerRect) => {
  //   if (!this.textBox) {
  //     this.textBox = new UIText(container)

  //     this.textBox.fontSize = 24
  //     this.textBox.height = 30
  //     this.textBox.width = '100%'
  //     this.textBox.hAlign = 'center'
  //     this.textBox.hTextAlign = 'center'
  //   }

  //   return this.textBox
  // }
}
