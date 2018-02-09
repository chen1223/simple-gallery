import { Component, OnInit } from '@angular/core';
import { ImageService } from './shared/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  image: any;

  constructor(private imageService: ImageService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
  	let request = new Promise((resolve, reject)=>{
  		let res;
  		res = this.imageService.getImage(+this.route.snapshot.params['id']);
  		if(res != undefined)
  			resolve(res);
  	});
  	request.then((data)=>{
  		this.image = data;
  	})
  	.catch((err) => {
  		console.log(err);
  	});
  }

}
