import { LightningElement } from 'lwc';

export default class SimpleQuiz extends LightningElement {
    correct 
incorrect
totalQuestion=4
progess;
answer1;
answer2;
answer3;
answer4;

handlechange(ev){
  const fieldName=  ev.target.name
  if(fieldName==='answer1'){
    this.answer1=ev.target.value
  }
  else if(fieldName==='answer2'){
    this.answer2=ev.target.value
  }
  if(fieldName==='answer3'){
    this.answer3=ev.target.value
  }
  if(fieldName==='answer4'){
    this.answer4=ev.target.value
  }

  this.totalCorrect()
}

totalCorrect(){
    var total_correct = 0
    var total_incorrect = 0
    if(this.answer1 != null){
        if(this.answer1 == 7){
            total_correct = total_correct+1
        }else{
            total_incorrect= total_incorrect+1
        }
    }

    if(this.answer2 != null){
        if(this.answer2 == 3){
            total_correct = total_correct+1
        }else{
            total_incorrect= total_incorrect+1
        }
    }

    if(this.answer3 != null){
        if(this.answer3 ==30){
            total_correct = total_correct+1
        }else{
            total_incorrect= total_incorrect+1
        }
    }

    if(this.answer4 != null){
        if(this.answer4 == 12){
            total_correct = total_correct+1
        }else{
            total_incorrect= total_incorrect+1
        }
    }

    this.correct = total_correct
    this.incorrect = total_incorrect

    this.progess = (total_correct + total_incorrect)/this.totalQuestion*100
}

}