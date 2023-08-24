import '../../styles/home.css'

function Home() {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Explore Your Travel Destination like never before</h1>
                    <p className="lead">Ecoland fits a travel agency perfectly, but if you are a solo tours organizer, you can use it, too. In fact, even if you run an accommodation business, again, get Ecoland to sort out the design of your online presence. In the kit, Ecoland offers all the necessary, like advanced search, beautiful slider, contact form and testimonials. Bear in mind, Ecoland rocks a one-page layout which will help you differentiate from the masses easily.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;