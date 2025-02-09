const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab_cont');

tabs.forEach((tab, index)=>{
    tab.addEventListener('click',function(e){
        e.preventDefault(); //a태그 기본 동작 방지

        //모든 탭에서 active 먼저 제거
        tabs.forEach((t) => t.classList.remove("active"))
        contents.forEach((c)=>c.style.display='none');

        //클릭한 탭 활성화

        tab.classList.add("active");
        contents[index].style.display = 'block';
    })
})

contents.forEach((c, i) => c.style.display = i === 0 ? 'block' : 'none');
