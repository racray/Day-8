class movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    if(rating==undefined){
        this.rating = "PG13"
        }
    }
    getPG(mov){
        if(this.title==mov && this.rating=="PG13"){
            return this.title;
        }
    }
}

const Jamesbond = new movie("Casino Royale","EON Productions","PG13");