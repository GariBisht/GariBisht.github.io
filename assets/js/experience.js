AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  
  {
    title: "WESEE Ministry of Defence",
    cardImage: "assets/images/experience-page/wesee.jpg",
    place: "Software Engineer",
    time: "(1 July, 2023 - 30 June , 2024)",
    desp: "Worked on Indian Navy projects, including the development of the Samuha website, the Tasking Portal, NavConsole UI interfaces, Radar UI, and Weapons UI. Played a key role in building the Samuha website and Tasking Portal, ensuring effective user interfaces for task management and operational coordination. Designed and implemented the Weapons UI to manage and control defense systems effectively. Utilized Angular for dynamic front-end development, TailwindCSS for responsive and customizable UI design, and Laravel for robust back-end services. Focused on delivering intuitive, user-friendly interfaces while ensuring efficient system performance tailored to the specific needs of naval operations.  ",
  },
  
  {
    title: "Source Soft Solutions Pvt. Ltd.",
    cardImage: "assets/images/experience-page/source.jpg",
    place: "Software Developer",
    time: "(June, 2022 - Feb, 2023)",
    desp: "Worked with Source Soft Solutions Pvt. Ltd., where I contributed to diverse projects, including store management systems, email clients, online shopping portals, and nft websites. Developed single-page websites and React-based web applications, using React and Redux for efficient state management, Material-UI and Bootstrap for responsive and modern designs, and integrated Metamask for blockchain functionality.Focused on delivering scalable, user-friendly, and efficient solutions. ",
  },
  {
    title: "LGM LetsGrowMore",
    cardImage: "assets/images/experience-page/lgm.jpeg",
    place: "Web Developer Intern",
    time: "(Oct, 2021 - Nov, 2021)",
    desp: "Did Virtual Internship with LetsGrowMore in Web Development. We had to do tasks of creating single page website and react based web app during this 1 month internship period",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);




const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" style="width: 100% !important; height: 100% !important; object-fit: cover !important;">

        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
