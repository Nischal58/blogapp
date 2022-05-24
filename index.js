const commentContainer = document.querySelector('.comments-container')
var tasklist = [
    {
        id: 1,
        blog: {
            title: 'Nature',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis rem iure dicta reprehenderit officiis amet deleniti natus reiciendis aut. Quo itaque atque natus, quos dicta libero esse optio rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis rem iure dicta reprehenderit officiis amet deleniti natus reiciendis aut. Quo itaque atque natus, quos dicta libero esse optio rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis rem iure dicta reprehenderit officiis amet deleniti natus reiciendis aut. Quo itaque atque natus, quos dicta libero esse optio rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis rem iure dicta reprehenderit officiis amet deleniti natus reiciendis aut. Quo itaque atque natus, quos dicta libero esse optio rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis rem iure dicta reprehenderit officiis amet deleniti natus reiciendis aut. Quo itaque atque natus, quos dicta libero esse optio rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis rem iure dicta reprehenderit officiis amet deleniti natus reiciendis aut. Quo itaque atque natus, quos dicta libero esse optio rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis rem iure dicta reprehenderit officiis amet deleniti natus reiciendis aut. Quo itaque atque natus, quos dicta libero esse optio rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis rem iure dicta reprehenderit officiis amet deleniti natus reiciendis aut. Quo itaque atque natus, quos dicta libero esse optio rem.'
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
