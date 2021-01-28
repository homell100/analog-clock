const myApp = Vue.createApp({
    data(){
        return{
            canvas: undefined,
            hours: undefined,
            minutes: undefined,
            seconds: undefined
        }
    },
    created(){
        setInterval(() => {
            var date = new Date()
            this.hours = date.getHours()
            this.minutes = date.getMinutes()
            this.seconds = date.getSeconds()
        }
        , 1000)
    },
    mounted(){
        var c = document.getElementById("canvas")
        var widthContainer = c.width
        var heightContainer = c.height
        this.canvas = c.getContext("2d")
        // this.canvas.fillRect(25,25,100,100)
        
        var width = Math.floor(widthContainer/2)
        var height = Math.floor(heightContainer/2)
        this.drawCircle(width,height)

        
    }, 
    methods:{
        drawCircle(width, height){          
            this.canvas.beginPath()
            this.canvas.arc(
                x = width,
                y = height,
                r = Math.min(width,height),
                sAngle = 0,
                eAngle = Math.PI * 2)
            this.canvas.stroke()
            console.log("Circle created")
        },
        drawTicks(){

        },
        drawNumbers(){

        }
    }
})

myApp.mount("body")

//Draw face
//Draw numbers
//Draw hands


//We can draw many things in the canvas, for example, to draw a line inside a js script:
/* <script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
</script> */


//STEPS
//Draw circle (make it responsive)
//Draw numbers around the circle
//Draw the arms
//Control the position of the arms depending on the value of the time