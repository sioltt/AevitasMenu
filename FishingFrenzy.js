(function() {
    // 1. Create the Menu Container
    const menu = document.createElement('div');
    menu.id = 'blooket-mod-menu';
    menu.style = `
        position: fixed; top: 50px; left: 50px; width: 220px; 
        background: #2c3e50; color: white; border: 2px solid #3498db; 
        border-radius: 10px; z-index: 9999; padding: 15px; 
        font-family: sans-serif; box-shadow: 0px 5px 15px rgba(0,0,0,0.5);
    `;

    // 2. Add a Header
    menu.innerHTML = `
        <h3 style="margin: 0 0 10px 0; text-align: center; color: #3498db;">Modulus Frenzy</h3>
        <p style="font-size: 10px; text-align: center;">Press "M" to Toggle</p>
        <hr border="1" color="#34495e">
        <button id="weight-hack" style="width:100%; margin-top:10px; cursor:pointer;">Set Weight: 100k</button>
        <button id="lure-hack" style="width:100%; margin-top:10px; cursor:pointer;">Max Lure</button>
        <button id="auto-answer" style="width:100%; margin-top:10px; cursor:pointer;">Auto-Answer: OFF</button>
    `;

    document.body.appendChild(menu);

    // 3. Make it Draggable (Basic logic)
    let isDragging = false;
    menu.onmousedown = (e) => { isDragging = true; };
    document.onmousemove = (e) => {
        if (isDragging) {
            menu.style.left = e.clientX - 100 + 'px';
            menu.style.top = e.clientY - 20 + 'px';
        }
    };
    document.onmouseup = () => { isDragging = false; };

    // 4. Toggle Visibility with "M" Key
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'm') {
            menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        }
    });

    // 5. Button Functionality
    document.getElementById('weight-hack').onclick = () => {
        try {
            const state = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state;
            state.weight = 100000;
            alert('Weight set to 100,000!');
        } catch (err) {
            alert('Make sure you are IN a game first!');
        }
    };

    document.getElementById('auto-answer').onclick = function() {
        this.innerHTML = "Auto-Answer: ON";
        this.style.backgroundColor = "#27ae60";
        // Here you would add the loop that finds the 'correct' button in the React props
        console.log("Auto-Answer script activated.");
    };

})();