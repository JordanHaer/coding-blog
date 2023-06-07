const POSTS = [
  {
    id: 1,
    title: "Learning HTML",
    content:
      "In this blog post, I will share my journey of learning HTML. I started with the basics of tags, elements, and attributes. Then, I delved into structuring web pages with headings, paragraphs, lists, and images. It was fascinating to learn about semantic HTML and the importance of proper markup. I also explored forms, tables, and multimedia integration. Overall, HTML forms the foundation of every web page, and I enjoyed the process of understanding its structure and purpose.",
    slug: "learning-html",
  },
  {
    id: 2,
    title: "Mastering CSS",
    content:
      "In this blog post, I will discuss my experience mastering CSS. CSS allowed me to style and design web pages with precision. I learned about selectors, properties, and values. Understanding CSS box model was crucial for layout design, and I explored various positioning techniques. Additionally, I delved into responsive design, media queries, and flexbox for creating adaptive and flexible layouts. CSS opened up a world of possibilities in terms of creativity and aesthetics.",
    slug: "mastering-css",
  },
  {
    id: 3,
    title: "Unleashing the Power of JavaScript",
    content:
      "JavaScript is a versatile programming language that brought interactivity and dynamic functionality to the web. In this blog post, I will share my journey of learning JavaScript. I started with the basics of variables, data types, and control flow. Then, I dived into functions, objects, and arrays. As I progressed, I explored DOM manipulation, event handling, and AJAX for creating interactive web applications. JavaScript provided me with the ability to bring ideas to life and create engaging user experiences.",
    slug: "unleashing-javascript",
  },
  {
    id: 4,
    title: "Exploring the World of React",
    content:
      "React is a popular JavaScript library for building user interfaces. In this blog post, I will document my journey of learning React. I began by understanding components, JSX syntax, and the virtual DOM concept. Then, I explored state management with React hooks and learned how to handle user input through forms and controlled components. Additionally, I discovered the power of React's ecosystem, including libraries like React Router and Redux. React empowered me to build reusable and modular UI components efficiently.",
    slug: "exploring-react",
  },
  {
    id: 5,
    title: "Styling with Tailwind CSS",
    content:
      "Tailwind CSS is a utility-first CSS framework that simplifies the process of styling web applications. In this blog post, I will share my experience of learning Tailwind CSS. I discovered the power of utility classes and how they enable rapid development without writing custom CSS. I explored the responsive design features, such as breakpoints and responsive grids, to create mobile-friendly layouts. Additionally, Tailwind CSS's extensive customization options allowed me to tailor the styles to match my project's requirements.",
    slug: "styling-tailwind-css",
  },
  {
    id: 6,
    title: "Building Dynamic Web Apps with Next.js",
    content:
      "Next.js is a powerful framework for building server-rendered React applications. In this blog post, I will discuss my journey of learning Next.js. I started by understanding the basics of server-side rendering (SSR) and static site generation (SSG) offered by Next.js. I explored Next.js's routing capabilities and learned how to fetch data from APIs. Additionally, I leveraged the benefits of Next.js's file-based routing and dynamic routes to create scalable and SEO-friendly applications. Next.js provided me with the tools to build performant and production-ready web apps.",
    slug: "building-nextjs-apps",
  },
];

export function getPosts() {
  return POSTS;
}

export function getPostById(postId: number) {
  return getPosts().find((post) => post.id === postId);
}

export function getPostBySlug(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}
