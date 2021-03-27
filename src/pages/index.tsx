import TemplateHome from 'templates/pages/home/templateHome'

export default function Home() {
  return <TemplateHome></TemplateHome>
}

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 10
  }
}
