import * as THREE from "three";
import * as OBC from "@thatopen/components";
import Stats from "stats.js";

export class DesignScreen {
  private container: HTMLElement;
  private debug = true;
  private components;
  private world;
  private stats;

  constructor(container: HTMLElement) {
    this.container = container;

    this.components = new OBC.Components();
    const worlds = this.components.get(OBC.Worlds);
    this.world = worlds.create();
  }

  initializeComponent() {
    console.log("INIT Screen");
    this.world.scene = new OBC.SimpleScene(this.components);
    this.world.renderer = new OBC.SimpleRenderer(
      this.components,
      this.container,
    );
    this.world.camera = new OBC.SimpleCamera(this.components);

    this.components.init();
    this.world.scene.setup();

    this.world.scene.three.background = null;
    const material = new THREE.MeshLambertMaterial({ color: "#6528D7" });
    const geometry = new THREE.BoxGeometry();
    const cube = new THREE.Mesh(geometry, material);
    this.world.scene.three.add(cube);
    this.world.camera.controls?.setLookAt(3, 3, 3, 0, 0, 0);

    if (this.debug) {
      this.stats = new Stats();
      this.stats.showPanel(2);
      this.container.append(this.stats.dom);
      this.world.renderer.onBeforeUpdate.add(() => this.stats.begin());
      this.world.renderer.onAfterUpdate.add(() => this.stats.end());
    }
  }
}
