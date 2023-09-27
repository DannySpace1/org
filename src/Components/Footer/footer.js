import "./footer.css"

const Footer = () =>{
    return <footer className='footer' style={{ backgroundImage: "url(./Img/footer.png)" }}>
    <div className='redes'>
        
        <a href='https://twitter.com/DannySpace01'>
            <img src="./Img/twitter.png" alt='twitter' />
        </a>
        <a href='https://www.instagram.com/danny_space_oficial/'>
            <img src="./Img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/Img/Logo.png' alt='org' />
    <strong>Desarrollado por DannySpace</strong>
</footer>

}

export default Footer