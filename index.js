var tasklist= [
    {
        id:1,
        blog:{
            title:'how to code',
            content:'learn how to code'
        },
        comment:['Nice']
    },
    {
        id:2,
        blog:{
            title:'how to code',
            content:'learn how to code'
        },
        comment:['Nice']
    },
    {
        id:3,
        blog:{
            title:'how to code',
            content:'learn how to code'
        },
        comment:['Nice']
    }
];
 ShowBlogs = ()=>{
    document.querySelector('#tasklist').innerHTML = '';
    tasklist.forEach((val,index)=>{
        document.querySelector('#tasklist').innerHTML += `
        <h1>${val.blog.title}</h1>
        <p>${val.blog.content}</p>
        <button onClick="getEditData(${index})">Edit</button>
        <button onclick="deleteTask(${val.id})">delete</button>
        `;
    });
}
ShowBlogs();
const addBlogs=()=>{
    const id =tasklist[tasklist.length-1].id+1
    // const blog=document.querySelector('#addBlog').value;
    const title=document.querySelector('.add-title').value;
    const content=document.querySelector('.add-content').value;

    tasklist.push({
        id:id,blog:{title:title,content:content}
    });
    console.log(tasklist);
ShowBlogs();
}
const deleteTask = id=>{
    tasklist = tasklist.filter(val=>val.id!==id);
    ShowBlogs();
}
const getEditData = (i)=>{
    document.querySelector('#addBlog').value = tasklist[i].blog;
}
const saveEditData=()=>{
    const arrIndex = tasklist.findIndex(v=>v.id==id);
    const blog = document.querySelector('#addBlog').value;
    tasklist[arrIndex].blog = blog;
    ShowBlogs();
}


