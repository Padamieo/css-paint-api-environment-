
class Shape {
  paint(ctx, geom, properties) {

    // ctx.strokeStyle = 'white';
    // ctx.lineCap = "round";
    // ctx.lineWidth = 5;
    // ctx.beginPath();
    // ctx.arc(i*50+Math.floor((Math.random() * 25) + 1), j*50+Math.floor((Math.random() * 25) + 1), 20, 0, 0.5*Math.PI);
    // ctx.stroke();
    // ctx.closePath();

    const shapes = [
      {l:20, s:0.5*Math.PI, e:Math.PI},
      {l:8, s:0.2*Math.PI, e:1*Math.PI},
      {l:20, s:0, e:0.5*Math.PI},
      {l:8, s:-0.3*Math.PI, e:0.2*Math.PI},
    ]

    // Determine the center point and radius.
    const x = geom.width/20;
    const y = geom.height / 2;
    //const radius = Math.min(x, y);
    const randomArray = [];
    for (let i = 0; i < 20; i++) {
      randomArray.push();
    }

    var space = 60;

    for (let i = 0; i < geom.width/space; i++) {
      for (let j = 0; j < geom.height/space; j++) {
        //console.log((i % 10 === 0));
        console.log(i,j);
        // if((j % Math.floor((Math.random() * 20) + 1) === 0)){

        // ctx.beginPath();
        // ctx.arc(i*space+Math.floor((Math.random() * space/2) + 1), j*space+Math.floor((Math.random() * space/2) + 1), 6, 0, 2 * Math.PI);
        // ctx.fill();

        ctx.lineCap = "round";
        ctx.lineWidth = 5;
        ctx.beginPath();
        // if((i % Math.floor((Math.random() * 20) + 1) === 0) && ctx.fillstyle !== '#fff'){
        const b = Math.random(i);
        if(b > 0.9){

          //dot
          ctx.fillStyle = '#fff';
          ctx.strokeStyle = '#fff';
          ctx.beginPath();
          const size = (b > 0.99 ? 6 : 4);
          //ctx.arc(i*space+Math.floor((Math.random() * space/2) + 1), j*space+Math.floor((Math.random() * space/2) + 1), size, 0, 2 * Math.PI);
          ctx.arc(i*space+(Math.random() * space/2), j*space+(Math.random() * space/2), size, 0, 2 * Math.PI);
          ctx.fill();

        }else{

          //banan
          const r = Math.floor((Math.random() * 4));
          const shape = shapes[r];
          //ctx.arc(i*space+Math.floor((Math.random() * space/2) + 1), j*space+Math.floor((Math.random() * space/2) + 1), shape.l, shape.s, shape.e);
          ctx.arc(i*space+(Math.random() * space/2), j*space+(Math.random() * space/2), shape.l, shape.s, shape.e);
          ctx.stroke();
          ctx.closePath();
          const u = Math.random(i);

          if((u < 0.2)){
            ctx.fillStyle = '#fff';
            ctx.strokeStyle = '#fff';
          }else if(u < 0.7){
            ctx.fillStyle = 'rgba(255,255,255,0.5)';
            ctx.strokeStyle = 'rgba(255,255,255,0.5)';
          }else{
            ctx.fillStyle = 'rgba(255,255,255,0.2)';
            ctx.strokeStyle = 'rgba(255,255,255,0.2)';
          }

        }


        // 20, 0.5*Math.PI, Math.PI);
        // 8, 0.2*Math.PI, 1*Math.PI);
        // 20, 0, 0.5*Math.PI);



      } //j
    } //i

  }
}

//ignore
registerPaint('awesomePattern', Shape);
