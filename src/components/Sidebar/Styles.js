import styled from "styled-components";

import { RiWhatsappFill, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";


export const Aside = styled.aside`
    background-color: #2C2020;
    height: 100vh;
    width: 20%;
`

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-around;
`

export const Picture = styled.img`
    border-radius: 50%;
    max-width: 250px;
    object-fit: cover;
    width: 70%;
`

export const Navigate = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    text-align: start;
    width: 70%;
`

export const NavItens = styled(NavLink)`
    color: #FFFFFF;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: 400;
`

export const ContainerIcons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 180px;
`

export const IconWhatsapp = styled(RiWhatsappFill)`
    color: #B79999;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
`

export const IconLinkedin = styled(RiLinkedinBoxFill)`
    color: #B79999;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
`

export const IconGithub = styled(RiGithubFill)`
    color: #B79999;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
`