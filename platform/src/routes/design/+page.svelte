<script lang="ts">
    import * as THREE from "three";
    import * as OBC from "@thatopen/components";

    let container: HTMLElement;

    $effect(() => {
        const components = new OBC.Components();
        const worlds = components.get(OBC.Worlds);
        const world = worlds.create();

        world.scene = new OBC.SimpleScene(components);
        world.renderer = new OBC.SimpleRenderer(components, container);
        world.camera = new OBC.SimpleCamera(components);

        components.init();
        world.scene.setup();

        world.scene.three.background = null;
        const material = new THREE.MeshLambertMaterial({ color: "#6528D7" });
        const geometry = new THREE.BoxGeometry();
        const cube = new THREE.Mesh(geometry, material);
        world.scene.three.add(cube);
        world.camera.controls.setLookAt(3, 3, 3, 0, 0, 0);
    });
</script>

<div>
    <h1>Design Page</h1>
    <div
        id="screen"
        bind:this={container}
        style="width: 100%; height: 100%;"
    ></div>
</div>
