const newApp = new Vue({
    el:"#app",
    data:{
        showModal:false,
        count:0,
        store:[
            {
                toShowClick:true,
                toShowOnHover: false,
                name:"Drums",
                type:"Percussion",
                price:"$700",
                brand:"Yamaha",
                color:"green",
                img:"https://static.roland.com/assets/images/products/gallery/vad506_front_gal.jpg"
            },
            {
                toShowClick:true,
                toShowOnHover: false,
                name:"Flute",
                type:"Woodwind",
                price:"$150",
                brand:"Yamaha",
                color:"green",
                img:"https://www.musikalessons.com/blog/wp-content/uploads/2016/05/silver-flute-isolated.jpg?x55391"
            },
            {
                toShowClick:true,
                toShowOnHover: false,
                name:"Guitar",
                type:"String",
                price:"$1200",
                brand:"Fender",
                color:"red",
                img:"https://www.collingsguitars.com/img/instrument-detail/full-size/d1/d1-1-lg.jpg"
            },
            {
                toShowClick:true,
                toShowOnHover: false,
                name:"Trumpet",
                type:"Brass",
                price:"$900",
                brand:"Fender",
                color:"red",
                img:"https://114wk477flw1njsv40qfmijr-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-12.41.04-PM.png"
            },
            {
                toShowClick:true,
                toShowOnHover: false,
                name:"Piano",
                type:"Percussion",
                price:"$8000",
                brand:"Maton",
                color:"blue",
                img:"https://www.musikalessons.com/blog/wp-content/uploads/2017/06/grand-piano--300x300.jpg"
            },
            {
                toShowClick:true,
                toShowOnHover: false,
                name:"Violin",
                type:"string",
                price:"$550",
                brand:"Maton",
                color:"blue",
                img:"https://luisandclark.com/wp-content/uploads/2012/01/LuisandClarkVIOLIN_2K.jpg"
            }
        ],
        cart:[""],
    }
})