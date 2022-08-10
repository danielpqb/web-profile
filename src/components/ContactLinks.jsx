import styled from "styled-components"
import facebook from '../assets/img/logo-facebook.svg'
import discord from '../assets/img/logo-discord.svg'
import instagram from '../assets/img/logo-instagram.svg'
import linkedin from '../assets/img/logo-linkedin.svg'
import github from '../assets/img/logo-github.svg'

export default function ContactLinks() {

    const links = [
        {
            href: "https://github.com/danielpqb",
            src: { github },
            alt: "danielpqb",
        },
        {
            href: "https://www.linkedin.com/in/daniel-pq-barros",
            src: { linkedin },
            alt: "daniel-pq-barros",
        },
        {
            href: "https://discord.com/users/274740926524686336",
            src: { discord },
            alt: "Daniel Barros#5145",
        },
        {
            href: "https://www.instagram.com/danielpqb/",
            src: { instagram },
            alt: "danielpqb",
        },
        {
            href: "https://www.facebook.com/danielpqb/",
            src: { facebook },
            alt: "danielpqb",
        },
    ]

    return (
        <Container>
            {links.map((value) => {
                return (
                    <a href={value.href} target="_blank" rel="noreferrer">
                        <img alt={value.alt} src={value.src} />
                    </a>
                )
            })}
        </Container>
    )
};

const Container = styled.div`
  & {
    height: 50px;
    /* filter: grayscale(100%) brightness(1000); */
  }

  img {
    height: 40px;
    width: 40px;

    padding: 5px;

    fill: white;
  }
`