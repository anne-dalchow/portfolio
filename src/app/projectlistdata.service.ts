import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProjectlistdataService {
  getProjectList() {
    throw new Error("Method not implemented.");
  }

  constructor() {}

  projectlist = [
    {
      key: "join",
      index: 1,
      name: "Join",
      description:
        "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ",
      techStack: [
        { name: "CSS", img: "images/projects/CSS.svg" },
        { name: "HTML", img: "images/projects/HTML.svg" },
        { name: "Firebase", img: "images/projects/Firebase.svg" },
        { name: "Angular", img: "images/projects/Angular.svg" },
        { name: "TypeScript", img: "images/projects/TypeScript.svg" },
      ],
      previewImg: "images/projects/join_preview.svg",
      img: "images/projects/join_1.png",
      githubUrl: "https://github.com/anne-dalchow/join",
      liveUrl: "https://join.anne-dalchow.de/",
    },
    {
      key: "el_pollo_loco",
      index: 2,
      name: "El Pollo Loco",
      description:
        "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen. ",
      techStack: [
        { name: "CSS", img: "images/projects/CSS.svg" },
        { name: "HTML", img: "images/projects/HTML.svg" },
        { name: "JavaScript", img: "images/projects/Javascript.svg" },
      ],
      previewImg: "images/projects/el_pollo_loco_preview.svg",
      img: "images/projects/pollo_loco.png",
      githubUrl: "https://github.com/anne-dalchow/el-pollo-loco",
      liveUrl: "https://el-pollo-loco.anne-dalchow.de/",
    },
    {
      key: "pokemon",
      index: 3,
      name: "Pokédex & Game",
      description:
        "Explore a digital Pokédex and challenge friends in a turn-based card game. Featuring dynamic UI, API integration, and animated game logic for an engaging experience.",

      techStack: [
        { name: "CSS", img: "images/projects/CSS.svg" },
        { name: "HTML", img: "images/projects/HTML.svg" },
        { name: "JavaScript", img: "images/projects/Javascript.svg" },
      ],
      previewImg: "images/projects/pokedex_preview.png",
      img: "images/projects/pokedex.png",
      githubUrl: "https://github.com/anne-dalchow/pokemon-cardDuell-pokedex-main",
      liveUrl: "https://pokedex.anne-dalchow.de/",
    },
  ];
}
