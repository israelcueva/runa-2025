# RUNA - 2025

Welcome to the website of the **RUNA 2025** project. In this document, the tasks to be performed will be added, as well as the progress and errors of the same.

## Tasks

The task list is based on the [oficial site](https://israelcueva.github.io/colegio-docs/#/3-secundaria/proyecto).

- [x] Add Bootstrap on local mode.
- [x] Add Bootstrap Icons on local mode.
- [x] Test Boostrap Styles and Icons.
- [x] Level 1: Complete.
- [ ] Level 2: In progress.

### Add Boostrap on local mode

**Bootstrap**
---

- Save https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css on `css` folder.
- link `bootstrap.min.css` on header: `<link rel="stylesheet" href="res/css/bootstrap.min.css">`.
- Save https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js on `js` folder.
- link `bootstrap.bundle.min.js` before `</body>`: `<script src="res/js/bootstrap.bundle.min.js"></script>`

**Icons**
---

- Save https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css on `css` folder.
- link `bootstrap-icons.min.css` on header: 
- Save [fonts](https://github.com/twbs/icons/releases/download/v1.13.1/bootstrap-icons-1.13.1.zip) folder on `css` folder.

- Test Boostrap styles and icons on index ✅.

## Equipos

- Project Manager: Pepito

### 3D Map
**Technologies:**
-Three.js              :   a JavaScript library for 3D graphics on the web.
-HTML,CSS,JavaScript   :   for structure, styling, and logic.
-GLTF/GLB              :   standard format for 3D models.
-Blender               :   to design the 3D map.

**Set up project folder**
index.html  :    main webpage
style.css   :    for styling the page
script.js   :    for JavaScript logic
models/     :    a folder to store the 3D model (e.g., map.glb)
assets/     :    for images, sounds, icons, etc.

**Prepare Your Environment in VSC**
Open a terminal in VSC and
Install the Three.js library for 3D rendering.

**Create a 3D Map Model**
-Use Blender to model the fictional world. Export the model as a .glb file.
-Alternatively, use a free 3D model from sites like Sketchfab or Poly Haven.
Save the model in the models/ folder with the name map.glb.

**Build the Website Code**
Create index.html for the structure of the site.
Create style.css for the page styling.
Create script.js to load the 3D model and add interactions (zoom, rotate, click).

**Add Interactivity**
With Three.js :
-Display the 3D model on the page.
-Allow users to zoom and rotate the map with the mouse.
-Detect clicks on specific parts of the map.
-Show information about each place when clicked.

**Test the Project**





