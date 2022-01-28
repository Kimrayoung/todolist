const btn = document.querySelector('#btn'); 
const nemo = document.querySelector('#nemo');
let key = 1;

const tempkey = localStorage.getItem('key');
for(let i = 1; i < Number(tempkey) ; i++){
    console.log(localStorage.getItem(`${i}`));
    list.classList.item(`${i}`);
}

nemo.addEventListener('keydown',function(event){  //리스트를 작성할 네모 박스를 의미함(여기에 keydown이벤트가 발생하면)
    
    console.log(event.key);  //지금 눌리는 키갑을 의미함(ex. a,b,c,d 등을 의미)
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
  
    
    if(event.key === 'Enter'){  //event에서 
        checkbox.addEventListener('click',function(event){
            console.log('event',event);
            const parentPtag = event.target.parentNode;
            
            if(checkbox.checked !== true){
                parentPtag.classList.remove('do');  
            }else{
                parentPtag.classList.add('do');    
            }
   
        })
    
    
        const input = document.querySelector('input');
        localStorage.setItem(`${key}`,input.value);
        key++;  //몇개의 리스트가 들어갔는지 확인하기위해서

        localStorage.setItem('key',key);  //key값을 업데이트

        const p = document.createElement('p');
        const value = input.value;
        const list = document.querySelector('#list');
        p.appendChild(checkbox);
        p.appendChild(document.createTextNode(value));
        list.appendChild(p);
        input.value = '';  
        input.focus();  
    
    }
});

btn.addEventListener('click',function(){  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('click',function(event){
        console.log('event',event);
        const parentPtag = event.target.parentNode;

        if(checkbox.checked !== true){

            parentPtag.classList.remove('do');  
        }else{
            parentPtag.classList.add('do');      
        }

    });

    const input = document.querySelector('input');
    const p = document.createElement('p');
    const value = input.value;
    const list = document.querySelector('#list');
    p.appendChild(checkbox);
    p.appendChild(document.createTextNode(value));
    list.appendChild(p);
    input.value = ''; 
    input.focus();  
});