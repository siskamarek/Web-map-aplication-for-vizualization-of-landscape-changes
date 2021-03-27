//open menu
export function toggleHidden(){
    const menuDiv = document.querySelector("#layer-menu");
    const hiddenElement = document.querySelector("#hidden");

    menuDiv.addEventListener("mouseover", ()=>{
        if(hiddenElement.hasAttribute('hidden')){
            hiddenElement.removeAttribute('hidden');
        }
        else{

            hiddenElement.setAttribute('hidden', true);
        }
        
    })

    menuDiv.addEventListener("mouseout", ()=>{
        if(hiddenElement.hasAttribute('hidden')){
            hiddenElement.removeAttribute('hidden');
        }
        else{

            hiddenElement.setAttribute('hidden', true);
        }
        
    })
    
};