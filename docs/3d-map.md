## 3D Map

**Technologies**

- Three.js              :   a JavaScript library for 3D graphics on the web.
- HTML,CSS,JavaScript   :   for structure, styling, and logic.
- GLTF/GLB              :   standard format for 3D models.
- Blender               :   to design the 3D map.

**Set up project folder**

- index.html  :    main webpage
- style.css   :    for styling the page
- script.js   :    for JavaScript logic
- models/     :    a folder to store the 3D model (e.g., map.glb)
- assets/     :    for images, sounds, icons, etc.

**Prepare Your Environment in VSC**

- Open a terminal in VSC and
- Install the Three.js library for 3D rendering.

**Create a 3D Map Model**

- Use Blender to model the fictional world. Export the model as a .glb file.
- Alternatively, use a free 3D model from sites like Sketchfab or Poly Haven.
- Save the model in the models/ folder with the name map.glb.

**Build the Website Code**

- Create index.html for the structure of the site.
- Create style.css for the page styling.
- Create script.js to load the 3D model and add interactions (zoom, rotate, click).

**Add Interactivity**

With Three.js :
- Display the 3D model on the page.
- Allow users to zoom and rotate the map with the mouse.
- Detect clicks on specific parts of the map.
- Show information about each place when clicked.

**Test the Project**