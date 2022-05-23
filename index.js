var tasklist= [
    {
        id:1,
        blog:'THis is a new blog hello to every one in my blog section ',

    },
    {
        id:2,
        blog:'THis is a new blog2 hello to every one in my blog section ',
  

    },
    {
        id:3,
        blog:'THis is a  3 new blog2 hello to every one in my blog section ',
  

    }

];

 ShowBlogs = ()=>{
    document.querySelector('#tasklist').innerHTML = '';
    tasklist.forEach((val,index)=>{
        document.querySelector('#tasklist').innerHTML += `
        <h1>${val.blog}</h1>
        <p>${val.comment}</p>

        
        <button>Edit</button>
        <button>delete</button>

        `;
    });
}

const addBlogs=()=>{

}
