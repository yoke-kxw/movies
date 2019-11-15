const BaiduMap = {
    namespaced: true,
    state: {
        BMap: null,
        map: null,
        city: '',
        location: {},
        cinemaList: []
    },
    mutations: {},
    actions: {
        //修改当前城市
        switchCity({
            state,
            dispatch
        }, city) {
            state.city = city;
            state.map.centerAndZoom(city, 15); // ,用城市名设置地图中心点
            state.map.addEventListener("tilesloaded", () => dispatch('getCinema'));
        },
        // 聚焦
        mapFouce({
            state
        }, point) {
            state.map.centerAndZoom(point, 18);
        },
        // 百度地图定位
        getLocation({
            state,
            dispatch
        }, {
            BMap,
            map
        }) {
            // 保存百度地图实例
            if (BMap && map) {
                state.BMap = BMap;
                state.map = map;
            } else {
                map = state.map;
                BMap = state.BMap;
            }
            state.city = '定位中';
            // 百度地图定位api获取不到精确的位置，所以先调用html5原生api，再转换成百度坐标获取地址
            navigator.geolocation.getCurrentPosition(getAddress, error);

            function getAddress(position) {
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
                            dispatch('getCinema')
                        });
                    }
                });
            };
            // 如果原生api获取失败，则调用百度地图的api
            function error(error) {
                alert('获取精确位置失败' + error.message);
                const geolocation = new BMap.Geolocation();
                geolocation.enableSDKLocation();
                geolocation.getCurrentPosition(function (r) {
                    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                        console.log(r);
                        state.city = r.address.city.replace(/市$/, "");
                        state.location.point = r.point;
                        state.location.address = r.address.city;
                        var [lng, lat] = [r.point.lng, r.point.lat];
                        var userPoint = new BMap.Point(lng, lat);
                        map.centerAndZoom(userPoint, 18);
                        var marker = new BMap.Marker(userPoint);
                        map.addOverlay(marker);
                        dispatch('getCinema')
                    } else {
                        alert("failed" + this.getStatus());
                    }
                });
            }
        },
        // 百度地图获取附近的电影院
        getCinema({
            state
        }) {
            // 配置搜索项
            var map = state.map;
            var userPoint = new BMap.Point(state.location.point.lng, state.location.point.lat)
            var options = {
                onSearchComplete: function (r) {
                    if (local.getStatus() == BMAP_STATUS_SUCCESS) {
                        console.log(r);
                        // 搜索结果去重
                        r.forEach((ele, index) => {
                            if (index === 0) {
                                state.cinemaList = ele.Br;
                            } else {
                                ele.Br.forEach(el => {
                                    if (state.cinemaList.every(e => e.uid !== el.uid)) {
                                        state.cinemaList.push(el)
                                    }
                                })
                            }
                        })
                        console.log(state.cinemaList);
                        // 获取当前位置到电影院的距离，添加到电影院对象的属性中，单位‘米’
                        state.cinemaList.forEach(el => {
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
            local.search(['影院', '电影院'])
        }
    }
}
export default BaiduMap