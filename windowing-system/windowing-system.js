// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width, height) {
    this.width = width ?? 80;
    this.height = height ?? 60;
}

Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}

export function Position(x, y) {
    this.x = x ?? 0;
    this.y = y ?? 0;
}

Position.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
}


export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600),
            this.size = new Size(),
            this.position = new Position()
    }

    resize(newSize) {
        // let width = size.width;
        // let height = size.height;

        // if ( width < 1 ) width = 1;
        // if ( height < 1 ) height = 1;

        // if( this.position.x + this.size.width > this.screenSize.width ) {
        //     this.size.width = this.screenSize.width - this.position.x;
        // } else {
        //     if( width + this.position.x > this.screenSize.width ) {
        //         this.size.width = this.screenSize.width - this.position.x;
        //     } else {
        //         this.size.width = width;
        //     }
        // }

        // if( this.position.y + this.size.height > this.screenSize.height ) {
        //     this.size.height = this.screenSize.height - this.position.y;
        // } else {
        //     if( height + this.position.y > this.screenSize.height ) {
        //         this.size.height = this.screenSize.height - this.position.y;
        //     } else {
        //         this.size.height = height
        //     }
        // }

        const maxWidth = this.screenSize.width - this.position.x
        const maxHeight = this.screenSize.height - this.position.y

        const newWidth = Math.max(1, Math.min(newSize.width, maxWidth))

        const newHeight = Math.max(1, Math.min(newSize.height, maxHeight))

        this.size.resize(newWidth, newHeight)
    }

    move(newPosition) {
        // let positionX = position.x;
        // let positionY = position.y;

        // if (positionX < 0) positionX = 0;
        // if (positionY < 0) positionY = 0;

        // if (this.position.x + this.size.width > this.screenSize.width) {
        //     this.position.x = this.screenSize.width - this.size.width;
        // } else {
        //     if (positionX + this.size.width > this.screenSize.width) {
        //         this.position.x = this.screenSize.width - this.size.width;
        //     } else {
        //         this.position.x = positionX;
        //     }
        // }
        // if (this.position.y + this.size.height > this.screenSize.height) {
        //     this.position.y = this.screenSize.height - this.size.height;
        // } else {
        //     if (positionY + this.size.height > this.screenSize.height) {
        //         this.position.y = this.screenSize.height - this.size.height;
        //     } else {
        //         this.position.y = positionY;
        //     }
        // }

        const maxPositionX = this.screenSize.width - this.size.width;
        const maxPositionY = this.screenSize.height - this.size.height;

        const newPositionX = Math.max(0, Math.min(newPosition.x, maxPositionX));
        const newPositionY = Math.max(0, Math.min(newPosition.y, maxPositionY));

        this.position.move(newPositionX, newPositionY);
    }
}


export function changeWindow(programWindow) {      
  // Move to the top-left corner first so it can always resize      
  programWindow.move(new Position())
      
  // Now resize, then reposition     
  programWindow.resize(new Size(400, 300))      
  programWindow.move(new Position(100, 150))         
  return programWindow
    
}

        