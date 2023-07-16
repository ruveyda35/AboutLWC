import { LightningElement } from 'lwc';
import TerimCreator  from '@salesforce/apex/TerimCreatorLWC.TerimCreator'
import {ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class TerimCreation extends LightningElement {


    terimName
    handleTerim(e){
        this.terimName=e.target.value
    }
   
    terimAnlam

    handleTerimAnlam(e){
        this.terimAnlam= e.target.value

    }

    handleClick(){

        TerimCreator({trmName:this.terimName, trmAnlm:this.terimAnlam})
        .then ( (response) => { 
         if(response == 'basarili' ){
      this.dispatchEvent( new ShowToastEvent({
        title: 'TEBRIKLER MASALLAH SIZE!',
        message: 'Tebrikler bir adet terim olusturdunuz',
        variant: 'success'
      }))

         }else if (response == 'malesef' ){
            this.dispatchEvent( new ShowToastEvent({
                title: 'Warning!',
                message: 'uzgunum malesef',
                variant: 'warning'
              }))
        


         }else{


         }


         } )
        .catch(  (error)   =>  {   }    )
    
  
    }


}