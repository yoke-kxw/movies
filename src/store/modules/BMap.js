const BaiduMap = {
    namespaced: true,
    state: {
        city: '',
        location: '',
        cinemaList: []
    },
    mutations: {},
    actions: {
        // 百度地图定位
        getLocation({
            state,
            dispatch
        }, {
            BMap,
            map
        }) {
            // 百度地图定位api获取不到精确的位置，所以先调用html5原生api，再转换成百度坐标获取地址
            navigator.geolocation.getCurrentPosition(function (position) {
                var pointArr = [new BMap.Point(position.coords.longitude, position.coords.latitude)];
                // 创建坐标转换器实例
                var convertor = new BMap.Convertor();
                // 转换坐标
                convertor.translate(pointArr, 1, 5, function (data) {
                    if (data.status === 0) {
                        var [lng, lat] = [data.points[0].lng, data.points[0].lat]
                        var userPoint = new BMap.Point(lng, lat);
                        map.centerAndZoom(userPoint, 18);
                        var marker = new BMap.Marker(userPoint); // 创建标注
                        map.addOverlay(marker); // 将标注添加到地图中
                        // 创建地址解析器实例
                        var myGeo = new BMap.Geocoder();
                        // 获取精确地址
                        myGeo.getLocation(userPoint, function (r) {
                            console.log(r);
                            state.location = r;
                            state.city = r.addressComponents.city.replace(/市$/, "");
                            dispatch('getCinema', map)
                        });
                    }
                });
            });
        },
        // 百度地图获取附近的电影院
        getCinema({
            state
        }, map) {
            // 配置搜索项
            var userPoint = new BMap.Point(state.location.point.lng, state.location.point.lat)
            var options = {
                onSearchComplete: function (r) {
                    if (local.getStatus() == BMAP_STATUS_SUCCESS) {
                        console.log(r);
                        state.cinemaList = r.Br;
                        // 获取当前位置到电影院的距离，添加到电影院对象的属性中，单位‘米’
                        r.Br.forEach(el => {
                            var currentPoint = new BMap.Point(el.point.lng, el.point.lat)
                            el.distance = map.getDistance(userPoint, currentPoint).toFixed(0)
                        })
                    }
                },
                // 把获取的结果渲染到地图上
                renderOptions: {
                    map: map
                }
            }
            var local = new BMap.LocalSearch(map, options);
            local.search('影院')
        }
    }
}
export default BaiduMap