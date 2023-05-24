export class Post {
    id: number;
    authorId: number;
    dateCreated: string;
    content: string;
    comments: [
        {commentId: number} | null
    ]
}