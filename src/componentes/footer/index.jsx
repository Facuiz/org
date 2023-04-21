import "./footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
           
            <a href='https://www.twitter.com/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.linkedin.com/in/facundoivansegovia/'>
                <img src="/img/icons8-linkedin-24.png" alt='linkedin' />
            </a>
            <a href='https://www.instagram.com/facu1ssj/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Facundo Segovia</strong>
    </footer>
}

export default Footer