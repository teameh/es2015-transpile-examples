console.log('----- Classes.js -----');

class Mesh {
  cconstructor(geometry, materials) {
    this.geometry = geometry;
    this.materials = materials;
  }
  update(camera) {
    // do something
  }
}

class SkinnedMesh extends Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  static defaultMatrix() {
    return new Matrix();
  }
}
