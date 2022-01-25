// import * as ui from '@dcl/ui-scene-utils'

export class Inventory {
  private canvas: UICanvas;
  private items = {};
  private container!: UIContainerStack;
  private textBox!: UIText;

  constructor(canvas: UICanvas) {
    this.canvas = canvas;
  }

  addItemOrCreate(count: Number, modelName: String) {
    log("harvested "+ count +" "+ modelName)

    if ( this.items[modelName] == null ) {
      this.items[modelName] = count
    } else {
      this.items[modelName] += count
    }
  }

  isVisible() {
    const container = this.getContainer()
    const textBox = this.getTextBox(container)

    return container.visible && textBox.visible
  }

  show() {
    const container = this.getContainer()
    const textBox = this.getTextBox(container)

    this.describe(textBox)

    container.visible = true;
    textBox.visible = true;
  }

  hide() {
    const container = this.getContainer()
    const textBox = this.getTextBox(container)

    container.visible = false;
    textBox.visible = false;
  }

  describe(textBox: UIText) {
    const itemCount = Object.entries(this.items).length;

    textBox.value = null

    if ( itemCount == 0 ) {
      textBox.value = 'You don\'t have any items in your inventory'
    } else {
      for (const key in this.items) {
        textBox.value = 'You have '+ this.items[key] +' '+ key
      }
    }
  }

  getContainer = () => {
    if (!this.container) {
      log('creating new container')
      this.container = new UIContainerStack(this.canvas)

      this.container.width = 800
      this.container.height = '100%'
      this.container.hAlign = 'center'
      this.container.vAlign = 'bottom'
      this.container.positionY = 50
    }

    return this.container
  }

  getTextBox = (container: UIContainerStack) => {
    if (!this.textBox) {
      this.textBox = new UIText(container)

      this.textBox.fontSize = 24
      this.textBox.height = 30
      this.textBox.width = '100%'
      this.textBox.hAlign = 'center'
      this.textBox.hTextAlign = 'center'
    }

    return this.textBox
  }
}
