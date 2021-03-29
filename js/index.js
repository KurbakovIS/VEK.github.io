document.addEventListener('DOMContentLoaded', () => {
    ymaps.ready(init);

    function init() {
        let myMap = new ymaps.Map("map", {
            center: [55.747231, 37.583463],
            zoom: 14
        });
        let myPlacemark = new ymaps.Placemark([ 55.747231, 37.583463], {}, {
            iconLayout: 'default#image',
            iconImageHref: './img/location.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]
        });
        myMap.geoObjects.add(myPlacemark);
    }
})
