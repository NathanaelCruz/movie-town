import Main from 'components/Main/Main'

export type HomeProps = {
  title: string
  description: string
}

export default function Home({ title, description }: HomeProps) {
  return <Main title={title} description={description} />
}

export const getStaticProps = async () => {
  const title = 'Boilerplate NextJS',
    description = 'ReactJS, NextJS, Typescript, Jest, Styled Components e mais.'

  return {
    props: {
      title: title,
      description: description
    },
    revalidate: 10
  }
}
