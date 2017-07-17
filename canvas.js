(() => {
    var canvas = new fabric.Canvas('canvas');

    canvas.setHeight(400);
    canvas.setWidth(600);

    var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 20,
        height: 20
    })

    canvas.add(rect);

})();