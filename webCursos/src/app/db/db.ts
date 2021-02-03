export const DATA: any = {
    cursos: [
        {
            id: 1,
            title: "Javascript",
            description: "Iniciación y primeros fundamentos de JavaScript",
            img: "../../../assets/technologies/js.png",
            finished: false
        },
        {
            id: 2,
            title: "AngularJS",
            description: "Aprende a crear componentes, intrefaces, servicios, apis...",
            img: "../../../assets/technologies/angular.png",
            finished: true
        },
        {
            id: 3,
            title: "Git",
            description: "Varios comandos que debes saber con Git",
            img: "../../../assets/technologies/gitt.png",
            finished: false
        }

    ],
    apps: [
        {
            id: 5,
            type: "Proyecto personal",
            site: "https://appblog-68dfd.web.app/blog",
            title: "App Portfolio",
            description: [
                "AppWeb reactiva creada como portfolio personal y plataforma educativa.",
                " La maquetación y las transiciones es realizadas a traves de CSS sin librerias."
            ],
            technologies: [
                " Angular JS",
                " Git"],
            img: [
                "../../../assets/images/Screenshot_2021-01-31 CursoJS.png",
            ],
            view: false
        },
        {
            id: 4,
            type: "Participación",
            site: "https://appblog-68dfd.web.app/blog",
            title: "CalculaTuCompra",
            description: [
                "App web que ayuda la gestión económica de las compras de productos de primera necesidad. Con posibilidad de guardar listas, requerirlas más tarde filtrando por fecha o nombre. Contiene gráfica de gastos y la ubicación de las tiendas más cercanas según la ubicación en la que se encuentra",
                "Realizada con AngularJS,MySQL, Express, se utilizaron librerías como PrimeNg para la gráfica, Puppetter para realizar un web scrapper y recopilar más de 3000 productos, Angular Google Maps (AGM)",
                "Problemas con la petición a Google Maps para la búsqueda de tiendas hecha desde el front por los cords, resuelta desde el back con la librería Axos"
            ],
            technologies: [
                "Bootstrap",
                " Angular",
                " Express JS",
                " Node JS",
                " Api Google Maps",
                " Git"
            ],
            img: [
                "../../../assets/images/Screenshot_2021-01-31 FrontListaCompra.png",
                "../../../assets/images/Screenshot_2021-02-02 FrontListaCompra(2).png",
                "../../../assets/images/Screenshot_2021-02-02 FrontListaCompra(1).png",
                "../../../assets/images/Screenshot_2021-02-02 FrontListaCompra(3).png",
                "../../../assets/images/Screenshot_2021-02-02 FrontListaCompra(4).png"
            ],
            view: false
        }
        ,
        {
            id: 3,
            type: "Proyecto personal",
            site: "https://appblog-68dfd.web.app/blog",
            title: "blog",
            description: [
                "Página web dinámica, permite crear un post y visualizarlos todos o filtrarlos por categorías",
                "Realizada con AngularJS, Bootstrap. "
            ],
            technologies: [
                "Bootstrap",
                " Angular JS",
                " Git"],
            img: [
                "../../../assets/images/blog.png",
                "../../../assets/images/Screenshot_2021-02-02 Blog.png",
                "../../../assets/images/Screenshot_2021-02-02 Blog(1).png"
            ],
            view: true
        },
        {
            id: 2,
            type: "Proyecto personal",
            site: "https://todo-d615f.web.app/",
            title: "toDo",
            description: [
                "App web para creación de tareas, con posibilidad de filtrar por prioridad o por nombre, realizada con Javascript y CSS",
                "Todo recae sobre un array , creando funciones separadas por desempeños que requieren métodos para manipular el array"
            ],
            technologies: [
                "Javascript vanilla"
            ],
            img: [
                "../../../assets/images/todo.jpg",
                "../../../assets/images/Screenshot_2021-02-02 Listado de tareas.jpg"
            ],
            view: true
        }, {
            id: 1,
            type: "Proyecto personal",
            site: "https://hamburgueseria-5d0f3.firebaseapp.com/",
            title: "One Page",
            description: [
                "Página web responsiva realizada con HTML5 y CSS, uso de pseudo selectores y variables CSS"
            ],
            technologies: [
                "Bootstrap",
                " HTML5",
                " CSS"
            ],
            img: [
                "../../../assets/images/hamburgueseria.jpg",
                "../../../assets/images/ScreenshotHamburguesera.png",
                "../../../assets/images/ScreenshotHamburguesera(1).png"
            ],
            view: true
        }
    ],
    router: [
        "Portfolio",
        "Tecnologias",
        "Cursos",
        "Sobre Mi"
    ],
    technologies: [

        {
            title: "MongoDB",
            img: "../assets/technologies/mongodb.png"
        },
        {
            title: "MySQL",
            img: "../assets/technologies/mysql.png"
        },
        {
            title: "Express",
            img: "../assets/technologies/express.png"
        },
        {
            title: "NodeJS",
            img: "../assets/technologies/nodejs.png"
        },
        {
            title: "TypeScript",
            img: "../assets/technologies/typescript.png"
        },
        {
            title: "Angular",
            img: "../assets/technologies/angular.png"
        },
        {
            title: "Javascript",
            img: "../assets/technologies/js.png"
        },

        {
            title: "CSS",
            img: "../assets/technologies/css.png"
        },
        {
            title: "Bootstrap",
            img: "../assets/technologies/bootstrap.png"
        },
        {
            title: "HTML5",
            img: "../assets/technologies/html.png"
        },
        {
            title: "Git",
            img: "../assets/technologies/git.png"
        }

    ],
    author: {
        name: "Raul tejero",
        roll: "Desarollador web",
        contact: {
            tel: "+34 699 974 315",
            mail: "raultejeromartos@gmail.com"
        },
        social: [

            {
                name: "linkedin",
                url: "https://www.linkedin.com/in/raul-tejero-martos-302569167/",
                img: "",
                classFontAwesome: "fab fa-linkedin"
            },
            {
                name: "Twitter",
                url: "https://twitter.com/Raul_te_ma",
                img: "",
                classFontAwesome: "fab fa-twitter-square"
            },
            {
                name: "github",
                url: "https://github.com/RaulTejero",
                img: "",
                classFontAwesome: "fab fa-github-square"
            }

        ],
        photo: "../assets/photo/photo.jpeg"
    },

}


