const uL = document.querySelector('ul') as HTMLUListElement;
const inputField = document.querySelector('input#input') as HTMLInputElement;
const addButton = document.querySelector('button') as HTMLElement;



function clicked(event:MouseEvent):void {
    const target = event.target as HTMLElement;
    if (target && target.classList.contains('check')){
        const textContent = target?.parentElement?.querySelector('.content') as HTMLElement | null;
        console.log(textContent)
        if(target.dataset.e==='0'){
            target.dataset.e='1';
            textContent?textContent.style.textDecoration = 'line-through':0;
            target.style.backgroundImage='url(rg.avif)'
            
        }else{
            textContent?textContent.style.textDecoration = 'none':0;
            target.dataset.e='0';
            target.style.backgroundImage='';
        }
    }
}

uL.addEventListener('click', clicked);

uL.addEventListener('click', (ev: MouseEvent)=>{
    if(ev.target){
        const target=ev.target as HTMLElement;
        if (target.classList.contains('terminate')){
            target.parentElement?.remove();
        }
    }
})

function add():void {
    const textContent = inputField.value.trim();
    if(textContent){
        uL.innerHTML+='<li class=\"task\"><span class=\"check\" data-e=\"0\"></span><span class="content">'+textContent+'</span><span class="terminate">x</span></li>'
    }else alert('No value is inputed');
    inputField.value='';
    inputField.blur();
}

inputField.addEventListener('keydown', (ev:KeyboardEvent)=>{
    console.log(ev.key)
    if(ev.key === 'Enter') {
        add();
    }
});
addButton.addEventListener('click', add);
