window.translations = {
  home: "Home",
  aboutMe: "About me",
  services: "Skills",
  portfolio: "Portfolio",
  contact: "Contact",
  welcome: "Welcome to my <span class='syntax'>website</span>!",
  welcome2: "Im glad you're here.",
  aboutText:
    "Hi! I'm Kamil Sajdera, a young front-end developer who doesn’t just write code – I understand why I write it. I don’t have a stack of certificates or a corporate background, but I do have something way more valuable: pure drive, passion, and hundreds of hours of self-taught coding and building real projects. I learn fast, act consistently, and always focus on finding solutions – not excuses. I started with C++ and game plugins because I wanted to understand how things work from the inside. Then I discovered front-end development and have stuck with it ever since. With a mix of analytical thinking, a good eye for detail, and a creative spark, I aim to bring value to every project I touch. I work independently, communicate clearly, and always aim to improve. As a Junior, I ask a lot of questions because I believe that properly understanding the problem is a key feature on the way to achieving the best solution. Outside the screen, I play drums, bass guitar, and saxophone, produce music, and hit the volleyball court – because rhythm and energy matter in code and in life too.",
  skillsHeader1: "Accessibility",
  skillsHeader2: "Modern Front-End",
  skillsHeader3: "Responsive Design",
  skillsHeader4: "CMS/SQL",
  skillsHeader5: "Git/Teamwork",
  skillsHeader6: "Visual eye",
  skillsText1:
    "I write code that is not only esthetic and well-organized, but above all -accessible to everyone. I use WCAG rules, I take care of semantic HTML, appropriate color's contrast and keyboard navigation. I strive to ensure that every user - regardless of device or limitations - can use the application comfortably.",
  skillsText2:
    "I constantly follow trends in front-end. I use React (with hooks and functional components), NextJS (FullStack applications), SASS and Vite/Webpack. I have experience with TypeScript and can write fully typed components. I strive for my code to be scalable and easy to maintain.",
  skillsText3:
    "I design and implement interfaces that work smoothly on any device – from phones to ultrawide monitors. At every stage of the project, I pay attention to the correct accessibility of elements on different devices. I pay attention to the micro-details of UX, animations, speed of interaction and ergonomics.",
  skillsText4:
    "As a multi-month website's admin based on the IPS 4.x content management system, I took care of the proper functioning and security of the site. I made modifications and implemented user suggestions. I am well versed in the topic of downloading/modifying data in databases and working with phpmyadmin.",
  skillsText5:
    "Collaboration is key. I thrive in development teams, I use GIT, I value clear commits, communication, and joint problem solving.",
  skillsText6:
    "I have a strong sense of aesthetics and attention to detail. I can refine interfaces to make them not only functional but also visually appealing. I pay close attention to spacing, colors, typography, and visual hierarchy.",
  projectDesc1:
    `A fully-featured web application for managing everyday tasks, events, and expenses in one place.
    Users can create an account, log in, and securely manage their data through <b>JSON Web Tokens (JWT)</b>-based authentication.
    The backend is built with <b>Next.js</b> API Routes, and encrypted data is stored in <b>MongoDB</b>.
    The app supports adding, editing, and deleting events, tasks, and expenses, as well as uploading and storing images (e.g., profile pictures) via <b>Cloudinary</b>.
    Styling is implemented using <b>SCSS Modules</b>, ensuring modular and maintainable CSS.
    Form handling leverages <b>form actions</b> for structured data submission`,
  projectDesc2:
    `A web tool for creating and editing musical notation—primarily melodic lines—with precise control over musical details.
    Users can define note pitch, rhythm values, and tempo, then build custom note sequences and preview them step by step at any speed to test their sound.
    Designed with an intuitive interface and accurate visual representation, this tool is useful for both beginner musicians and those sketching melody ideas.
    Built with <b>React</b>, the project utilizes <b>createContext</b> for global state management, along with custom hooks for modular logic.
    Form handling and validation are implemented using <b>react-hook-form</b>, and final sheet printing is available via <b>react-to-print</b> integration.`,
  projectDesc3:
    `A modern frontend application for fast food restaurants, enabling customers to fully customize their meals.
    Users can browse meals by category, select size options, and choose add-ons—making every order fully personalized.
    Developed in <b>React</b>, the project uses <b>Redux Toolkit</b> for centralized state management, ensuring clean logic and efficient data handling.
    <b>useMemo</b> improves performance during list and cart rendering, and custom hooks enhance modularity and code clarity.
    The UI is designed to allow intuitive ordering and modification of items, with the structure ready for integration into backend systems or databases.`,
  projectDesc4:
    `A weather application built with <b>TypeScript</b>, allowing users to quickly check current weather conditions in any city.
    It offers multiple convenient features, including:
    city search with suggestions and filtering, setting a default city saved in <b>localStorage</b>,
    detecting user location and displaying local weather (via location pin icon),
    temperature unit toggle (Celsius ↔ Fahrenheit), dark mode support,
    persistent storage of city name, coordinates, and theme in localStorage.
    The project emphasizes responsiveness, clean code, and full utilization of TypeScript’s type safety.`,
  projectDesc5:
    `A movie discovery application that allows users to search, browse, and explore movies, TV shows, and people from the world of cinema.
    Data is fetched from an external API and presented in a clear and user-friendly layout. Users can view details such as plot summaries, cast, release dates, and trailers.
    Built with <b>React</b>, the app uses <b>React Router</b> with <b>useLoaderData</b> for data management per route.
    Trailers and video content are seamlessly integrated using <b>react-player</b>, ensuring smooth playback.
    The application focuses on a lightweight interface and fluid navigation between views.`,
  htmlSkillsText: `I can design website structures using <b>semantic HTML elements</b>, which not only improves the readability of the code, but also has a positive effect on the website's accessibility and positioning in search results. I have experience in creating HTML forms using various field types and handling client-side validation using HTML5 attributes such as <i>required</i> and <i>pattern</i>. <br /> <br />
    I can use a variety of CSS selectors, including class and ID selectors, as well as pseudo-classes and pseudo-elements, to precisely style elements on a page. I have deep knowledge of <b>flexbox</b> and <b>grid layout</b>, which allows me to design flexible and responsive website layouts that scale perfectly on various devices. I have experience in working with CSS preprocessors such as <b>SASS</b> and <b>LESS</b>, which allows me to more conveniently manage style using variables, mixins and functions.`,
  jsSkillsText: `I am skilled in manipulating the DOM tree using JavaScript, which allows me to dynamically add, remove and modify elements on the page depending on user actions. I am familiar with <b>asynchrony concepts</b> in JavaScript such as <i>Callbacks</i>, <i>Promises</i> and <i>Async/Await</i>, which allows me to handle operations that require time-consuming data downloading from external sources (API). I know concepts such as primitive/complex types, event loop, destructuring, spread operator and scope. <br /> <br />
    I have also made several projects in jQuery, so I can confidently say that it is not a problem for me. I can animate jQuery applications with smooth transitions, size changes, and the appearance of elements, which results in a more attractive website. I can use various events and respond to user interactions in an efficient and clear way. I can integrate and customize jQuery plugins, using ready-made solutions available in this library's ecosystem.`,
  reactSkillsText: `React is definitely the environment in which I write best. I can manage state in local and global (<b>Context API, Redux</b>) and respond to user interactions using event handling functions, I understand the life cycle of components.
    I can manage forms, authorize users and create my own custom hooks. I am able to optimize my React application, for example through <i>useMemo, useCallback</i> or <i>lazy loading</i>. <br />
    I successfully write applications using React Router using its hooks such as useNavigate, useNavigation, useFetcher, useParams, useSearchParams, useLocation, useSubmit and use(Route)LoaderData.
    I know various ways and approaches to communicate with the server (including <b>Tanstack Query</b>), which allows me to manage data asynchronously and update the UI based on the response from the server. I always ensure a good 'loading state' and an appropriate 'error state'.`,
  nextJsText: `I build modern frontend applications using Next.js (App Router), applying different rendering strategies — <b><i>SSR, SSG</i></b>, and <b><i>ISR</i></b> — depending on the project requirements. I can configure file-based routing, including dynamic, nested, and protected routes. I use layouts, server components, and client components, and understand their differences and impact on performance.
          <br />I know how to fetch and mutate data on both the client and server sides using <i>fetch, server actions, custom hooks</i>. I can configure caching, manage data revalidation, and control UI update strategies. I take care to handle loading states, errors, and fallback content properly.
          <br /> <br />I'm familiar with various Next.js optimization techniques such as <b>lazy loading, dynamic imports, code splitting, resource preloading</b>, and image optimization with the <b><i>next/image</i></b> component. I can implement authentication using <b>NextAuth</b> or <b>JWT</b> and manage user sessions on both the client and server sides.
          Additionally, I pay attention to <b>SEO</b> — configuring metadata, headers, URL structures, and optimizing server-rendered content.`,
  contactTopic: "Topic",
  contactMsg: "Message",
  contactBtn: "Send",
  footerCopyright: "Design & Code",
  descriptions: [
    {
      title: "HTML & CSS",
      description: `I can design website structures using <b>semantic HTML elements</b>, which not only improves the readability of the code, but also has a positive effect on the website's accessibility and positioning in search results. I have experience in creating HTML forms using various field types and handling client-side validation using HTML5 attributes such as <i>required</i> and <i>pattern</i>. <br /> <br />
          I can use a variety of CSS selectors, including class and ID selectors, as well as pseudo-classes and pseudo-elements, to precisely style elements on a page. I have deep knowledge of <b>flexbox</b> and <b>grid layout</b>, which allows me to design flexible and responsive website layouts that scale perfectly on various devices. I have experience in working with CSS preprocessors such as <b>SASS</b> and <b>LESS</b>, which allows me to more conveniently manage style using variables, mixins and functions.`,
    },
    {
      title: "JavaScript & TypeScript",
      description: `I am skilled in manipulating the DOM tree using JavaScript, which allows me to dynamically add, remove and modify elements on the page depending on user actions. I am familiar with <b>asynchrony concepts</b> in JavaScript such as <i>Callbacks</i>, <i>Promises</i> and <i>Async/Await</i>, which allows me to handle operations that require time-consuming data downloading from external sources (API). I know concepts such as primitive/complex types, event loop, destructuring, spread operator and scope. <br /> <br />
          I can write typed components, functions, and hooks. I understand the differences between types and interfaces and know how to choose the right approach depending on the context. I type component props, hooks, asynchronous functions, and API data, which helps me catch errors early and write more predictable code. I can work with generic types and know how to define custom types for external data or libraries.
          I use TypeScript together with React and Next.js, which makes it easier to work on larger projects and improves team collaboration`,
    },
    {
      title: "React",
      description: `React is definitely the environment in which I write best. I can manage state in local and global (<b>Context API, Redux</b>) and respond to user interactions using event handling functions, I understand the life cycle of components.
          I can manage forms, authorize users and create my own custom hooks. I am able to optimize my React application, for example through <i>useMemo, useCallback</i> or <i>lazy loading</i>. <br />
          I successfully write applications using React Router using its hooks such as useNavigate, useNavigation, useFetcher, useParams, useSearchParams, useLocation, useSubmit and use(Route)LoaderData.
          I know various ways and approaches to communicate with the server (including <b>Tanstack Query</b>), which allows me to manage data asynchronously and update the UI based on the response from the server. I always ensure a good 'loading state' and an appropriate 'error state'.`,
    },
    {
      title: "Next JS",
      description: `I build modern frontend applications using Next.js (App Router), applying different rendering strategies — <b><i>SSR, SSG</i></b>, and <b><i>ISR</i></b> — depending on the project requirements. I can configure file-based routing, including dynamic, nested, and protected routes. I use layouts, server components, and client components, and understand their differences and impact on performance.
          <br />I know how to fetch and mutate data on both the client and server sides using <i>fetch, server actions, custom hooks</i>. I can configure caching, manage data revalidation, and control UI update strategies. I take care to handle loading states, errors, and fallback content properly.
          <br /> <br />I'm familiar with various Next.js optimization techniques such as <b>lazy loading, dynamic imports, code splitting, resource preloading</b>, and image optimization with the <b><i>next/image</i></b> component. I can implement authentication using <b>NextAuth</b> or <b>JWT</b> and manage user sessions on both the client and server sides.
          Additionally, I pay attention to <b>SEO</b> — configuring metadata, headers, URL structures, and optimizing server-rendered content.`,
    },
  ],
};
