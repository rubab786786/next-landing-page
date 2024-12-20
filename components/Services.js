import React from 'react'

const Services = () => {
  const arrowImageStyles = {
    animation: 'moveUpDownBottom 1.3s linear infinite', // Apply bottom animation to the image
    transformStyle: 'preserve-3d',
    willChange: 'transform',
  };

  const keyframes = `
    @keyframes moveUpDownBottom {
      0%, 100% {
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      }
      50% {
        transform: translate3d(0px, 2px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      }
    }
  `;
  return (
    <>
      <section id="our-services" className="uui-section_pricing09">
        <style>{keyframes}</style>
        <div id="ser" className="uui-page-padding-3">
          <div className="uui-container-large-3">
            <div className="uui-padding-vertical-xhuge-3">
              <div className="uui-text-align-center">
                <div className="uui-max-width-large-2 align-center">
                  <h1 className="feature-heading" style={{ fontFamily: "THICCCBOI" }}>Our Services</h1>
                  <div className="services-text">
                    Explore our cutting-edge services in crowdfunding and
                    tokenization, revolutionizing how you invest in small and
                    medium-sized businesses.
                  </div>
                  <div className="uui-space-xsmall" />
                </div>
              </div>
              <div
                data-current="Tab 1"
                data-easing="ease"
                data-duration-in={300}
                data-duration-out={100}
                className="uui-pricing09_component w-tabs"
              >
                <div className="uui-pricing09_tab-content w-tab-content">
                  <div
                    data-w-tab="Tab 1"
                    className="uui-pricing09_tab-pane w-tab-pane w--tab-active"
                  >
                    <div className="w-layout-grid uui-pricing09_components">
                      <div
                        id="w-node-da171a05-ee9d-352c-3e8d-edf641e89030-fbb97df6"
                        className="uui-pricing09_plan"
                      >
                        <div className="uui-pricing09_content">
                          <div className="uui-pricing09_content-top">
                            <div className="uui-pricing09_icon-wrapper">
                              <img
                                src="/images/Innovative-Investment.png"
                                loading="lazy"
                                alt=""
                              />
                            </div>
                            <h2 className="uui-pricing09_heading">
                              Innovative Investments
                            </h2>
                            <div className="ttt">
                              UFUND Offers The Following Options:
                            </div>
                            <div className="uui-pricing09_feature-list">
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e8903a-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Invest in small and midsize businesses.
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e8903f-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Fund businesses to help them grow.
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e89044-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Invest in the real economy for profits.
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e89049-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Trade P2P tokens backed by assets.
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e8904e-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Invest to boost vetted start-up projects.
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <a
                            href="https://webapp.ufund.online/login"
                            target="_blank"
                            className="spark-buttonpricing-button spark-pricing-icon-button price w-inline-block"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "16px 40px",
                              borderRadius: "12px",// Border radius for rounded corners
                              border: "2px solid transparent",
                              borderImage: "linear-gradient(90deg, #841524 0.85%, #E83A3D 101.71%)",
                              borderImageSlice: 1,
                              textDecoration: "none",
                              backgroundClip: "text",
                              color: "transparent",
                              background: "linear-gradient(90deg, #841524 0.85%, #E83A3D 101.71%)",
                              WebkitBackgroundClip: "text",
                            }}
                          >
                            <p
                              style={{
                                margin: 0,
                                fontSize: "18px",
                                fontWeight: "bold",
                                background: "linear-gradient(90deg, #841524 0.85%, #E83A3D 101.71%)", // Gradient for text color
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                              }}
                              className="button-text"
                            >
                              Get Started Now
                            </p>
                            <div
                              className="service-icon-2"
                              style={{
                                marginLeft: "5px", // Space between text and icon
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  fill: "url(#icon-gradient)", // Gradient for the icon
                                }}
                              >
                                <defs>
                                  <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#AA2020" />
                                    <stop offset="100%" stopColor="#CA207F" />
                                  </linearGradient>
                                </defs>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
                                />
                              </svg>
                            </div>
                          </a> */}
                          <div className="downloadButton">
                            <div className="tab_button_outer active">
                              <button style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                              }}>Get started Now <img src="/images/frames.png" alt="Download" /></button>
                            </div>
                          </div>

                        </div>
                        <img
                          src="/images/Frame.png"
                          loading="lazy"
                          alt=""
                          className="image-14"
                          style={arrowImageStyles}
                        />
                      </div>
                      <div
                        id="w-node-da171a05-ee9d-352c-3e8d-edf641e89058-fbb97df6"
                        className="uui-pricing09_plan top-level"
                      >
                        <div className="uui-pricing09_content">
                          <div className="uui-pricing09_content-top">
                            <div className="uui-pricing09_icon-wrapper">
                              <img
                                src="/images/pricing-tokken.png"
                                loading="lazy"
                                alt=""
                                className="image-7"
                              />
                            </div>
                            <h2 className="uui-pricing09_heading">Tokenization</h2>
                            <div className="ttt">
                              UFUND Offers The Following Options:
                            </div>
                            <div className="uui-pricing09_feature-list">
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e89062-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Get access to an easy-to-use tokenizer
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e89067-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Create several tokens you want
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e8906c-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Start offering tokens to investors with the best
                                  crypto wallet
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e89071-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Gain substantial returns from market moves and
                                  interests
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e89076-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Use tokens for making investments
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e8907b-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Issue utility and security tokens
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <a
                            href="https://webapp.ufund.online/login"
                            target="_blank"
                            className="spark-buttonpricing-button spark-pricing-icon-button price w-inline-block"
                          >
                            <p className="button-text">Get Started Now</p>
                            <div className="service-icon-2 w-embed">
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
                          </a> */}
                          <div className="downloadButton">
                            <div className="tab_button_outer active">
                              <button style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                              }}>Get started Now <img src="/images/frames.png" alt="Download" /></button>
                            </div>
                          </div>
                        </div>
                        <div className="uui-pricing09_popular-label" />
                      </div>
                      <div
                        id="w-node-da171a05-ee9d-352c-3e8d-edf641e89085-fbb97df6"
                        className="uui-pricing09_plan"
                      >
                        <div className="uui-pricing09_content">
                          <div className="uui-pricing09_content-top">
                            <div className="uui-pricing09_icon-wrapper">
                              <img
                                src="/images/Crowd-funding.png"
                                loading="lazy"
                                alt=""
                              />
                            </div>
                            <h2 className="uui-pricing09_heading">Crowdfunding</h2>
                            <div className="ttt">
                              UFUND Offers The Following Options:
                            </div>
                            <div className="uui-pricing09_feature-list">
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e8908f-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Signup and verify your email
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e89094-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Undergo KYC/AML and get approved
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e89099-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Sign in and fill in the UFUND form
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e8909e-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Campaign to raise working capital
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e890a3-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Connect with many investors
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e890a8-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_134_992)">
                                        <path
                                          d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z"
                                          fill="#E83A3D"
                                        />
                                        <path
                                          d="M5.47485 10.6466L8.06086 13.2326L14.5259 6.76758"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_134_992">
                                          <rect
                                            width={20}
                                            height={20}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Fund your purchase orders and sales order by
                                  investors
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <a
                            href="https://webapp.ufund.online/login"
                            target="_blank"
                            className="spark-buttonpricing-button spark-pricing-icon-button price w-inline-block"
                          >
                            <p className="button-text">Get Started Now</p>
                            <div className="service-icon-2 w-embed">
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
                          </a> */}
                          <div className="downloadButton">
                            <div className="tab_button_outer active">
                              <button style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                              }}>Get started Now <img src="/images/frames.png" alt="Download" /></button>
                            </div>
                          </div>
                        </div>
                        <img
                          src="/images/Frame.png"
                          loading="lazy"
                          alt=""
                          className="image-15"
                          style={arrowImageStyles}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-w-tab="Tab 2"
                    className="uui-pricing09_tab-pane w-tab-pane"
                  >
                    <div className="w-layout-grid uui-pricing09_components">
                      <div
                        id="w-node-da171a05-ee9d-352c-3e8d-edf641e890b4-fbb97df6"
                        className="uui-pricing09_plan"
                      >
                        <div className="uui-pricing09_content">
                          <div className="uui-pricing09_content-top">
                            <div className="uui-pricing09_icon-wrapper">
                              <div className="uui-icon-featured-outline-large">
                                <div className="uui-icon-1x1-xsmall w-embed">
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <h2 className="uui-pricing09_heading">Basic plan</h2>
                            <div className="uui-pricing09_price">
                              $96
                              <span className="uui-pricing09_price-text">/yr</span>
                            </div>
                            <div className="uui-text-size-medium">
                              Ideal for small teams and startups.
                            </div>
                            <div className="uui-pricing09_divider" />
                            <div className="uui-text-size-medium">
                              This includes...
                            </div>
                            <div className="uui-pricing09_feature-list">
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e890c6-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                        fill="#F4EBFF"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                                        fill="#9E77ED"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Access to all basic features
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e890cb-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                        fill="#F4EBFF"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                                        fill="#9E77ED"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Basic reporting and analytics
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e890d0-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                        fill="#F4EBFF"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                                        fill="#9E77ED"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Up to 10 individual users
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e890d5-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                        fill="#F4EBFF"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                                        fill="#9E77ED"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  20GB individual data each user
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e890da-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                        fill="#F4EBFF"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                                        fill="#9E77ED"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Basic chat and email support
                                </div>
                              </div>
                            </div>
                          </div>
                          <a href="#" className="uui-button-2 w-inline-block">
                            <div>Get started</div>
                          </a>
                        </div>
                      </div>
                      <div
                        id="w-node-da171a05-ee9d-352c-3e8d-edf641e890e2-fbb97df6"
                        className="uui-pricing09_plan"
                      >
                        <div className="uui-pricing09_content">
                          <div className="uui-pricing09_content-top">
                            <div className="uui-pricing09_icon-wrapper">
                              <div className="uui-icon-featured-outline-large">
                                <div className="uui-icon-1x1-xsmall w-embed">
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2 14.5001L11.6422 19.3212C11.7734 19.3868 11.839 19.4196 11.9078 19.4325C11.9687 19.4439 12.0313 19.4439 12.0922 19.4325C12.161 19.4196 12.2266 19.3868 12.3578 19.3212L22 14.5001M2 9.50006L11.6422 4.67895C11.7734 4.61336 11.839 4.58056 11.9078 4.56766C11.9687 4.55622 12.0313 4.55622 12.0922 4.56766C12.161 4.58056 12.2266 4.61336 12.3578 4.67895L22 9.50006L12.3578 14.3212C12.2266 14.3868 12.161 14.4196 12.0922 14.4325C12.0313 14.4439 11.9687 14.4439 11.9078 14.4325C11.839 14.4196 11.7734 14.3868 11.6422 14.3212L2 9.50006Z"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <h2 className="uui-pricing09_heading">Business plan</h2>
                            <div className="uui-pricing09_price">
                              $192
                              <span className="uui-pricing09_price-text">/yr</span>
                            </div>
                            <div className="uui-text-size-medium">
                              Growing teams up to 20 users.
                            </div>
                            <div className="uui-pricing09_divider" />
                            <div className="uui-text-size-medium">
                              Everything in our{" "}
                              <span className="uui-text-weight-semibold">
                                basic plan
                              </span>{" "}
                              plus....
                            </div>
                            <div className="uui-pricing09_feature-list">
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e890f7-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                        fill="#F4EBFF"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                                        fill="#9E77ED"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  200+ integrations
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e890fc-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                        fill="#F4EBFF"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                                        fill="#9E77ED"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Advanced reporting and analytics
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e89101-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                        fill="#F4EBFF"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                                        fill="#9E77ED"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Up to 20 individual users
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e89106-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                        fill="#F4EBFF"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                                        fill="#9E77ED"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  40GB individual data each user
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e8910b-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                        fill="#F4EBFF"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                                        fill="#9E77ED"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Priority chat and email support
                                </div>
                              </div>
                            </div>
                          </div>
                          <a href="#" className="uui-button-2 w-inline-block">
                            <div>Get started</div>
                          </a>
                        </div>
                        <div className="uui-pricing09_popular-label">
                          <div className="uui-badge is-primary">
                            <div>Popular</div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-da171a05-ee9d-352c-3e8d-edf641e89117-fbb97df6"
                        className="uui-pricing09_plan"
                      >
                        <div className="uui-pricing09_content">
                          <div className="uui-pricing09_content-top">
                            <div className="uui-pricing09_icon-wrapper">
                              <div className="uui-icon-featured-outline-large">
                                <div className="uui-icon-1x1-xsmall w-embed">
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2 12.0001L11.6422 16.8212C11.7734 16.8868 11.839 16.9196 11.9078 16.9325C11.9687 16.9439 12.0313 16.9439 12.0922 16.9325C12.161 16.9196 12.2266 16.8868 12.3578 16.8212L22 12.0001M2 17.0001L11.6422 21.8212C11.7734 21.8868 11.839 21.9196 11.9078 21.9325C11.9687 21.9439 12.0313 21.9439 12.0922 21.9325C12.161 21.9196 12.2266 21.8868 12.3578 21.8212L22 17.0001M2 7.00006L11.6422 2.17895C11.7734 2.11336 11.839 2.08056 11.9078 2.06766C11.9687 2.05622 12.0313 2.05622 12.0922 2.06766C12.161 2.08056 12.2266 2.11336 12.3578 2.17895L22 7.00006L12.3578 11.8212C12.2266 11.8868 12.161 11.9196 12.0922 11.9325C12.0313 11.9439 11.9687 11.9439 11.9078 11.9325C11.839 11.9196 11.7734 11.8868 11.6422 11.8212L2 7.00006Z"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <h2 className="uui-pricing09_heading">
                              Enterprise plan
                            </h2>
                            <div className="uui-pricing09_price">
                              $384
                              <span className="uui-pricing09_price-text">/yr</span>
                            </div>
                            <div className="uui-text-size-medium">
                              Large teams with unlimited users.
                            </div>
                            <div className="uui-pricing09_divider" />
                            <div className="uui-text-size-medium">
                              Everything in our{" "}
                              <strong className="uui-text-weight-semibold">
                                business plan
                              </strong>{" "}
                              plus....
                            </div>
                            <div className="uui-pricing09_feature-list">
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e8912c-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                        fill="#F4EBFF"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                                        fill="#9E77ED"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Advanced custom fields
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e89131-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                        fill="#F4EBFF"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                                        fill="#9E77ED"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Audit log and data history
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e89136-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                        fill="#F4EBFF"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                                        fill="#9E77ED"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Unlimited individual users
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e8913b-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                        fill="#F4EBFF"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                                        fill="#9E77ED"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Unlimited individual data
                                </div>
                              </div>
                              <div
                                id="w-node-da171a05-ee9d-352c-3e8d-edf641e89140-fbb97df6"
                                className="uui-pricing09_feature"
                              >
                                <div className="uui-pricing09_feature-icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                        fill="#F4EBFF"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z"
                                        fill="#9E77ED"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Personalised+priotity service
                                </div>
                              </div>
                            </div>
                          </div>
                          <a href="#" className="uui-button-2 w-inline-block">
                            <div>Get started</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services