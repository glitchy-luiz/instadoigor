class Post{
    constructor(user, postpicture, description){
        this.profilePic = user.profilePic;
        this.userName = user.userName;
        this.postpicture = postpicture;
        this.description = description;
        this.likes = 0;
        this.comments = [
            {
                user: "Comentario",
                pic: "imgs/profile.jpg",
                coment: "hihihiha"
            }
        ];
        
    }
    commentPost(user, comment){
        

    }
}