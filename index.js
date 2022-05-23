var tasklist= [
    {
        id:1,
        blog:'First BLog ',
    },
    {
        id:2,
        blog:'Second Blog ',
    },
    {
        id:3,
        blog:'Third Blog',
    }
];

 ShowBlogs = ()=>{
    document.querySelector('#tasklist').innerHTML = '';
    tasklist.forEach((val,index)=>{
        document.querySelector('#tasklist').innerHTML += `
        <h1>${val.blog}</h1>
        <button onClick="getEditData(${index})">Edit</button>
        <button onclick="deleteTask(${val.id})">delete</button>

        `;
    });
}
ShowBlogs();
const addBlogs=()=>{
    const id =tasklist[tasklist.length-1].id+1
    const blog=document.querySelector('#addBlog').value;
    tasklist.push({
        blog,
    });
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


