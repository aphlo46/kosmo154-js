// 모든 'article' 요소를 선택하여 'items' 변수에 저장합니다.
const items = document.querySelectorAll("article");

// 'aside' 요소를 선택하여 'aside' 변수에 저장합니다.
const aside = document.querySelector("aside");

// 'aside' 요소 내의 'span' 요소(닫기 버튼)를 선택하여 'close' 변수에 저장합니다.
const close = aside.querySelector("span");

// 'items' 배열의 각 요소에 대해 반복문을 실행합니다.
for(let el of items){     

    // 'mouseenter' 이벤트 리스너를 추가하여 마우스가 요소 위로 이동하면 실행됩니다.
    el.addEventListener("mouseenter", e=>{
        // 현재 요소의 자식인 'video' 요소를 재생합니다.
        e.currentTarget.querySelector("video").play();  
    });

    // 'mouseleave' 이벤트 리스너를 추가하여 마우스가 요소 밖으로 이동하면 실행됩니다.
    el.addEventListener("mouseleave", e=>{
        // 현재 요소의 자식인 'video' 요소를 일시정지합니다.
        e.currentTarget.querySelector("video").pause();
    });

    // 'click' 이벤트 리스너를 추가하여 요소를 클릭하면 실행됩니다.
    el.addEventListener("click", e=>{     
        // 현재 요소의 자식인 'h2', 'p', 'video' 요소의 텍스트와 속성 값을 각각의 변수에 저장합니다.
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        // 'aside' 요소의 자식인 'h1', 'p', 'video' 요소에 위에서 저장한 변수의 값을 적용합니다.
        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vidSrc);

        // 'aside' 요소의 자식인 'video' 요소를 재생하고, 'aside' 요소에 'on' 클래스를 추가하여 패널을 활성화합니다.
        aside.querySelector("video").play();
        aside.classList.add("on");
    });

    // 'click' 이벤트 리스너를 추가하여 닫기 버튼을 클릭하면 실행됩니다.
    close.addEventListener("click", ()=>{
        // 'aside' 요소에서 'on' 클래스를 제거하여 팝업 패널을 비활성화하고, 'aside' 요소의 자식인 'video' 요소를 일시정지합니다.
        aside.classList.remove("on");
        aside.querySelector("video").pause();
    });
}        
