(() => {
    let past = [];
    let present = {};
    let future = [];

    const canvas = new fabric.Canvas('canvas');

    canvas.setHeight(400);
    canvas.setWidth(600);

    let rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 20,
        height: 20
    })

    canvas.add(rect);

    canvas.on("object:modified", () => {
        past.push(present);
        present = {...canvas.toJSON()};
    })

    const undo = () => {
        future.push(present);
        present = past.pop();
        canvas.loadFromJSON(present);
    }

    const redo = () => {
        past.push(present);
        present = future.pop();
        canvas.loadFromJSON(present)
    }

    window.control = {
        undo,
        redo,
        past,
        present,
        future
    };
})();