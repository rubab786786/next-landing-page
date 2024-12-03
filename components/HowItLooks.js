"use client"
import { useState } from "react";

const HowItLooks = () => {
  const [activeTab, setActiveTab] = useState("mobile");

  return (
    <>
    <section id="how-it-looks" className="feature-section">
          <div className="w-layout-blockcontainer feature-container w-container">
            <ul role="list" className="list">
              <li className="item-1">Intuitive apps</li>
              <li className="item-4">
                <img src="/images/Arrow---Right.svg" loading="lazy" alt="" />
              </li>
              <li className="iten2">Easy to use</li>
              <li className="item-4">
                <img src="/images/Arrow---Right-1.svg" loading="lazy" alt="" />
              </li>
              <li className="item-3">Unique</li>
            </ul>
            <h1 className="feature-heading">How It Looks</h1>
            <p className="paragraph-4">
              Crafted with simplicity and elegance, our interface ensures a smooth and
              enjoyable experience for both desktop and mobile users alike.
            </p>
            <div className="tabs-container">
              <div className="tabs-list" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* Mobile Tab */}
                <div
                  className={`tab-button-outer ${activeTab === "mobile" ? "active" : ""}`}
                  style={{
                    background: activeTab === "mobile"
                      ? "linear-gradient(89.73deg, #FF00B0 0%, #FF870B 18.63%, #E80346 47.09%, #A800E4 76.59%, #0096F1 99.36%)"
                      : "transparent",
                    borderRadius: "25rem",
                    padding: "2px",
                    width: "max-content",
                    marginRight: "15px",
                  }}
                  onClick={() => setActiveTab("mobile")}
                >
                  <button
                    className="tab-button"
                    style={{
                      padding: "0.5rem 1rem",
                      backgroundColor: "#fafafa",
                      border: "none",
                      color: "#000000",
                      cursor: "pointer",
                      borderRadius: "25rem",
                      textTransform: "uppercase",
                      fontWeight: activeTab === "mobile" ? 600 : 400,
                    }}
                  >
                    Mobile
                  </button>
                </div>

                {/* Desktop Tab */}
                <div
                  className={`tab-button-outer ${activeTab === "desktop" ? "active" : ""}`}
                  style={{
                    background: activeTab === "desktop"
                      ? "linear-gradient(89.73deg, #FF00B0 0%, #FF870B 18.63%, #E80346 47.09%, #A800E4 76.59%, #0096F1 99.36%)"
                      : "transparent",
                    borderRadius: "25rem",
                    padding: "2px",
                    width: "max-content",
                  }}
                  onClick={() => setActiveTab("desktop")}
                >
                  <button
                    className="tab-button"
                    style={{
                      padding: "0.5rem 1rem",
                      backgroundColor: "#fafafa",
                      border: "none",
                      color: "#000000",
                      cursor: "pointer",
                      borderRadius: "25rem",
                      textTransform: "uppercase",
                      fontWeight: activeTab === "desktop" ? 600 : 400,
                    }}
                  >
                    Desktop
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="w-tab-content">
                {activeTab === "mobile" && (
                  <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                    <div className="mask w-slider-mask">
                      <div className="w-slide">
                        <div
                          id="w-node-aaf41455-63e2-560a-fa71-b50112771750-fbb97df6"
                          className="w-layout-layout quick-stack wf-layout-layout"
                        >
                          <div
                            id="w-node-aaf41455-63e2-560a-fa71-b50112771751-fbb97df6"
                            className="w-layout-cell cell-5"
                          >
                            <img
                              sizes="(max-width: 479px) 100vw, (max-width: 767px) 76vw, (max-width: 991px) 77vw, (max-width: 1279px) 840.0000610351562px, 1000.0000610351562px"
                              srcSet="/images/How-It-Works-p-500.png 500w, /images/How-It-Works-p-800.png 800w, /images/How-It-Works.png 1226w"
                              alt=""
                              src="/images/How-It-Works.png"
                              loading="lazy"
                              className="image-6"
                            />
                          </div>
                          <div
                            id="w-node-aaf41455-63e2-560a-fa71-b50112771753-fbb97df6"
                            className="w-layout-cell content-cell"
                          >
                            <h1 className="feature-sub-heading">
                              Seamlessly designed with mobile users in mind.
                            </h1>
                            <p className="feature-sub-paragraph">
                              Effortless access to the App functions on your
                              smartphone or tablet, ensuring a user-friendly
                              experience on the go.
                            </p>
                            <a
                              href="#Downlode-app"
                              className="new-button spark-icon-left-button next w-inline-block"
                            >
                              <p className="spark-button-text">Download Our App</p>
                              <div className="spark-small-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                                    fill="currentColor"
                                    fillOpacity="0.94"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
                                    fill="currentColor"
                                    fillOpacity="0.94"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-slide">
                        <div
                          id="w-node-aaf41455-63e2-560a-fa71-b5011277175d-fbb97df6"
                          className="w-layout-layout quick-stack wf-layout-layout"
                        >
                          <div
                            id="w-node-aaf41455-63e2-560a-fa71-b5011277175e-fbb97df6"
                            className="w-layout-cell cell-5"
                          >
                            <img
                              sizes="(max-width: 479px) 100vw, (max-width: 767px) 76vw, (max-width: 991px) 77vw, (max-width: 1279px) 840.0000610351562px, 1000.0000610351562px"
                              srcSet="/images/How-It-Works-p-500.png 500w, /images/How-It-Works-p-800.png 800w, /images/How-It-Works.png 1226w"
                              alt=""
                              src="/images/How-It-Works.png"
                              loading="lazy"
                              className="image-6"
                            />
                          </div>
                          <div
                            id="w-node-aaf41455-63e2-560a-fa71-b50112771760-fbb97df6"
                            className="w-layout-cell content-cell"
                          >
                            <h1 className="feature-sub-heading">
                              Empowering Your Investment Journey: With UFUND
                              Platform.
                            </h1>
                            <p className="feature-sub-paragraph">
                              Seize control of your financial future with our
                              comprehensive App &nbsp;all at your fingertips for
                              &nbsp;strategic investing.
                            </p>
                            <a
                              href="#Downlode-app"
                              className="new-button spark-icon-left-button next w-inline-block"
                            >
                              <p className="spark-button-text">Download Our App</p>
                              <div className="spark-small-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                                    fill="currentColor"
                                    fillOpacity="0.94"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
                                    fill="currentColor"
                                    fillOpacity="0.94"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slide-nav w-slider-nav w-round w-num" />
                  </div>
                )}
                {activeTab === "desktop" && (
                  <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                    <div className="mask w-slider-mask">
                      <div className="w-slide">
                        <div
                          id="w-node-aaf41455-63e2-560a-fa71-b50112771772-fbb97df6"
                          className="w-layout-layout quick-stack wf-layout-layout"
                        >
                          <div
                            id="w-node-aaf41455-63e2-560a-fa71-b50112771773-fbb97df6"
                            className="w-layout-cell cell-5"
                          >
                            <img
                              sizes="(max-width: 479px) 100vw, (max-width: 767px) 76vw, (max-width: 991px) 77vw, (max-width: 1279px) 840.0000610351562px, 1000.0000610351562px"
                              srcSet="/images/How-It-Works-p-500.png 500w, /images/How-It-Works-p-800.png 800w, /images/How-It-Works.png 1226w"
                              alt=""
                              src="/images/How-It-Works.png"
                              loading="lazy"
                              className="image-6"
                            />
                          </div>
                          <div
                            id="w-node-aaf41455-63e2-560a-fa71-b50112771775-fbb97df6"
                            className="w-layout-cell content-cell"
                          >
                            <h1 className="feature-sub-heading">
                              Immerse yourself in our expansive desktop web App
                              interface
                            </h1>
                            <p className="feature-sub-paragraph">
                              Navigate through the intricate world of blockchains
                              investments with ease.
                            </p>
                            <a
                              href="#Downlode-app"
                              className="new-button spark-icon-left-button next w-inline-block"
                            >
                              <p className="spark-button-text">Download Our App</p>
                              <div className="spark-small-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                                    fill="currentColor"
                                    fillOpacity="0.94"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
                                    fill="currentColor"
                                    fillOpacity="0.94"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-slide">
                        <div
                          id="w-node-aaf41455-63e2-560a-fa71-b5011277177f-fbb97df6"
                          className="w-layout-layout quick-stack wf-layout-layout"
                        >
                          <div
                            id="w-node-aaf41455-63e2-560a-fa71-b50112771780-fbb97df6"
                            className="w-layout-cell cell-5"
                          >
                            <img
                              sizes="(max-width: 479px) 100vw, (max-width: 767px) 76vw, (max-width: 991px) 77vw, (max-width: 1279px) 840.0000610351562px, 1000.0000610351562px"
                              srcSet="/images/How-It-Works-p-500.png 500w, /images/How-It-Works-p-800.png 800w, /images/How-It-Works.png 1226w"
                              alt=""
                              src="/images/How-It-Works.png"
                              loading="lazy"
                              className="image-6"
                            />
                          </div>
                          <div
                            id="w-node-aaf41455-63e2-560a-fa71-b50112771782-fbb97df6"
                            className="w-layout-cell content-cell"
                          >
                            <h1 className="feature-sub-heading">
                              Delve into the narrative behind UFUND Platform.
                            </h1>
                            <p className="feature-sub-paragraph">
                              Where our commitment to democratizing investment
                              &nbsp;and empowering companies and individuals drives
                              everything we do.
                            </p>
                            <a
                              href="#Downlode-app"
                              className="new-button spark-icon-left-button next w-inline-block"
                            >
                              <p className="spark-button-text">Download Our App</p>
                              <div className="spark-small-icon w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                                    fill="currentColor"
                                    fillOpacity="0.94"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
                                    fill="currentColor"
                                    fillOpacity="0.94"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slide-nav w-slider-nav w-round w-num" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default HowItLooks