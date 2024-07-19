export default function Portfolio() {
    return (
        <>
            <section className="section portfolio">
                <div className="container-fluid">
                    <div className="row about_me my_services my_portfolio">
                        <div>
                            <h3>Portfolio</h3>
                        </div>
                    </div>
                    <div className="portfolio_cards">
                        <h4>My last projects</h4>
                        <div className="row">
                            <div className="col-lg-6 portfolio_card">
                                <div className="my_portfolio_card_project">
                                    <img src="https://marketplace.canva.com/EAFxweoG8ww/1/0/1131w/canva-black-and-white-simple-geometric-content-creator-student-portfolio-KydeMOdt6B0.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5 portfolio_card">
                                <div className="my_portfolio_card_project">
                                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjqraStuUu6iius0wespQ2k5pNeCP5b5tWQ&s" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row pt-4 pb-5">
                            <div className="col-lg-6 portfolio_card">
                                <div className="my_portfolio_card_project">
                                    <img src="https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU=w240-h480-rw" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5 portfolio_card">
                                <div className="my_portfolio_card_project">
                                    <img src="https://i.ytimg.com/vi/UwJumvrjncc/maxresdefault.jpg" alt="error4" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}