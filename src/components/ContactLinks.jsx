import styled from "styled-components"

export default function ContactLinks() {

    const links = [
        {
            href: "https://github.com/danielpqb",
            name: "logo-github",
            title: "danielpqb",
        },
        {
            href: "https://www.linkedin.com/in/daniel-pq-barros",
            name: 'logo-linkedin',
            title: "daniel-pq-barros",
        },
        {
            href: "https://discord.com/users/274740926524686336",
            name: 'logo-discord',
            title: "Daniel Barros#5145",
        },
        {
            href: "https://www.instagram.com/danielpqb/",
            name: 'logo-instagram',
            title: "danielpqb",
        },
        {
            href: "https://www.facebook.com/danielpqb/",
            name: 'logo-facebook',
            title: "danielpqb",
        },
        {
            href: "mailto:danielpqb@gmail.com",
            name: 'mail-outline',
            title: "danielpqb@gmail.com",
        },
        {
            href: "https://wa.me/5521994149949",
            name: 'logo-whatsapp',
            title: "+55 21 9 9414-9949",
        },
    ]

    return (
        <Container>
            {links.map((value, index) => {
                return (
                    <a href={value.href} title={value.title} key={index} target="_blank" rel="noreferrer">
                        <ion-icon name={value.name}></ion-icon>
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
    max-width: 40px;
  }

  ion-icon {
    font-size: 35px;
    color: rgba(255, 255, 255, 0.9);

    padding: 5px;

    pointer-events: none;
  }
`