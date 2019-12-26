Vue.component("sw",{
    template:"#sw",
    data(){
        return {
            imgArr:["https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvZmVkNjAyMDAyZTZiNjRkYjVhZDg0MmEwN2U5Yjg5ODYucG5n.png","https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODBkMjY5NjYzNDJmNTM1ZjdkYmEwMjY2OTNmMmQ5ZjcucG5n.png","https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvNzY5MDExMmQ0MjIzN2Y5YTg0OWVjNjc0N2NmOGMxYWYucG5n.png"]
        }
    }
})
Vue.component("toptt",{
    template:"#topTitle",
    data(){
        return {

        }
    }
})
Vue.component("info",{
    template:"#info",
    data(){
        return {
            arr:[
                {
                    num:"12000+",
                    text:"成功案例"
                },
                {
                    num:"010+",
                    text:"解决方案"
                },
                {
                    num:"200+",
                    text:"合作伙伴"
                },
                {
                    num:"050",
                    text:"技术专利"
                }
            ]
        }
    }
})

// Vue.component("part",{
//     template:"#part",
//     props:["chan"],
//     data(){
//         return {
//             con:chan,
//         }
//     }
    
// })
var router = new VueRouter({
    routes:[
        {path:'/',component:{template:'#one',
        data(){
            return{
                arr:[
                    {title:'医疗PPP有望成后起之秀 概念股早盘活跃',content:'当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网...'},
                    {title:'国产高端医疗设备凭高性价比应对“GPS”',content:'当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网...'},
                    {title:'医疗器械国产化命脉：“供应商”转型“',content:'当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网...'}
                ],
                titleArr:[
                    {
                        "en":"NEWS",
                        "ch":"产品系列"
                    }
                ]
            }
        },
        methods: {
            link(){
                location.href="#/three"
                console.log(1);
            }
        },
    }},
        {path:'/two',component:{template:'#two'},children:[
            {path:'/',component:{
                template:'#two-one',
                data(){
                    return {
                        arr:[
                            {
                                img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                                title:"仪器设备Um350c",
                                text:"编辑设备副标题"
                            },
                            {
                                img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTQ3M2MwZWI4ODE4ZmYzM2Y5OGFmYWY1ODg2N2I4ZjgtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                                title:"仪器设备Um350c",
                                text:"编辑设备副标题"
                            },
                            {
                                img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvY2Y4YzM5NDJmMjU5YThmYmMzMDA3OWNiMTQ2NjE2MWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                                title:"仪器设备Um350c",
                                text:"编辑设备副标题"
                            },
                            {
                                img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMDE1MmFkNTI5MjBkOWM3YTY4NmM5MjZjOTNhZTczMmMtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                                title:"仪器设备Um350c",
                                text:"编辑设备副标题"
                            },
                            {
                                img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTVlZjIxODM2NWUyOGJiODdhNjkwNWE3NDI4N2IxNWQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                                title:"仪器设备Um350c",
                                text:"编辑设备副标题"
                            },
                            {
                                img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMjZmZDhlZTY1YmM4YTcwZWZkNGNhOWI3OWFmMDg1NWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                                title:"仪器设备Um350c",
                                text:"编辑设备副标题"
                            },
                            {
                                img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvN2Q4YTg0M2ZjODJjNDE3ODdkNTUxNTI1MGZjOWJjZDQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                                title:"仪器设备Um350c",
                                text:"编辑设备副标题"
                            },
                            {
                                img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvMWM4ODFjMGI3Y2JlMzcwZDUwZjNlOGIzN2U1NzE5ODYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                                title:"仪器设备Um350c",
                                text:"编辑设备副标题"
                            },
                        ]
                    }
                }
            }
        },
            {path:'two-two',component:{template:'#two-two',
            data(){
                return{
                    arr:[
                        {
                            img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                            title:"仪器设备Um350c",
                            text:"编辑设备副标题"
                        },
                        {
                            img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMDE1MmFkNTI5MjBkOWM3YTY4NmM5MjZjOTNhZTczMmMtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                            title:"仪器设备Um350c",
                            text:"编辑设备副标题"
                        },
                        {
                            img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvN2Q4YTg0M2ZjODJjNDE3ODdkNTUxNTI1MGZjOWJjZDQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                            title:"仪器设备Um350c",
                            text:"编辑设备副标题"
                        },
                    ]
                }
            }
        }},
            {path:'two-three',component:{template:'#two-three',
            data(){
                return{
                    arr:[
                        {
                            img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvY2Y4YzM5NDJmMjU5YThmYmMzMDA3OWNiMTQ2NjE2MWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                            title:"仪器设备Um350c",
                            text:"编辑设备副标题"
                        },
                        {
                            img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMjZmZDhlZTY1YmM4YTcwZWZkNGNhOWI3OWFmMDg1NWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                            title:"仪器设备Um350c",
                            text:"编辑设备副标题"
                        }
                    ]
                }
            }
        }},
            {path:'two-four',component:{template:'#two-four',
            data(){
                return{
                    arr:[
                        
                        {
                            img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTQ3M2MwZWI4ODE4ZmYzM2Y5OGFmYWY1ODg2N2I4ZjgtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                            title:"仪器设备Um350c",
                            text:"编辑设备副标题"
                        },
                        {
                            img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTVlZjIxODM2NWUyOGJiODdhNjkwNWE3NDI4N2IxNWQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                            title:"仪器设备Um350c",
                            text:"编辑设备副标题"
                        },
                        {
                            img:"https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvMWM4ODFjMGI3Y2JlMzcwZDUwZjNlOGIzN2U1NzE5ODYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                            title:"仪器设备Um350c",
                            text:"编辑设备副标题"
                        },
                    ]
                }
            }
        }},
        ]
    },
        {path:'/three',component:{
            template:'#three',
        },children:[{path:'/',component: {
            template:"#three_two1",
            data(){
                return{
                    arr:[
                        {"title":'医疗PPP有望成后起之秀 概念股早盘活跃'}
                    ]
                }
                
            }
        }},
        {path:'three_two2',component: {
            template:"#three_two2",
            data(){
                return{
                    arr:[
                        {"title":'国产高端医疗设备凭高性价比应对“GPS”垄断局面'},
                        {"title":'1243566'}
                    ]
                }
                
            }
        }},
        {path:'three_two3/:title',component: {
            template:"#three_two3",
        }},
    ]},
        {path:'/four',component:{template:'#four'}},
        {path:'/five',component:{template:'#five'}},
        {path:'/one-cont/:title',component:{template:'#one-cont'}}
    ]
})

new Vue({
    el:'#box',
    router,
})