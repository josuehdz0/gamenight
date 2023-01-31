export class Player{
  constructor(name, emoji, score){
    this.emoji = emoji
    this.name = name
    this.score = parseInt(score)
  }



  addPoint(){
    if(this.score>=0){
      this.score+=1
      console.log(`one point added to ${this.name}`);
    }
  }

  subtractPoint(){
    if(this.score>0){
      this.score-=1
      console.log(`one point taken from ${this.name}`);
    }
  }


  get HTMLTemplate() {
    return `
    

      <div class="row card m-3">
        <div class="d-flex justify-content-center pt-2 ">
          <h2 class="col-2 text-center">${this.emoji}</h2>
          <h2 class="col-4 text-start">${this.name}</h2>
          <h2 class="col-4 text-center">
          <i class="mdi mdi-minus-circle-outline" onclick="app.playersController.minusPoint('${this.name}')"></i> ${this.score} <i class="mdi mdi-plus-circle-outline" onclick="app.playersController.plusPoint('${this.name}')"></i>
          </h2>
        </div>
      </div>
    `
  }

}

