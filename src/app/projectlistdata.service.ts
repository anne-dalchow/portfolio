import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectlistdataService {
  getProjectList() {
    throw new Error('Method not implemented.');
  }

  constructor() {
  }

  projectlist = [
    {
      key: "join",
      index: 1,
      name: "Join",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ",
      techStack: [
        { name: "CSS", img: "images/projects/CSS.svg" },
        { name: "HTML", img: "images/projects/HTML.svg" },
        { name: "Firebase", img: "images/projects/Firebase.svg" },
        { name: "Angular", img: "images/projects/Angular.svg" },
        { name: "TypeScript", img: "images/projects/TypeScript.svg" }
      ],
      previewImg: "images/projects/join_preview.svg",
      img: "images/projects/join.jpg",
      git: "https://github.com/anne-dalchow/join",
      livetest: ""
    },
    {
      key: "el_pollo_loco",
      index: 2,
      name: "El Pollo Loco",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen. ",
      techStack: [
        { name: "CSS", img: "images/projects/CSS.svg" },
        { name: "HTML", img: "images/projects/HTML.svg" },
        { name: "JavaScript", img: "images/projects/Javascript.svg" },
      ],
      previewImg: "images/projects/el_pollo_loco_preview.svg",
      img: "images/projects/el_pollo_loco.jpg",
      git: "https://github.com/anne-dalchow/el-pollo-loco",
      livetest: ""
    },
    {
      key: "da_bubble",
      index: 3,
      name: "DA Bubble",
      description: "--- COMMING SOON --- This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
      techStack: [
        { name: "CSS", img: "images/projects/CSS.svg" },
        { name: "HTML", img: "images/projects/HTML.svg" },
        { name: "Angular", img: "images/projects/Angular.svg" },
        { name: "TypeScript", img: "images/projects/TypeScript.svg" }
      ],
      previewImg: "images/projects/da_bubble_preview.svg",
      img: "images/projects/slack_clone.jpg",
      git: "https://github.com/anne-dalchow/",
      livetest: ""
    },
    // {
    //   key: "pokemon",
    //   index: 4,
    //   name: "Pokémon – Pokédex & Game",
    //   description: "Explore a digital Pokédex and challenge friends in a turn-based card game. Featuring dynamic UI, API integration, and animated game logic for an engaging experience.",

    //   techStack: [
    //     { name: "CSS", img: "images/projects/CSS.svg" },
    //     { name: "HTML", img: "images/projects/HTML.svg" },
    //     { name: "JavaScript", img: "images/projects/Javascript.svg" },
    //   ],
    //   previewImg: "images/projects/da_bubble_preview.svg",
    //   img: "images/projects/slack_clone.jpg",
    //   git: "https://github.com/anne-dalchow/pokemon-cardDuell-pokedex-main",
    //   livetest: ""
    // },
    // {
    //   key: "mindfull_app",
    //   index: 5,
    //   name: "Mindfull App - Prototyping",
    //   description: "Concept and prototype for a mindfulness and journaling app. Designed with a focus on calm colors, user guidance, and intuitive daily reflections.",

    //   techStack: [
    //     { name: "Figma", img: "images/skill-icons/figma.svg" },
    //     { name: "Adobe Illustrator", img: "images/skill-icons/adobe_illustrator.svg" }
    //   ],
    //   previewImg: "images/projects/da_bubble_preview.svg",
    //   img: "images/projects/slack_clone.jpg",
    //   git: "",
    //   livetest: ""
    // }
  ];
}
