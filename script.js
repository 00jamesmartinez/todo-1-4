


const createToDoList = (item) =>
{
    const li=document.createElement('li');
    li.textContent = `${item._id} : ${item.name} : ${item.description}`
    return li;
}

const appendDom = (items) =>
{
    const ul =document.querySelector('ul');
    items.map(item=>{
        ul.appendChild(createToDoList(item))
    });
};

const fetchItems = () =>{
    axios.get('http://api.bryanuniversity.edu/james/list')
    .then(response =>createToDoList(response.data))
    .catch(error=>console.log(error))
        
}

const postItem = (e)=>{
    e.preventDefault();
    var name=document.getElementById("input").value;
    var desc=document.getElementById("description").value;
    var price = document.getElementById("price").value;
    var isComp=document.getElementById("complete").Checked;

    let obj = {
        name :name,
        description:desc,
        price:price,
        isComplete:isComp
    }
    axios.post('http://api.bryanuniversity.edu/james/list',obj)
    .then(response=>fetchItems())
    .catch(error=>console.log(error))
}

let el=document.getElementById("todo");
el.addEventListener('submit',postItem);


const updateItem = (e) => {

    let id=e.target.id;
   var name=document.getElementById("input").value;
    var desc=document.getElementById("description").value;
    var price = document.getElementById("price").value;
    var isComp=document.getElementById("complete").Checked;

    let obj = {
        name :name,
        description:desc,
        price:price,
        isComplete:isComp
    }   
     if(isComp)
    {
        axios.put('http://api.bryanuniversity.edu/james/list/${id}',obj)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }
    }

const deleteItem =(e)=>{
    let id = e.target.id;
    axios.delete('http://api.bryanuniversity.edu/james/list/${id}')
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
}

