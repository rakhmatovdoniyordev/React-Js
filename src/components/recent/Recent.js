import "./Recent.css"
import user1 from "../assets/post-user-1.png"
import user2 from "../assets/post-user-2.png"
import img1 from "../assets/recent-1.png"
import img2 from "../assets/recent-2.png"
import img3 from "../assets/recent-3.png"
import img4 from "../assets/recent-4.png"
import img5 from "../assets/recent-5.png"
import img6 from "../assets/recent-6.png"

function Recent(){
    return(
        <section className="recent">
            <div className="container">
                <div className="recent__title">
                    <h2>Most Recent</h2>
                </div>
                <div className="recent__wrapper">
                    <div className="recent__card">
                        <div className="recent__img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="recent__tect">
                            <h3>Still Standing Tall</h3>
                            <p>Life begins at the end of your comfort zone.</p>
                        </div>
                        <div className="recent__bottom">
                            <div className="recent__bottom__img">
                                <img src={user2} alt="" />
                                <p>William Wong</p>
                            </div>
                            <p>9/25/2015</p>
                        </div>
                    </div>
                    <div className="recent__card">
                        <div className="recent__img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="recent__tect">
                            <h3>Sunny Side Up</h3>
                            <p>No place is ever as bad as they tell you it’s going to be.</p>
                        </div>
                        <div className="recent__bottom">
                            <div className="recent__bottom__img">
                                <img src={user1} alt="" />
                                <p>Mat Vogels</p>
                            </div>
                            <p>9/25/2015</p>
                        </div>
                    </div>
                    <div className="recent__card">
                        <div className="recent__img">
                            <img src={img3} alt="" />
                        </div>
                        <div className="recent__tect">
                            <h3>Water Falls</h3>
                            <p>We travel not to escape life, but for life not to escape us.</p>
                        </div>
                        <div className="recent__bottom">
                            <div className="recent__bottom__img">
                                <img src={user1} alt="" />
                                <p>Mat Vogels</p>
                            </div>
                            <p>9/25/2015</p>
                        </div>
                    </div>
                    <div className="recent__card">
                        <div className="recent__img">
                            <img src={img4} alt="" />
                        </div>
                        <div className="recent__tect">
                            <h3>Through the Mist</h3>
                            <p>Travel makes you see what a tiny place you occupy in the world.</p>
                        </div>
                        <div className="recent__bottom">
                            <div className="recent__bottom__img">
                                <img src={user2} alt="" />
                                <p>William Wong</p>
                            </div>
                            <p>9/25/2015</p>
                        </div>
                    </div>
                    <div className="recent__card">
                        <div className="recent__img">
                            <img src={img5} alt="" />
                        </div>
                        <div className="recent__tect">
                            <h3>Awaken Early</h3>
                            <p>Not all those who wander are lost.</p>
                        </div>
                        <div className="recent__bottom">
                            <div className="recent__bottom__img">
                                <img src={user1} alt="" />
                                <p>Mat Vogels</p>
                            </div>
                            <p>9/25/2015</p>
                        </div>
                    </div>
                    <div className="recent__card">
                        <div className="recent__img">
                            <img src={img6} alt="" />
                        </div>
                        <div className="recent__tect">
                            <h3>Try it Always</h3>
                            <p>The world is a book, and those who do not travel read only one page.</p>
                        </div>
                        <div className="recent__bottom">
                            <div className="recent__bottom__img">
                                <img src={user1} alt="" />
                                <p>Mat Vogels</p>
                            </div>
                            <p>9/25/2015</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recent