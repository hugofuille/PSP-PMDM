export class Cantante{
    name:String;
    stars:number;
    description:String;
    type:String;
    photo:String;
    

    constructor(name:String, stars:number,photo:String,description:String,type:String){
        this.name = name;
        this.stars = stars;
        this.photo = photo;
        this.description = description;
        this.type = type;
       
    }
}