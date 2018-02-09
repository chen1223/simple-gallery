import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  title = 'Recent Photos';	
  visibleImages: any[] = [];

  @Input() filterBy?: string = 'all';

  constructor(private imageService: ImageService) { 
  	this.getImages();
  }

  ngOnInit() {
  }

  ngOnChanges(){
  	this.getImages();
  }

  //Get image from server
  getImages(){
  	let request = new Promise((resolve, reject)=>{
  		let result;
  		result = this.imageService.getImages();
  		if(result != undefined)
  			resolve(result);
  		else
  			reject('Unknown error occur');
  	});
  	request.then((res:any)=>{
  		this.visibleImages = res;
  	})
  	.catch((err) => {
  		console.log(err);
  		alert(err);
  	});
  }
}
