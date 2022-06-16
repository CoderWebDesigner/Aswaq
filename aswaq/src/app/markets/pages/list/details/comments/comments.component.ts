import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimalsService } from 'src/app/shared/services/animals/animals.service';
import { CarsService } from 'src/app/shared/services/cars/cars.service';
import { FurnituresService } from 'src/app/shared/services/furnitures/furnitures.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() comments:any;
  @Input() user:any;
  @Input() advertiseId!:string;
  @Output() onAddComment = new EventEmitter()
  replayForm!:FormGroup;
  commentForm!:FormGroup;
  commentId!:string;
  visibleIndex!:number;
  userId:string=localStorage.getItem('userId') || '';
  routeType=localStorage.getItem('param')
  constructor(private carService:CarsService,private animalService:AnimalsService,private furnitureService:FurnituresService) { }

  ngOnInit(): void {
    console.log(this.user)
    this.commentForm = new FormGroup({
      'comment':new FormControl('',[Validators.required])
    })
    this.replayForm=new FormGroup({
      'replay':new FormControl('',[Validators.required])
    })
  }
  add(type:string){
    switch (this.routeType) {
      case 'cars':
        this.addCarCommentAndReplay(type)
        break;
      case 'animals':
        this.addAnimalCommentAndReplay(type);
        break;
      case 'furnitures':
        this.addFurnitureCommentAndReplay(type);
        break;
      case 'buildings':
        // this.getBuildingById(itemId);
        break;
    }

  }
  addCarCommentAndReplay(type:string){
    if(type=='comment'){
      let comment={
        "comment": this.commentForm.value.comment,
        "carAdvertisementId": this.advertiseId,
        "clientId": this.userId
      }
      this.carService.addComment(comment).subscribe((result:any)=>{
        console.log(result)
        this.onAddComment.emit()
      },(error:any)=>{
        console.log(error)
      })
    }else{
      this.carService.addReplay(this.commentId,this.replayForm.value.replay).subscribe((result:any)=>{
        console.log('replay',result)
        this.visibleIndex = -1;
        this.onAddComment.emit()
      })
    }
  }
  addAnimalCommentAndReplay(type:string){
    if(type=='comment'){
      let comment={
        "comment": this.commentForm.value.comment,
        "animalId": this.advertiseId,
        "clientId": this.userId
      }
      this.animalService.addComment(comment).subscribe((result:any)=>{
        console.log(result)
        this.onAddComment.emit()
      })
    }else{
      this.carService.addReplay(this.commentId,this.replayForm.value.replay).subscribe((result:any)=>{
        console.log('replay',result)
        this.visibleIndex = -1;
        this.onAddComment.emit()
      })
    }
  }
  addFurnitureCommentAndReplay(type:string){
    if(type=='comment'){
      let comment={
        "comment": this.commentForm.value.comment,
        "furnitureId": this.advertiseId,
        "clientId": this.userId
      }
      this.furnitureService.addComment(comment).subscribe((result:any)=>{
        console.log(result)
        this.onAddComment.emit()
      })
    }else{
      this.carService.addReplay(this.commentId,this.replayForm.value.replay).subscribe((result:any)=>{
        console.log('replay',result)
        this.visibleIndex = -1;
        this.onAddComment.emit()
      })
    }
  }
  toggleReplayBox(event:any,commentId:string,index:number){
    event.preventDefault()
    this.commentId=commentId
    if (this.visibleIndex === index) {
      this.visibleIndex = -1;
    } else {
      this.visibleIndex = index;
    }
  }
}
