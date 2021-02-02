export const DATA: any = {
    cursos: [
        {
            id: 1,
            title: "Javascript",
            description: "Iniciación y primeros fundamentos de JavaScript",
            img: "../../../assets/images/js.png",
            finished: false
        },
        {
            id: 2,
            title: "AngularJS",
            description: "Aprende a crear componentes, intrefaces, servicios, apis...",
            img: "../../../assets/images/angular.png",
            finished: true
        },
        {
            id: 3,
            title: "Git",
            description: "Varios comandos que debes saber con Git",
            img: "../../../assets/images/gitt.png",
            finished: false
        }

    ],
    apps: [
        {
            id: 5,
            type: "Proyecto personal",
            site: "https://appblog-68dfd.web.app/blog",
            title: "App Portfolio",
            description: ["AppWeb creada como portfolio personal y plataforma educativa."," La maquetación y las transiciones es realizadas a traves de CSS sin librerias. Creación de componentes, servicios, interfaces. Un fichero .js contiene la base de datos."],
            technologies: [ " Angular JS", " Git"],
            img: ["../../../assets/images/Screenshot_2021-01-31 CursoJS.png","../../../assets/images/loging.guard.ts - proyectos - Visual Studio Code 01_02_2021 18_01_26.png","../../../assets/images/loging.guard.ts - proyectos - Visual Studio Code 01_02_2021 18_01_48.png","../../../assets/images/loging.guard.ts - proyectos - Visual Studio Code 01_02_2021 18_02_15.png","../../../assets/images/loging.guard.ts - proyectos - Visual Studio Code 01_02_2021 18_02_37.png"],
            view: false
        },
        {
            id: 4,
            type: "Participación",
            site: "https://appblog-68dfd.web.app/blog",
            title: "CalculaTuCompra",
            description: [" descripcion"],
            technologies: ["Bootstrap", " Angular JS", " Express JS", " Node JS", " Api Google Maps", " Git"],
            img: ["../../../assets/images/Screenshot_2021-01-31 FrontListaCompra.png", "../../../assets/images/loging.guard.ts - proyectos - Visual Studio Code 01_02_2021 17_27_40.png", "../../../assets/images/loging.guard.ts - proyectos - Visual Studio Code 01_02_2021 17_28_01.png", "../../../assets/images/loging.guard.ts - proyectos - Visual Studio Code 01_02_2021 17_28_37.png", "../../../assets/images/loging.guard.ts - proyectos - Visual Studio Code 01_02_2021 17_30_40.png", "../../../assets/images/loging.guard.ts - proyectos - Visual Studio Code 01_02_2021 17_31_24.png", "../../../assets/images/loging.guard.ts - proyectos - Visual Studio Code 01_02_2021 17_31_47.png", "../../../assets/images/loging.guard.ts - proyectos - Visual Studio Code 01_02_2021 17_32_56.png", "../../../assets/images/loging.guard.ts - proyectos - Visual Studio Code 01_02_2021 17_33_21.png","../../../assets/images/MySQL Workbench 01_02_2021 18_25_57.png"],
            view: false
        }
        ,
        {
            id: 3,
            type: "Proyecto personal",
            site: "https://appblog-68dfd.web.app/blog",
            title: "blog",
            description: [" descripcion"] ,
            technologies: ["Bootstrap", " Angular JS", " Git"],
            img: ["../../../assets/images/blog.png", "../../../assets/images/blogService.png", "../../../assets/images/blogForm.png", "../../../assets/images/blogFormControl.png"],
            view: true
        },
        {
            id: 2,
            type: "Proyecto personal",
            site: "https://todo-d615f.web.app/",
            title: "toDo",
            description:["App para listas jbefji efjkfhwef jhwefh efljefi"] ,
            technologies: ["Javascript vanilla"],
            img: ["../../../assets/images/todo.jpg", "../../../assets/images/todocode1.png", "../../../assets/images/todocode2.png"],
            view: true
        }, {
            id: 1,
            type: "Proyecto personal",
            site: "https://hamburgueseria-5d0f3.firebaseapp.com/",
            title: "One Page",
            description:[" descripcion"] ,
            technologies: ["Bootstrap", " HTML5", " CSS"],
            img: ["../../../assets/images/hamburgueseria.jpg", "../../../assets/images/hamburguesaCSS.png", "../../../assets/images/hamburguesaHTML.png"],
            view: true
        }
    ],
    router: [
        "Portfolio", "Tecnologias","Cursos", "Sobre Mi"
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
        photo: "../assets/images/photo.jpeg"
    }
}
