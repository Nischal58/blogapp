const commentContainer = document.querySelector('.comments-container')
var tasklist = [
    {
        id: 1,
        blog: {
            title: 'Nature',
            content: 'Nepal, a country of amazing extremes is the home of the world’s highest mountains, historic cities and the forested plains where the regal tigers and the armor plated greater onehorned rhinoceros trundle at ease Situated in South Asia and surrounded by the Tibetan Autonomous Region of China in the north and by India in the south, east and west, the Kingdom of Nepal covers an area of 147,181 sq. km (between 80° 4’ and 88° 12’ East and 26° 22’ and 30° 27’ North).'
        },
        comment: ['']
    },
];
ShowBlogs = () => {
    document.querySelector('#tasklist').innerHTML = '';
    tasklist.forEach((val, index) => {
        document.querySelector('#tasklist').innerHTML += `
        <h1>${val.blog.title}</h1>
        <p>${val.blog.content}</p>

        <h3>Comments</h3>
        <input type='text' class='comment'>
        <button onclick="addComment(${val.id})">Add comment</button>
    
           <p> ${val.comment}</p>
        

    
        <button onclick="deleteTask(${val.id})">delete</button>
        `;
    });
}

const addComment = (id) => {
    const commentInput = document.querySelector('.comment').value
    const arrIndex = tasklist.findIndex(v => v.id == id);
    tasklist[arrIndex].comment = commentInput;

    // tasklist.comment.push(commentInput)

    ShowBlogs();
}
ShowBlogs();
const addBlogs = () => {
    const id = tasklist[tasklist.length - 1].id + 1
    // const blog=document.querySelector('#addBlog').value;
    const title = document.querySelector('.add-title').value;
    const content = document.querySelector('.add-content').value;

    tasklist.push({
        id: id, blog: { title: title, content: content }
    });
    console.log(tasklist);
    ShowBlogs();
}
const deleteTask = id => {
    tasklist = tasklist.filter(val => val.id !== id);
    ShowBlogs();
}

const saveEditData = () => {
    const arrIndex = tasklist.findIndex(v => v.id == id);
    const blog = document.querySelector('#addBlog').value;
    tasklist[arrIndex].blog = blog;
    ShowBlogs();
}
