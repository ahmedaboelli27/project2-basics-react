import { v4 as uuid } from 'uuid';
import { ICategory, IInputList, IProduct } from '../Interfaces/index';

export const productList: IProduct[] = [
    {
        id: uuid(),
        title: "BMW 2022",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nulla cumque nihil hic nesciunt, iure incidunt iusto in excepturi vero eum dolores quos neque quis harum pariatur sint, perspiciatis eius.",
        imgURL: "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1652787822/evo/2022/05/2022%20BMW%203series%20facelift%20May%2022-2.jpg",
        price: "500,000", 
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
        price: "350,000", 
        color: ["#191970", "#FFD700", "#C71585", "#00000"], 
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
        price: "650,000", 
        color: ["#EEE8AA", "#4169E1", "#C0C0C0", "#FFA500"], 
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
        price: "250,000", 
        color: ["#FF0000", "#FAEBD7", "#A52A2A", "#FFFF00"], 
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
        price: "300,000", 
        color: ["#FF0000", "#4169E1", "#C0C0C0", "#FF7F50"], 
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
        price: "280,000", 
        color: ["#006400", "#4169E1", "#C0C0C0", "#00000"], 
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
        price: "700,000", 
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
        price: "550,000", 
        color: ["#9400D3", "#4169E1", "#8FBC8F", "#FF1493"], 
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
        price: "500,000", 
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
        price: "500,000", 
        color: ["##DAA520", "#4169E1", "#008000", "#F0E68C"], 
        category: {
            name: "cars",
            imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC3n1liD7RKVf5u1836Ym_VCQ1eeVEZrMrA&s",
        }
    }

];

export const fromInputList:IInputList[] = [
    {
        id:"title",
        lable:"Product Title",
        name:"title",
        type:"text",
    },
    {
        id:"description",
        lable:"Product Description",
        name:"description",
        type:"text",
    },
    {
        id:"img",
        lable:"Product Image URL",
        name:"imgURL",
        type:"text",
    },
    {
        id:"price",
        lable:"Product Price",
        name:"price",
        type:"text",
    }
 
]

export const Colors: string[] = [
    "#0000FF",
    "#000000",
    "#5F9EA0",
    "#DEB887",
    "#6495ED",
    "#B8860B",
    "#00008B",
    "#8B008B",
    "#FF1493",
    "#4B0082"
]


export const Ctegories: ICategory[] = [
    {
        id: uuid(),
        name: 'BMW2022',
        imgURL:
          'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1652787822/evo/2022/05/2022%20BMW%203series%20facelift%20May%2022-2.jpg',
      },
      {
        id: uuid(),
        name: 'TOYOTA2018',
        imgURL:
          'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/17q3/685272/toyota-for-2018-whats-new-feature-car-and-driver-photo-691011-s-original.jpg',
      },
      {
        id: uuid(),
        name: 'Audi2021',
        imgURL:
          'https://hips.hearstapps.com/hmg-prod/images/2021-audi-s7-mmp-1-1590690728.jpg',
      },
      {
        id: uuid(),
        name: 'Honda2019',
        imgURL:
          'https://di-uploads-pod18.dealerinspire.com/executivehonda/uploads/2019/05/2019-CR-V.jpg',
      },
      {
        id: uuid(),
        name: 'Mercedes2020',
        imgURL:
          'https://www.autotrader.ca/editorial/media/190424/2020-mercedes-benz-c-300-03-jm.jpg?width=1920&height=1080&v=1d6d29de644b810',
      },
      {
        id: uuid(),
        name: 'Ford2017',
        imgURL:
          'https://cdn.motor1.com/images/mgl/zjKK6/s1/2017-ford-fusion.jpg',
      },
      {
        id: uuid(),
        name: 'Chevrolet2018',
        imgURL:
          'https://di-uploads-pod2.dealerinspire.com/greggyoungchevyomaha/uploads/2017/08/2018-Chevrolet-Malibu-Exterior-1.jpg',
      },
      {
        id: uuid(),
        name: 'Tesla2020',
        imgURL:
          'https://cdn.motor1.com/images/mgl/R07qr/s1/tesla-roadster.jpg',
      },
      {
        id: uuid(),
        name: 'IIHS2022',
        imgURL:
          'https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/2883/',
      },
      {
        id: uuid(),
        name: 'Nissan2020',
        imgURL:
          'https://hips.hearstapps.com/hmg-prod/images/2020-nissan-kicks-mmp-1-1579200513.jpg',
      },
  ]