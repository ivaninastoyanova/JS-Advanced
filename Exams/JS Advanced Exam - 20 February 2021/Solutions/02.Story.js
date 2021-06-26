class Story{
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = []; 
    }

    get likes(){
        if(!this._likes.length)
        {
            return `${this.title} has 0 likes`;
        }
        if(this._likes.length == 1){
            return `${this._likes[0]} likes this story!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }

    like(username){
        if(this._likes.includes(username)){
            throw new Error("You can't like the same story twice!");
        }
        
        if(this.creator === username){
            throw new Error("You can't like your own story!");
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username){

        if(!this._likes.includes(username)){
            throw new Error("You can't dislike this story!");
        }
       
        let indexToRemove = this._likes.indexOf(username);
        this._likes.splice(indexToRemove, 1);

        return `${username} disliked ${this.title}`;
    }

    comment (username, content, id){
        
        let comment = this._comments.find(x => x.id == id);

        if(!comment || !id){
            let currentComment = {
                id : this._comments.length + 1,
                username,
                content,
                replies : [],
            };

        this._comments.push(currentComment);
        return `${username} commented on ${this.title}`;
        }

        let reply = {
            id : `${id}.${comment.replies.length + 1}`,
            username,
            content,
        };

        comment.replies.push(reply);
        return 'You replied successfully';
    }

    toString(sortingType){

       const sorting = {
           asc: (a,b) => a.id - b.id,
           desc: (a, b) => b.id - a.id,
           username: (a, b) => a.username.localeCompare(b.username),
       };

       let result = [];

       result.push(`Title: ${this.title}`,
                   `Creator: ${this.creator}`,
                   `Likes: ${this._likes.length}`,
                   `Comments:`);
       
       this._comments.sort(sorting[sortingType])
            .forEach((c) => {
                result.push(`-- ${c.id}. ${c.username}: ${c.content}`);
                c.replies.sort(sorting[sortingType])
                    .forEach((r) => {
                       result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
                    });
            });
        
       return result.join('\n');            
    }
}



let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
