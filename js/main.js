
let list = [
    {tasks:"Wake up", done:false},
    {tasks:"Breathe & Meditate", done:true},
    {tasks:"Do not use phone", done:true},
    {tasks:"Hydrate", done:false},
    {tasks:"Go to gym", done:true}
  ];
  
  list.forEach(lst => {
  
    var oneList = document.createElement('li');
  
  
    oneList.innerHTML = lst.tasks;
  
  
    oneList.classList.add('list');
  
  
    if (lst.done == false)
      oneList.classList.add('checked');
  
  
    document.getElementById('list').appendChild(oneList);
  
  });