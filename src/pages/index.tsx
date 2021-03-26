import TemplateHome from 'templates/pages/home/templateHome'

export default function Home() {
  return <TemplateHome></TemplateHome>
}

// export const getStaticProps = async () => {
//   const title = 'Boilerplate NextJS',
//     description = 'ReactJS, NextJS, Typescript, Jest, Styled Components e mais.'

//   return {
//     props: {
//       title: title,
//       description: description
//     },
//     revalidate: 10
//   }
// }
