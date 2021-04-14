canvas = new fabric.Canvas("myCanvas");
bodyPart_img_width = 30;
bodyPart_img_height = 30;

player_object = "";
bodyPart_img_object = "";

function player_update(){
    fabric.Image.fromURL("player.png",function (Img)
    {
bodyPart_object = Img;
bodyPart_object.scaleToWidth(150);
bodyPart_object.scaleToHeight(140);
bodyPart_object.set({
    top:player_y, 
    left:player_x

});
canvas.add(player_object);
    }
    );
    
}



function new_image(get_img){
    fabric.Image.fromURL(get_img,function (Img)
    {
bodyPart_img_object = Img;
bodyPart_img_object .scaleToWidth(block_img_width);
bodyPart_img_object .scaleToHeight(block_img_height);
bodyPart_img_object .set({
});
canvas.add(block_img_object );
    }
    );
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode; 
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift button pressed together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = bodyPart_img_width;
        document.getElementById("current_height").innerHTML = bodyPart_img_height;
       
    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift pressed together");
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10
        document.getElementById("current_width").innerHTML = bodyPart_img_width;
        document.getElementById("current_height").innerHTML = bodyPart_img_height;
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
        
    }
    if(keyPressed=='38'){
        up();
        console.log("up");
        
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
        
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
        
    }
    if(keyPressed=='87'){
        new_image("wing.png");
        console.log("w");
    }
    if(keyPressed=='71'){
        new_image("GiraffeNeck.jpg");
        console.log("g");
    }
    if(keyPressed=='76'){
        new_image("lionhead.png");
        console.log("l");
    }
    if(keyPressed=='84'){
        new_image("tail.png");
        console.log("t");
    }
    if(keyPressed=='66'){
        new_image("hippobod.png");
        console.log("b");
    }
    if(keyPressed=='89'){
        new_image(".png");
        console.log("y");
    }
    if(keyPressed=='68'){
        new_image("dark_green.png");
        console.log("d");
    }
    if(keyPressed=='85'){
        new_image("unique.png");
        console.log("u");
    }
    if(keyPressed=='72'){
        new_image("horseleg.jpg");
        console.log("h");
    }
}

function up(){
    if(player_y > 0){
        player_y = player_y - bodyPart_img_height;
        console.log("up arrow will be pressed");
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y < 500){
        player_y = player_y + bodyPart_img_height;
        console.log("down arrow will be pressed");
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x > 0){
        player_x = player_x - bodyPart_img_width;
        console.log(" arrow left will be pressed");
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x < 700){
        player_x = player_x + bodyPart_img_width;
        console.log(" arrow right will be pressed");
        canvas.remove(player_object);
        player_update();
    }
}