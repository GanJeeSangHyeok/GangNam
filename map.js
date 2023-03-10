    let container = document.getElementById('map');
    let options = {
        center: new kakao.maps.LatLng(37.522263, 126.898711),
        level: 3
    };

    let map = new kakao.maps.Map(container, options);
        // 지도에 마커를 생성하고 표시한다
    let marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(37.522263, 126.898711), // 마커의 좌표
        map: map // 마커를 표시할 지도 객체
    })

    
