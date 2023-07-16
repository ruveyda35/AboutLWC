import { LightningElement, track, api } from 'lwc';


export default class Islerim extends LightningElement {
@track
islerim=[{
        id:1,
        name:"kalk"
        }];
is;
show=false;
clean=true;

handlechange(event){
    this.is=event.target.value;
    
}

handleClick(event){
    if(this.is){
        this.islerim.push({
        id:this.islerim.length +1,
        name:this.is      
});
   // this.is='';
    const inputElement = this.template.querySelector('fsfghf"]');
        if(inputElement){
            inputElement.reset();
        }
    }
    
}

deleteis(event){
    let idToDelete = parseInt(event.target.name);
    let indextodelete;

    for(let i=0; i< this.islerim.length; i++){
        if(idToDelete === this.islerim[i].id) {
            indextodelete = i;
        }
    }
      this.islerim.splice(indextodelete, 1);
}

save(event){
   this.show=true; 
   this.clean=false; 
   this.is='';     
}

}