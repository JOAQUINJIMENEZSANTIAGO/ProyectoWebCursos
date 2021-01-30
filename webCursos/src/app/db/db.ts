export const DATA: any = {
    cursos: [
        {
            id: 1,
            title: "Javascript",
            description: "Iniciación y primeros fundamentos a JavaScript",
            img: "../../../assets/images/js.png",
            finished: true
        },
        {
            id: 2,
            title: "AngularJS",
            description: "Unos de los framework mas utilizados mundialmente",
            img: "../../../assets/images/angular.png",
            finished: true
        },
        {
            id: 3,
            title: "Git",
            description: "Varios comandos que debes saber con Git",
            img: "../../../assets/images/gitt.png",
            finished: false
        },
        {
            id: 2,
            title: "AngularJS",
            description: "Unos de los framework mas utilizados mundialmente",
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
            id: 1,
            title: "RickyMortin",
            description: " descripcion",
            technologies: ["NodeJS", "ExpressJS"],
            img: "",
            view: true
        },
        {
            id: 3,
            title: "blog",
            description: " descripcion",
            technologies: ["AngularJS", "ExpressJS"],
            img: "",
            view: false
        }, {
            id: 2,
            title: "papel",
            description: " descripcion",
            technologies: ["pepito"],
            img: "",
            view: false
        }
    ],
    technologies: [
        "Todas las apps", "AngularJS", "Javascript vanilla", "NodeJS", "ExpressJS"
    ],
    router: [
        "Portfolio", "Cursos", "Sobre Mi"
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
                linkedin: {
                    url: "https://www.linkedin.com/in/raul-tejero-martos-302569167/",
                    img: "",
                    classFontAwesome: "fab fa-linkedin"
                }
            },
            {
                twitter:
                {
                    url: "https://twitter.com/Raul_te_ma",
                    img: "",
                    classFontAwesome: "fab fa-twitter-square"
                }
            }, 
            {
                github: {
                    url: "https://github.com/RaulTejero",
                    img: "",
                    classFontAwesome: "fab fa-github-square"
                }
            }

        ],
        photo: "../assets/images/photo.jpeg"
    }
}
