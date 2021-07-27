AFRAME.registerComponent("coin", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `coin${i}`;

      //position variables
      var posX = Math.random() * 100 + (-50);      
      var posY = Math.random() * 5 + (-5);
      var posZ = Math.random() * 60 + -40;

      var position = { x: posX, y: posY, z: posZ };

      this.createCoins(id, position);
    }
  },

  createCoins: function(id,position) {
    var terrainEl = document.querySelector("#terrain");
    var coinEl = document.createElement("a-entity");

    coinEl.setAttribute("id",id);
    coinEl.setAttribute("material","color","#ff9100");
    coinEl.setAttribute("position",position);
    coinEl.setAttribute("gltf-model", "./assets/coins/scene.gltf");

    coinEl.setAttribute("animation-mixer", {});
    coinEl.setAttribute("static-body",{
      shape:"sphere", 
      sphereRadius: 2
    })

    coinEl.setAttribute("game-play",{
      element_id : `#${id}`
    })
    terrainEl.appendChild(coinEl);
  }
});
