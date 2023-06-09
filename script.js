window.document.oncontextmenu = new Function("return false"); // 우클릭 방지
window.document.onselectstart = new Function("return false"); // 드래그 방지
window.document.ondragstart = new Function("return false"); // 이미지 드래그 방지

function kurukuru(currentCount) {
    // html의 clickCount 값 변경
    document.getElementById("clickCount").innerText = currentCount


    // herta img 생성
    herta = document.createElement("img") // herta에 img 요소 생성
    herta.setAttribute("class", "herta") // img 요소의 class 설정
    herta.setAttribute("id", `herta${currentCount}`) // img 요소의 구분용 id 설정
    herta.setAttribute("src", "kurukuru-kururing.gif") // img 요소의 이미지 설정
    document.body.appendChild(herta); // body에 img 요소 추가


    // 오디오 재생 
    if (Math.random() * 3 < 2) {
        kurukuru_audio.cloneNode().play() // 겹쳐서 재생이 가능하도록 재생할 때마다 객체를 다시 만들어 재생함
    }
    else {
        kururin_audio.cloneNode().play() // 겹쳐서 재생이 가능하도록 재생할 때마다 객체를 다시 만들어 재생함
    }


    // CSS 값 변경
    setTimeout(() => {
        // img 요소의 right 스타일 값을 화면 너비로 설정
        document.getElementById(`herta${currentCount}`).style.right = `${window.innerWidth}px`;
        document.getElementById(`herta${currentCount}`).style.top = `${(window.innerHeight * Math.random())-170}px`;
    }, 1) // CSS 애니메이션 작동이 안 되는 오류 때문에 1ms 지연을 줌


    // CSS 애니메이션이 종료되는 2초 후에 herta img 요소 삭제
    setTimeout(() => {
        document.getElementById(`herta${currentCount}`).remove()
    }, 2000)
}

const kurukuru_audio = new Audio("kurukuru.mp3") // kurukuru 오디오 객체 생성
const kururin_audio = new Audio("kururin.mp3") // kururin 오디오 객체 생성

let clickCount = 0
let herta // img 요소를 담을 변수 생성

const clickEvent = (() => {
    if ('ontouchstart' in document.documentElement === true) {
        return "touchstart"
    }
    else {
        return "click"
    }
})()

// 화면을 클릭하면 함수 실행
window.addEventListener(clickEvent, () => {
    clickCount = clickCount + 1
    kurukuru(clickCount)
})