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
  private canvas: UICanvas;
  private container: UIContainerRect;
  private title: UIText;
  private infoPanel: UIImage;
  // private infoPanelImage: UIImage;
  private infoPanelTitle: UIText;
  private infoPanelText: UIText;
  private backpack: UIImage;

  constructor(canvas: UICanvas) {
    this.canvas = canvas;

    const containerWidth = 800;

    this.container = new UIContainerRect(this.canvas)
    this.container.color = Color4.Black()
    this.container.width  = containerWidth
    this.container.height = 1000
    this.container.hAlign = 'center'
    this.container.vAlign = 'center'
    this.container.positionY = 0
    this.container.positionX = '45%'

    this.title = new UIText(this.container)
    this.title.fontSize = 30
    this.title.positionY = '35.5%'
    this.title.positionX = '2.5%'
    this.title.hAlign = 'left'
    this.title.value = 'WILDCRAFT'

    this.backpack = new UIImage(this.container, new Texture("images/backpack.png"))
    this.backpack.sourceWidth = 400
    this.backpack.sourceHeight = 400
    this.backpack.width = containerWidth
    this.backpack.height = 300
    this.backpack.positionY = '-27.5%'

    // this.equipment (things like which items are equipped if any)

    this.infoPanel = new UIImage(this.container, new Texture("images/backpack.png"))
    this.infoPanel.sourceWidth = 400
    this.infoPanel.sourceHeight = 400
    this.infoPanel.width = containerWidth
    this.infoPanel.height = '20%'
    this.infoPanel.positionY = '15%'

    // this.infoPanelImage = new UIImage(this.infoPanel, new Texture(''))
    // this.infoPanelImage.sourceWidth = 400
    // this.infoPanelImage.sourceHeight = 400
    // this.infoPanelImage.width = 100
    // this.infoPanelImage.height = 100
    // this.infoPanelImage.positionX = 25
    // this.infoPanelImage.positionY = 90

    this.infoPanelTitle = new UIText(this.infoPanel)
    this.infoPanelTitle.fontSize = 20
    this.infoPanelTitle.hAlign = 'left'
    this.infoPanelTitle.width = 400
    this.infoPanelTitle.positionX = 10
    this.infoPanelTitle.positionY = 90

    this.infoPanelText = new UIText(this.infoPanel)
    this.infoPanelText.fontSize = 16
    this.infoPanelText.hAlign = 'left'
    this.infoPanelText.vAlign = 'top'
    //this.infoPanelText.adaptWidth = false
    //this.infoPanelText.textWrapping = true
    this.infoPanelText.width = 400
    this.infoPanelText.positionX = 10
    this.infoPanelText.positionY = -20
  }

  refreshItems(items: Item[]) {
    this.items = items as Item[];
  }

  show() {
    const backpack = this.backpack
    const infoPanelTitle = this.infoPanelTitle
    const infoPanelText = this.infoPanelText
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
      const rowStart = 40
      const colStart =  -43
      invItem.positionY = (rowStart - (row * 5)) + '%'
      log(invItem.positionY)
      invItem.positionX = (colStart + (i * 10)) + '%'
      log(invItem.positionX)
      invItem.isPointerBlocker = true
      invItem.onClick = new OnClick(() => {
        log(item.description)
        // TODO: ability to control inventory: like drop or stack)
        infoPanelTitle.value = item.display_name
        infoPanelText.value = item.description
      })

      const text = new UIText(invItem)
      text.fontSize = 20
      text.width = '100%'
      text.positionX = 80
      text.positionY = -7
      text.value = item.quantity;
    })

    this.container.visible = true;
  }

  hide() {
    this.container.visible = false;
  }

  isVisible() {
    const container = this.container

    return container.visible
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
