import "./footer.css"

const Footer = () =>{
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        
        <a href='https://twitter.com/DannySpace01'>
            <img src="/img/twitter.png" alt='twitter' />
        </a>
        <a href='https://www.instagram.com/danny_space_oficial/'>
            <img src="./img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por DannySpace</strong>
</footer>

}

export default Footer