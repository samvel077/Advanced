var cards = document.getElementsByClassName('card')
var selectedImg1;
var selectedImg2;
var selectedCount = 0
var span = document.querySelector('span')

function rotate (num) {
    if (!cards[num].getAttribute('selected'))  {
        cards[num].classList.add('rotateCard')
        cards[num].classList.remove('reverseRotate')
        cards[num].setAttribute('selected',true)
    }
    else{
        cards[num].classList.add('reverseRotate')
        cards[num].classList.remove('rotateCard')

        cards[num].removeAttribute('selected')
    }
    if(!selectedCount){
        selectedImg1 = cards[num]
        selectedCount++
    }else {
        selectedImg2=cards[num]
        compare(selectedImg1,selectedImg2)
        selectedCount=0
    }

    
}


function compare(img1,img2){
    var img1Data = img1.getAttribute('data-value')
    var img2Data = img2.getAttribute('data-value')
    if(img1Data===img2Data){
            span.innerHTML = +span.innerHTML+1
    }else {
        setTimeout(()=>{
            img1.classList.add('reverseRotate')
            img2.classList.add('reverseRotate')
            img1.removeAttribute('selected')
            img2.removeAttribute('selected')

        },1500)
    }

    if(+span.innerHTML===3){
        setTimeout(()=>alert('you won'),500)
    }
}