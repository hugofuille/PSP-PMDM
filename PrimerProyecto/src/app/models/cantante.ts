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

    getColor():String{
        switch(this.type){
            case "Dragona":
                return "#FF0080";
            case "Mariposa":
                return "#0000FF";
            case "Motomami":
                return "#f00";
            case "Reguetonera":
                return "#EABE3F ";
            case "Belladrama":
                return "#b9f2ff";
        }
        return "#f00";
    }
}