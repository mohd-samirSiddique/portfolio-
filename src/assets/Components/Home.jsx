export default function Home() {
    return (
        <>

            <main className="main_section">
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-8 my_info">
                                <h3 className="name_line">Hello, my name is <span className="name">Samir</span></h3>
                                <h3 className="my_profession">i'm a <span>Web Devloper</span></h3>
                                <p className="main_para">Hi, I am Samir recently I have completed my graduation along this i have complete IBM IT fundamental course and Full Stack Web Devlopment course.</p>
                                <button className="main_btn">More About Me</button>
                            </div>
                            <div className="col-lg-4 my_photo">
                                <img src="https://i.pinimg.com/originals/8b/59/73/8b59730bb8b6621046443cafc7ab4abe.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}