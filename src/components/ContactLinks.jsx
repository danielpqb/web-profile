import styled from "styled-components"

export default function ContactLinks() {

    const links = [
        {
            href: "https://github.com/danielpqb",
            src: "./img/logo-github.svg",
            alt: "danielpqb",
        },
        {
            href: "https://www.linkedin.com/in/daniel-pq-barros",
            src: './img/logo-linkedin.svg',
            alt: "daniel-pq-barros",
        },
        {
            href: "https://discord.com/users/274740926524686336",
            src: './img/logo-discord.svg',
            alt: "Daniel Barros#5145",
        },
        {
            href: "https://www.instagram.com/danielpqb/",
            src: './img/logo-instagram.svg',
            alt: "danielpqb",
        },
        {
            href: "https://www.facebook.com/danielpqb/",
            src: './img/logo-facebook.svg',
            alt: "danielpqb",
        },
    ]

    return (
        <Container>
            {links.map((value, index) => {
                return (
                    <a key={index} href={value.href} target="_blank" rel="noreferrer">
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
  }

  img {
    height: 40px;
    width: 40px;

    padding: 5px;

    filter: contrast(0) brightness(10);
  }
`