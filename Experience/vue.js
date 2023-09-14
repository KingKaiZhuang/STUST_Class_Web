const app = {
    data() {
        return {
            subject: [
                {
                    imgUrl: "images/OOP.png",
                    title: "物件導向程式設計",
                    introduce: ""
                },
                {
                    imgUrl: "images/Basic Electricity.gif",
                    title: "基本電學",
                    introduce:""
                },
                {
                    imgUrl: "images/Basic Web Design.png",
                    title: "基礎網頁設計",
                    introduce:""
                },
                {
                    imgUrl: "images/Linux System Overview.png",
                    title: "Linux系統概論",
                    introduce:""
                },
                {
                    imgUrl: "images/Foundations of Digital Design.png",
                    title: "數位邏輯概論",
                    introduce:""
                },
                {
                    imgUrl: "images/Basic programming.png",
                    title: "基礎程式設計",
                    introduce:""
                },
                {
                    imgUrl: "images/Introduction to Computers.gif",
                    title: "計算機概論",
                    introduce:""
                },
                {
                    imgUrl: "images/application package.png",
                    title: "套裝軟體應用",
                    introduce:""
                },
                {
                    imgUrl: "images/Visual programming language.png",
                    title: "圖像化程式設計",
                    introduce:""
                },
                {
                    imgUrl: "images/Web Design Certification.png",
                    title: "網頁設計檢定",
                    introduce:""
                },
                {
                    imgUrl: "images/Computer Software Application Certification.png",
                    title: "電腦軟體應用檢定",
                    introduce:""
                },
            ],
        };
    },
    methods: {

    },
    created() {

    },
};

Vue.createApp(app).mount('#app');