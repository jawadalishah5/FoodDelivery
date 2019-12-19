import { Cafe } from './../models/cafe';
import { Component, OnInit } from '@angular/core';
import { ThumbnailServiceService } from '../services/thumbnail-service.service';


@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  imgPath: string[] = ["https://scontent-kut2-2.xx.fbcdn.net/v/t1.0-9/s960x960/78104669_924146461300087_7096229723335819264_o.jpg?_nc_cat=111&_nc_ohc=EVMiCq2JNBsAQm_IdA8ZdQ41g7oN4WwNWMwZSeshWo1wB43JUpwe6Z_rQ&_nc_ht=scontent-kut2-2.xx&oh=31b13708ff46e3a6bef1985bfe312de6&oe=5E819EC6",
  'https://scontent-kut2-2.xx.fbcdn.net/v/t1.0-9/s960x960/69070597_114799073220115_4064234042176831488_o.jpg?_nc_cat=105&_nc_ohc=YFS3QZRb1jMAQn9VqevyhRY1BktW6holXe_aI5MF1M7OoyjYcpQYHv5Eg&_nc_ht=scontent-kut2-2.xx&oh=691d02606c70e7adfcece10420c3ee72&oe=5E81A7BD',
  'https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-15/e35/69523997_484470912390322_901020381136217362_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_cat=110&se=7&oh=a647977de6f4a48c7aa338eb0930a1bb&oe=5E3C4A56&ig_cache_key=MjEyOTgwOTQyNzA5MjMxNTM4Ng%3D%3D.2',
  'https://farm1.static.flickr.com/574/23586804182_8a2dc41c4d_b.jpg',
  'https://blog.placeit.net/wp-content/uploads/2018/04/fastfoodheader_featured.jpg',
  'https://scontent-kut2-2.xx.fbcdn.net/v/t1.0-9/s960x960/78104669_924146461300087_7096229723335819264_o.jpg?_nc_cat=111&_nc_ohc=EVMiCq2JNBsAQm_IdA8ZdQ41g7oN4WwNWMwZSeshWo1wB43JUpwe6Z_rQ&_nc_ht=scontent-kut2-2.xx&oh=31b13708ff46e3a6bef1985bfe312de6&oe=5E819EC6'];
  

  cafes: Cafe[];
  constructor(public cafeService:ThumbnailServiceService) {
    
   }

  ngOnInit() {
    this.cafeService.getCafes().subscribe(cafes => {
      this.cafes=cafes;
    });  
  }

  

}
