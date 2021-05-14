const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userName = urlParams.get('name');
const spawn = urlParams.get('spawn');

document.addEventListener('DOMContentLoaded', () => {                           
  const scene = document.querySelector('a-scene');
  const sceneLoaded = () => {
    if ( userName && spawn ) {
        document.getElementById("spectator").setAttribute("networked", "template:#spectator-avatar-template;attachTemplateToLocal:false;");
        document.getElementById("constraint-spectator").setAttribute("networked", "template:#constraint-spectator-avatar-template;attachTemplateToLocal:false;");
    }
  }
  if (scene.hasLoaded) {                                                         
    sceneLoaded();
  } else {
    scene.addEventListener('loaded', sceneLoaded);
  }
});

AFRAME.registerComponent('name-up', {
    
    schema: {
        name: { default: userName }
    },

    update: function () {
        var el = this.el;

        el.setAttribute("text", { value: this.data.name, align: 'center', side: 'double', color: 'yellow' });
        el.setAttribute('rotation',
          '0 180 0',
        );
        el.setAttribute('position', {
<<<<<<< HEAD
          x: 0, y: 0.525, z: 0,
        });
        el.setAttribute('scale',
          '6 6 6',
=======
            x: 0.3, y: 0.4, z: 0,
        });
        el.setAttribute('scale',
            '0.25 0.25 0.25',
>>>>>>> master
        );
    }
});