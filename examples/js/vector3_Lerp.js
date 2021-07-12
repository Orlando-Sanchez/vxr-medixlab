AFRAME.registerComponent('triggerlerp', {
  schema: {
    time: { default: 1 },
    position:{default: {x:1,y:1,z:1}}
  },

  init() {
    let startLerp = false;
    let alpha = 0
    let cubeMesh = this.el.object3D;
    console.log("cubeMesh: ", cubeMesh)
    // let v1 = new THREE.Vector3(0, 2, -3)
    let v1 = cubeMesh.getWorldPosition();
    let v2 = position
    // let v2 = new THREE.Vector3(0, 5, -3) // cubeMesh.getWorldPosition();
    //let v2=cubeMesh.getWorldPosition();
    var that = this;
    this.trigger = this.trigger.bind(this);

    document.addEventListener('keyup', function () {
      var started = Date.now();
      let iterator = 0;

      // make it loop every 100 milliseconds
      var interval = setInterval(function () {
        iterator += 0.001
         if (Date.now() - started > 1000) {

          // and then pause it
          clearInterval(interval);

        } else {
          cubeMesh.position.lerpVectors(v1, v2, iterator);
        }
      }, 1);
    });


  },

  trigger() {
  },


  update: function () {
  }

});