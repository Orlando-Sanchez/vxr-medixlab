let showCloth=false

AFRAME.registerComponent('attach-point-v2', {
  schema: {
    objClass: { default: 'magn' },

  },
  init: function () {
    let data = this.data;
    var el = this.el;
    this.el.addEventListener('collide', function (e) {
      let classes = e.detail.body.el.className.split(' ')
      if (classes.includes(data.objClass)) {
        let x = document.getElementById("static-heparinseal")
        x.setAttribute("visible", "true")
        e.detail.body.el.remove();
      }
      if (classes.includes("vxr-obj-MedicalClothe")) {
        let medicalClothe = document.getElementById("StaticMedicalClothe")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();

      }

      if (classes.includes("vxr-obj-Tape-Bow")) {
        let medicalClothe = document.getElementById("Static-Tape-Bow")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      }

      if (classes.includes("vxr-obj-Tape-Butterfly")) {
        let medicalClothe = document.getElementById("Static-Tape-Butterfly")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      }
      if (classes.includes("vxr-obj-Tape-Normal")) {
        let medicalClothe = document.getElementById("Static-Tape-Normal")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      }

      if (classes.includes("vxr-obj-rubber")) {
        let medicalClothe = document.getElementById("Static-vxr-obj-rubber")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      }

      if (classes.includes("vxr-obj-Clamp")) {
        let medicalClothe = document.getElementById("e-ClampClosed")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      }

      if (classes.includes("vxr-obj-allistweezers")) {
        let medicalClothe = document.getElementById("e-Cordon_Tijera")
        medicalClothe.setAttribute("dynamic-body", "")
        // e.detail.body.el.remove();
      }
       
      if (classes.includes("vxr-obj-CleftGauze")) {
        let medicalClothe = document.getElementById("e-CleftGauze_Close")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
        let baby = document.getElementById("baby")
        baby.setAttribute("dynamic-body","mass:0")        
      }

      if (classes.includes("vxr-obj-CleftGauze")) {
        let medicalClothe = document.getElementById("e-CleftGauze_Close")
        medicalClothe.setAttribute("visible", "true")
        let baby = document.getElementById("baby")
        baby.setAttribute("dynamic-body","mass:0")  
        e.detail.body.el.remove();
      
      }


      if(data.objClass=="balance" && classes.includes("vxr-obj-Baby_Vacuna")){
        console.log("working, harder, make it better")
        console.log(this.el.getObject3D("mesh").getWorldPosition())

        let colliderSphere= this.el.object3D;
        e.detail.body.el.setAttribute("triggerlerp", colliderSphere.getWorldPosition)
        console.log(this.el.getObject3D("mesh").getWorldPosition())
        showCloth=true;
        this.el.remove();
      }
      console.log("place: ", data.objClass, "clases", classes)

      if (classes.includes("vxr-obj-Baby_Vacuna") && showCloth && data.objClass!="balance") {
        let medicalClothe = document.getElementById("id-e-staticbaby")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
           
      }

      

      console.log("the class is: ", data.objClass)
    });
  }
})