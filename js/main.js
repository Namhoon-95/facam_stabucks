const searchEl = document.querySelector('.search');
const searchInputEL = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    //서치요소의 모든 자식요소(class="어쩌구저쩌구..")를 클릭하면 아래의 로직을 실행해라!
    //아래의 로직은 서치인풋을 '포커스'해라!
    searchInputEL.focus();
    //이코드 사용하는이유는 돋보기아이콘누르면 인풋창이 안커져서 하는거임.
});

searchInputEL.addEventListener('focus', function(){
    //classList.add는 태그의 속성값이 클래스를 추가한다는 의미(여기선 클릭하면 클래스가 추가됨)
    searchEl.classList.add('focused');
    searchInputEL.setAttribute('placeholder', '통합검색');
});

searchInputEL.addEventListener('blur', function(){
    //blur=블러 >>> 포커스의 반댓말, 다른곳에 포커스를 뺏긴상태
    searchEl.classList.remove('focused');
    searchInputEL.setAttribute('placeholder', '');
});