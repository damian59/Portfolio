
import IMG1 from "../assets/Marvel.png";
import IMG2 from "../assets/Pelis.png";

import '../styles/projects.css'

const Projects = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Marvel",
      img: IMG1,
      description:
        "Esta app es un proyecto individual, La cual fue creada a partir de la api de Marvel.  modelo resposivo.",
      technologies: "Html | CSS | Javascript | React Js | React-router-dom",
      link: "https://marvel-app-wheat.vercel.app/",
      github: "https://github.com/damian59/MarvelApp",
    },
    {
      id: 2,
      title: "AMDB",
      img: IMG2,
      description:
        "Proyecto individual que simula una web de películas estilo TMDB . Desarrollada en React con autenticación Auth0. Implementación de diseño responsivo.",
      technologies: "Html | CSS | Javascript | React Js | React-router-dom",
      link: "https://amdb-gilt.vercel.app/",
      github: "https://github.com/damian59/AMDB",
    },
    {
      id: 2,
      title: "Portfolio",
      img: IMG2,
      description:
        "Mi portafolio donde muestro mis trabajos realizados.",
      technologies: "Html | CSS | Javascript | React Js | React-router-dom",
      link: "http://portfolio-one-mu-77.vercel.app/",
      github: "https://github.com/damian59/Portfolio",
    },
  ];
  return (
    <section className="projects_section">
      <h2>My Proyects</h2>
      <div className="card_container">
        {soloProjects.map((pro) => (
          <div className="card_item" key={pro.id}>
            <div className="card_image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="card_content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="card_link">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
