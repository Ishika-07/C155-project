//Sea Rotation
AFRAME.registerComponent("sea-rotation", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.5) {
            this.data.speedOfRotation += 0.1;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.5) {
            this.data.speedOfRotation -= 0.1;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
    }
  });
  
  
  //Diver
  AFRAME.registerComponent("diver",
  {
    schema:{
      speedOfRotation:{type:"number", default:0},
      speedOfPosition:{type:"number", default:0}
    },
    init:function(){
      window.addEventListener("keydown",(i)=>{
        this.data.speedOfRotation = this.el.getAttribute("rotation")
        this.data.speedOfPosition = this.el.getAttribute("position")
        if(i.key=="ArrowRight"){
          if(this.data.speedOfRotation.x>-10){
            this.data.speedOfRotation.x -= 0.5
            this.el.setAttribute("rotation",this.data.speedOfRotation)
          }
        }
        if(i.key=="ArrowLeft"){
          if(this.data.speedOfRotation.x< 10){
            this.data.speedOfRotation.x += 0.5
            this.el.setAttribute("rotation",this.data.speedOfRotation)
          }
        }
        if(i.key=="ArrowUp"){
          if(this.data.speedOfRotation.z < 10){
            this.data.speedOfRotation.z += 0.5
            this.el.setAttribute("rotation",this.data.speedOfRotation)
          }
          if(this.data.speedOfPosition.y < 2){
            this.data.speedOfPosition.y += 0.5
            this.el.setAttribute("position",this.data.speedOfPosition)
          }
        }
        if(i.key=="ArrowDown"){
          if(this.data.speedOfRotation.z >- 10){
            this.data.speedOfRotation.z -= 0.5
            this.el.setAttribute("rotation",this.data.speedOfRotation)
          }
          if(this.data.speedOfPosition.y >- 2){
            this.data.speedOfPosition.y -= 0.5
            this.el.setAttribute("position",this.data.speedOfPosition)
          }
        }
      })
  
      
    }
  })
  
  
  