AFRAME.registerComponent("game-play",
{
    schema:{
        element_id : {type:"string", default:"#ring1"}
    },
    update:function(){
        this.collision(this.data.element_id);
    },
    collision:function(e_id){
        const element = document.querySelector(e_id);
        element.addEventListener("collide",()=>{
            if(e_id.includes("#ring")){
                console.log("Collided with " + e_id)
            }
            else if(e_id.includes("#hurdle")){
                console.log("Collided with " + e_id)
            }
        })
        
    }
})