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

<div class="screen">
    <div class="header">
        <h1>Design Page</h1>
    </div>
    <div class="workspace">
    <div class="editor">
    <div class="editor-view"
        bind:this={container}
    ></div>
    </div>
    <div class="panel"></div>
    </div>
</div>

<style lang="scss">
    .screen {
        flex: 1;
        display: flex;
        flex-direction: column;
        .workspace {
            flex: 1;
            display: flex;
            .editor{
                flex: 1;
                .editor-view {
                    width: 100%;
                    max-height: 100%;
                    aspect-ratio: 16/9;
                }
            }
            .panel {width: 360px;}
        }
    }
</style>