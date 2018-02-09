import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  constructor() { 

  }

  visibleImages = [];

  //Return all images
  getImages(){
	return this.visibleImages = IMAGES.slice(0);
  }

  //Return image of spefic id
  getImage(id: number){
  	return IMAGES.slice(0).find( image => image.id == id );
  }
}

const IMAGES = [
	{'id': 1, 'category': 'boat', 'caption':'View from a boat', 'url': 'assets/img/boat01.jpeg'},
	{'id': 2, 'category': 'boat', 'caption':'View from a boat2', 'url': 'assets/img/boat02.jpeg'},
	{'id': 3, 'category': 'boat', 'caption':'View from a boat3', 'url': 'assets/img/boat03.jpeg'},
	{'id': 4, 'category': 'boat', 'caption':'View from a boat4', 'url': 'assets/img/boat04.jpeg'},
	{'id': 5, 'category': 'boat', 'caption':'View from a boat5', 'url': 'assets/img/boat05.jpeg'},
	{'id': 6, 'category': 'boat', 'caption':'View from a boat6', 'url': 'assets/img/boat06.jpeg'},
	{'id': 7, 'category': 'boat', 'caption':'View from a boat7', 'url': 'assets/img/boat07.jpeg'},
	{'id': 8, 'category': 'boat', 'caption':'View from a boat8', 'url': 'assets/img/boat08.jpeg'},
	{'id': 9, 'category': 'library', 'caption':'View from a library', 'url': 'assets/img/library01.jpeg'},
	{'id': 10, 'category': 'library', 'caption':'View from a library2', 'url': 'assets/img/library02.jpeg'},
	{'id': 11, 'category': 'library', 'caption':'View from a library3', 'url': 'assets/img/library03.jpeg'},
	{'id': 12, 'category': 'library', 'caption':'View from a library4', 'url': 'assets/img/library04.jpeg'},
	{'id': 13, 'category': 'library', 'caption':'View from a library5', 'url': 'assets/img/library05.jpeg'},
	{'id': 14, 'category': 'library', 'caption':'View from a library6', 'url': 'assets/img/library06.jpeg'},
	{'id': 15, 'category': 'library', 'caption':'View from a library7', 'url': 'assets/img/library07.jpeg'},
	{'id': 16, 'category': 'library', 'caption':'View from a library88', 'url': 'assets/img/library08.jpeg'},
];