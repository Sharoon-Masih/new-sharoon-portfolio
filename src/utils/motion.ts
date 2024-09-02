export const mobNav = (active: boolean) => {
    return {
        hidden: {
            opacity: 0,
            y: 15,

        },
        show: {
            opacity: 1,
            y: active ? 0 : 15,
            transition: {
                ease: 'easeOut',
                duration: 0.3,
            }
        }
    }
}

export const crossBtn = (y: number, rotation: number, active: boolean) => {
    return {
        hidden: {
            opacity: 1,
            width: '20px',
            height: '8px'
        },
        show: {
            opacity: 1,
            rotate: active ? rotation : 0,
            y: active ? y : 0,
        }
    }
}

export const underline = (hover: boolean) => {
    return {
        hidden: {
            width: 0
        },
        show: {
            width: hover ? '100%' : 0,
            transition: {
                ease: 'easeIn',
                duration: 0.1
            }
        }
    }
}
export const iconContainer = {
    hidden: {
        opacity: 0,
        x:-10
    },
    show: (i = 1) => ({  //basically yaha yeh func iss lia banaya hai taka "i" ko ek default value dedi ka agr value specify na ho toh "1" ka A/c delay time set kro warna agr value mil jaye toh phr multiple hoka then delay set hoga wo iss taka animation start kitna time bd hogi uska liya or wo depend krega ka container ma kitna child hain toh basically "i" ko number of child provide krna hongay.  
        opacity: 1,
        x:0,
        transition: { type:'tween',duration:0.2, delay: i * 0.2 },
    }),
};

// export const FadeIn= (direction:string, type:string, duration:number, delay:number) => {
//     return {
//         hidden: {
//             x: direction === "left" ? 100 : direction === "right" ? "-100%" : 0,
//             y: direction === "up" ? 100 : direction === "down" ? "-100%" : 0,
//             opacity: 0
//         },
//         show: {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             transition: {
//                 type: type,
//                 duration: duration,
//                 delay: delay,
//                 ease: "easeOut"
//             }
//         }

//     }
// }