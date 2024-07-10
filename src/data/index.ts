import { v4 as uuid } from 'uuid';
import { IInputList, IProduct } from '../Interfaces/index';

export const productList: IProduct[] = [
    {
        id: uuid(),
        title: "BMW 2022",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nulla cumque nihil hic nesciunt, iure incidunt iusto in excepturi vero eum dolores quos neque quis harum pariatur sint, perspiciatis eius.",
        imgURL: "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1652787822/evo/2022/05/2022%20BMW%203series%20facelift%20May%2022-2.jpg",
        price: "$500,000", 
        color: ["#FF0000", "#4169E1", "#C0C0C0", "#00000"], 
        category: {
            name: "cars",
            imgURL: "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1652787822/evo/2022/05/2022%20BMW%203series%20facelift%20May%2022-2.jpg",
        }
    },
    {
        id: uuid(),
        title: "Marcids 2024",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nulla cumque nihil hic nesciunt, iure incidunt iusto in excepturi vero eum dolores quos neque quis harum pariatur sint, perspiciatis eius.",
        imgURL: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/yumbvjpqiukmlg0q9cuw",
        price: "$350,000", 
        color: ["#FFF0F5", "#FFD700", "#C0C0C0", "#00000"], 
        category: {
            name: "cars",
            imgURL: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/yumbvjpqiukmlg0q9cuw",
        }
    },
    {
        id: uuid(),
        title: "Rangrover 2023",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nulla cumque nihil hic nesciunt, iure incidunt iusto in excepturi vero eum dolores quos neque quis harum pariatur sint, perspiciatis eius.",
        imgURL: "https://media.cdn-jaguarlandrover.com/api/v2/images/93414/w/1000",
        price: "$650,000", 
        color: ["#FF0000", "#4169E1", "#C0C0C0", "#00000"], 
        category: {
            name: "cars",
            imgURL: "https://media.cdn-jaguarlandrover.com/api/v2/images/93414/w/1000",
        }
    },
    {
        id: uuid(),
        title: "Toyota 2023",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nulla cumque nihil hic nesciunt, iure incidunt iusto in excepturi vero eum dolores quos neque quis harum pariatur sint, perspiciatis eius.",
        imgURL: "https://images.pexels.com/photos/2036544/pexels-photo-2036544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: "$250,000", 
        color: ["#FF0000", "#4169E1", "#C0C0C0", "#00000"], 
        category: {
            name: "cars",
            imgURL: "https://images.pexels.com/photos/2036544/pexels-photo-2036544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }
    },
    {
        id: uuid(),
        title: "Lanser 2020",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nulla cumque nihil hic nesciunt, iure incidunt iusto in excepturi vero eum dolores quos neque quis harum pariatur sint, perspiciatis eius.",
        imgURL: "https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: "$300,000", 
        color: ["#FF0000", "#4169E1", "#C0C0C0", "#00000"], 
        category: {
            name: "cars",
            imgURL: "https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }
    },
    {
        id: uuid(),
        title: "Hunday 2022",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nulla cumque nihil hic nesciunt, iure incidunt iusto in excepturi vero eum dolores quos neque quis harum pariatur sint, perspiciatis eius.",
        imgURL: "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "$280,000", 
        color: ["#FF0000", "#4169E1", "#C0C0C0", "#00000"], 
        category: {
            name: "cars",
            imgURL: "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=600",
        }
    },
    {
        id: uuid(),
        title: "Bogaty 2024",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nulla cumque nihil hic nesciunt, iure incidunt iusto in excepturi vero eum dolores quos neque quis harum pariatur sint, perspiciatis eius.",
        imgURL: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/04/06/11/bugatti-chiron-201-web-ac-153.jpg?crop=8:5,smart&quality=75&auto=webp&width=1024",
        price: "$700,000", 
        color: ["#FF0000", "#4169E1", "#C0C0C0", "#00000"], 
        category: {
            name: "cars",
            imgURL: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/04/06/11/bugatti-chiron-201-web-ac-153.jpg?crop=8:5,smart&quality=75&auto=webp&width=1024",
        }
    },
    {
        id: uuid(),
        title: "Oudi 2022",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nulla cumque nihil hic nesciunt, iure incidunt iusto in excepturi vero eum dolores quos neque quis harum pariatur sint, perspiciatis eius.",
        imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKlprKai2klxGDjLtinXUh9DDif-LUwF3jYxpF3wLGgtoqCMzd3fpd6-LhaWAkYULtT6M&usqp=CAU",
        price: "$550,000", 
        color: ["#FF0000", "#4169E1", "#C0C0C0", "#00000"], 
        category: {
            name: "cars",
            imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKlprKai2klxGDjLtinXUh9DDif-LUwF3jYxpF3wLGgtoqCMzd3fpd6-LhaWAkYULtT6M&usqp=CAU",
        }
    },
    {
        id: uuid(),
        title: "Lamborginy 2023",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nulla cumque nihil hic nesciunt, iure incidunt iusto in excepturi vero eum dolores quos neque quis harum pariatur sint, perspiciatis eius.",
        imgURL: "https://medialamborghini-meride-tv.akamaized.net/meride/lamborghini/video/images/folder1/1093/vlcsnap-2022-06-13-11h54m18s552.png",
        price: "$500,000", 
        color: ["#FF0000", "#4169E1", "#C0C0C0", "#00000"], 
        category: {
            name: "cars",
            imgURL: "https://medialamborghini-meride-tv.akamaized.net/meride/lamborghini/video/images/folder1/1093/vlcsnap-2022-06-13-11h54m18s552.png",
        }
    },
    {
        id: uuid(),
        title: "Pntly 2022",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nulla cumque nihil hic nesciunt, iure incidunt iusto in excepturi vero eum dolores quos neque quis harum pariatur sint, perspiciatis eius.",
        imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC3n1liD7RKVf5u1836Ym_VCQ1eeVEZrMrA&s",
        price: "$500,000", 
        color: ["#FF0000", "#4169E1", "#C0C0C0", "#00000"], 
        category: {
            name: "cars",
            imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC3n1liD7RKVf5u1836Ym_VCQ1eeVEZrMrA&s",
        }
    }

];

export const fromInputList:IInputList[] = [
    {
        id:"title",
        lable:"title",
        name:"Product Title",
        type:"text",
    },
    {
        id:"description",
        lable:"description",
        name:"Product Description",
        type:"text",
    },
    {
        id:"img",
        lable:"imageURL",
        name:"Product Image URL",
        type:"text",
    },
    {
        id:"price",
        lable:"price",
        name:"Product Price",
        type:"text",
    }
 
]