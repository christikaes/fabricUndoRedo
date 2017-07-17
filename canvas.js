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

    fabric.Image.fromURL("https://pbs.twimg.com/profile_images/686613263811907584/Ni3AWru_.png", (img) => {
        img.set({
            width: 50,
            height: 50
        })
        canvas.add(img);
    });
    
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

    const getHistory = () => {
        return {
            past,
            present,
            future
        }
    }

    window.control = {
        undo,
        redo,
        getHistory
    };
})();