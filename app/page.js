import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function HomePage() {
  return (
    <>
      <main>
        <section id="anchor-scroll" className="pop-section">
          <div className="div-block-6">
            <div className="div-block-7">
              <img
                src="/images/—Pngtree—vector-cross-icon_4232054-1.png"
                loading="lazy"
                width={32}
                data-w-id="fa48c00e-e3cf-8866-78d9-36e2b5ca543f"
                alt=""
                className="image-24"
              />
            </div>
            <div
              style={{ paddingTop: "56.17021276595745%" }}
              className="w-embed-youtubevideo youtube"
            >
              <iframe
                src="https://www.youtube.com/embed/GHDYTCVnujE?rel=0&controls=1&autoplay=0&mute=0&start=0"
                frameBorder="0"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "auto"
                }}
                allow="autoplay; encrypted-media"
                allowFullScreen=""
                title="UFUND Crowdfunding small businesses explainer"
              />
            </div>
          </div>
        </section>
        <div
          data-animation="default"
          className="brix---header-wrapper w-nav"
          data-easing2="ease"
          data-easing="ease"
          data-collapse="medium"
          data-w-id="d3ee4abe-e676-2f91-b92e-3f136f16bc9b"
          role="banner"
          data-duration={400}
          id="hero"
        >
          <div className="brix---container-default w-container">
            <div className="brix---header-content-wrapper">
              <a href="#" className="brix---header-logo-link w-nav-brand">
                <img alt="" src="/images/logo.svg" className="brix---header-logo" />
              </a>
              <div className="brix---header-middle-col">
                <nav
                  role="navigation"
                  className="brix---header-menu-wrapper w-nav-menu"
                >
                  <ul role="list" className="brix---header-nav-menu-list">
                    <li className="brix---header-nav-list-item-middle">
                      <a href="#" className="brix---header-nav-link w-nav-link">
                        Home
                      </a>
                    </li>
                    <li className="brix---header-nav-list-item-middle">
                      <a href="#how-it-looks" className="navl w-nav-link">
                        How It Looks
                      </a>
                    </li>
                    <li className="brix---header-nav-list-item-middle">
                      <a
                        href="#how-it-works"
                        className="brix---header-nav-link w-nav-link"
                      >
                        How It Works
                      </a>
                    </li>
                    <li className="brix---header-nav-list-item-middle">
                      <a href="#about" className="brix---header-nav-link w-nav-link">
                        About
                      </a>
                    </li>
                    <li className="brix---header-nav-list-item-middle">
                      <a href="#ser" className="brix---header-nav-link w-nav-link">
                        Our Services{" "}
                      </a>
                    </li>
                    <li className="brix---header-nav-list-item-middle">
                      <a href="#" className="lightbox-link w-inline-block w-lightbox">
                        <div className="brix---header-nav-link-demo">
                          Demo
                          <br />‍
                        </div>
                      </a>
                    </li>
                    <li className="brix---header-nav-list-item-middle">
                      <a
                        href="#contact1"
                        className="brix---header-nav-link w-nav-link"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="brix---header-nav-list-item-show-in-mbl">
                      <a
                        href="https://webapp.ufund.online/login"
                        target="_blank"
                        className="brix---link-wrapper w-inline-block"
                      >
                        <img
                          loading="lazy"
                          src="/images/Lock.svg"
                          alt=""
                          className="brix---link-icon-right"
                        />
                        <div className="brix---link-text">Sign In</div>
                      </a>
                    </li>
                    <li className="brix---header-nav-list-item-show-in-mbl">
                      <a
                        href="https://webapp.ufund.online/login"
                        target="_blank"
                        className="brix---btn-primary-small w-button"
                      >
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="brix---header-right-col">
                <div className="brix---hamburger-menu-wrapper w-nav-button">
                  <div
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                      transform:
                        "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)"
                    }}
                    className="brix---hamburger-menu-bar-top"
                  />
                  <div
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                      transform:
                        "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)"
                    }}
                    className="brix---hamburger-menu-bar-bottom"
                  />
                </div>
                <div className="brix---btn-header-hidden-on-mbl">
                  <a
                    href="https://webapp.ufund.online/login"
                    target="_blank"
                    className="brix---link-wrapper w-inline-block"
                  >
                    <img
                      loading="lazy"
                      src="/images/Lock.svg"
                      alt=""
                      className="brix---link-icon-right"
                    />
                    <div className="brix---link-text">Sign In</div>
                  </a>
                </div>
                <div className="brix---btn-header-hidden-on-mbl">
                  <a
                    href="https://webapp.ufund.online/login"
                    target="_blank"
                    className="brix---btn-primary-small w-button"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="hero-section">
          <div className="w-layout-blockcontainer hero-container w-container">
            <div
              id="w-node-_5f35611c-848b-041b-cf2d-ea8d32c79a64-fbb97df6"
              className="w-layout-layout hero-quick-stack wf-layout-layout"
            >
              <div
                id="w-node-_5f35611c-848b-041b-cf2d-ea8d32c79a65-fbb97df6"
                className="w-layout-cell cell"
              >
                <h1 className="heading">
                  One Platform to Power Your Investment Journey!
                </h1>
                <div className="uui-heroheader23_item-list">
                  <div
                    id="w-node-_5f35611c-848b-041b-cf2d-ea8d32c79a69-fbb97df6"
                    className="uui-heroheader23_item"
                  >
                    <div className="uui-heroheader23_item-icon-wrapper">
                      <div className="uui-icon-1x1-small w-embed">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.50008 9.5L9.16675 11.1667L12.9167 7.41666M6.11155 2.68224C6.78142 2.62879 7.41734 2.36538 7.92881 1.92951C9.12235 0.912381 10.8778 0.912381 12.0714 1.92951C12.5828 2.36538 13.2187 2.62879 13.8886 2.68224C15.4518 2.80699 16.6931 4.04828 16.8178 5.61147C16.8713 6.28133 17.1347 6.91726 17.5706 7.42872C18.5877 8.62227 18.5877 10.3777 17.5706 11.5713C17.1347 12.0827 16.8713 12.7187 16.8178 13.3885C16.6931 14.9517 15.4518 16.193 13.8886 16.3178C13.2187 16.3712 12.5828 16.6346 12.0714 17.0705C10.8778 18.0876 9.12235 18.0876 7.92881 17.0705C7.41734 16.6346 6.78142 16.3712 6.11155 16.3178C4.54837 16.193 3.30707 14.9517 3.18233 13.3885C3.12887 12.7187 2.86546 12.0827 2.4296 11.5713C1.41246 10.3777 1.41246 8.62227 2.4296 7.42872C2.86546 6.91726 3.12887 6.28133 3.18233 5.61147C3.30707 4.04828 4.54837 2.80699 6.11155 2.68224Z"
                            stroke="#CC3333"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="uui-heroheader23_item-text-wrapper">
                      <div className="uui-text-size-large">
                        Invest for substantial return
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-_5f35611c-848b-041b-cf2d-ea8d32c79a6f-fbb97df6"
                    className="uui-heroheader23_item"
                  >
                    <div className="uui-heroheader23_item-icon-wrapper">
                      <div className="uui-icon-1x1-small w-embed">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.50008 9.5L9.16675 11.1667L12.9167 7.41666M6.11155 2.68224C6.78142 2.62879 7.41734 2.36538 7.92881 1.92951C9.12235 0.912381 10.8778 0.912381 12.0714 1.92951C12.5828 2.36538 13.2187 2.62879 13.8886 2.68224C15.4518 2.80699 16.6931 4.04828 16.8178 5.61147C16.8713 6.28133 17.1347 6.91726 17.5706 7.42872C18.5877 8.62227 18.5877 10.3777 17.5706 11.5713C17.1347 12.0827 16.8713 12.7187 16.8178 13.3885C16.6931 14.9517 15.4518 16.193 13.8886 16.3178C13.2187 16.3712 12.5828 16.6346 12.0714 17.0705C10.8778 18.0876 9.12235 18.0876 7.92881 17.0705C7.41734 16.6346 6.78142 16.3712 6.11155 16.3178C4.54837 16.193 3.30707 14.9517 3.18233 13.3885C3.12887 12.7187 2.86546 12.0827 2.4296 11.5713C1.41246 10.3777 1.41246 8.62227 2.4296 7.42872C2.86546 6.91726 3.12887 6.28133 3.18233 5.61147C3.30707 4.04828 4.54837 2.80699 6.11155 2.68224Z"
                            stroke="#CC3333"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="uui-heroheader23_item-text-wrapper">
                      <div className="uui-text-size-large">
                        Business campaign for working capital
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-_5f35611c-848b-041b-cf2d-ea8d32c79a75-fbb97df6"
                    className="uui-heroheader23_item"
                  >
                    <div className="uui-heroheader23_item-icon-wrapper">
                      <div className="uui-icon-1x1-small w-embed">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.50008 9.5L9.16675 11.1667L12.9167 7.41666M6.11155 2.68224C6.78142 2.62879 7.41734 2.36538 7.92881 1.92951C9.12235 0.912381 10.8778 0.912381 12.0714 1.92951C12.5828 2.36538 13.2187 2.62879 13.8886 2.68224C15.4518 2.80699 16.6931 4.04828 16.8178 5.61147C16.8713 6.28133 17.1347 6.91726 17.5706 7.42872C18.5877 8.62227 18.5877 10.3777 17.5706 11.5713C17.1347 12.0827 16.8713 12.7187 16.8178 13.3885C16.6931 14.9517 15.4518 16.193 13.8886 16.3178C13.2187 16.3712 12.5828 16.6346 12.0714 17.0705C10.8778 18.0876 9.12235 18.0876 7.92881 17.0705C7.41734 16.6346 6.78142 16.3712 6.11155 16.3178C4.54837 16.193 3.30707 14.9517 3.18233 13.3885C3.12887 12.7187 2.86546 12.0827 2.4296 11.5713C1.41246 10.3777 1.41246 8.62227 2.4296 7.42872C2.86546 6.91726 3.12887 6.28133 3.18233 5.61147C3.30707 4.04828 4.54837 2.80699 6.11155 2.68224Z"
                            stroke="#CC3333"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="uui-heroheader23_item-text-wrapper">
                      <div className="uui-text-size-large">
                        Tokenize for cash optimization
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-block">
                  <a
                    href="#Downlode-app"
                    className="spark-button spark-icon-left-button next w-inline-block"
                  >
                    <p className="paragraph-5">Download Our App</p>
                    <div className="html-embed w-embed">
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
                  <img
                    src="/images/Group-4.svg"
                    loading="lazy"
                    alt=""
                    className="image-3"
                  />
                  <a
                    href="#"
                    className="spark-button-play spark-icon-play-button play w-inline-block w-lightbox"
                  >
                    <div className="spark-small-icon w-embed">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.3334 2.66667C17.8386 2.66667 20.2876 3.40956 22.3706 4.80139C24.4537 6.19322 26.0772 8.17148 27.0359 10.486C27.9946 12.8005 28.2454 15.3474 27.7567 17.8045C27.268 20.2616 26.0616 22.5186 24.2901 24.29C22.5186 26.0615 20.2617 27.2679 17.8046 27.7566C15.3475 28.2454 12.8006 27.9945 10.4861 27.0358C8.17156 26.0771 6.1933 24.4536 4.80147 22.3706C3.40964 20.2875 2.66675 17.8386 2.66675 15.3333C2.66675 11.9739 4.00127 8.75211 6.37673 6.37665C8.75219 4.00119 11.974 2.66667 15.3334 2.66667Z"
                          stroke="url(#paint0_linear_141_713)"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.3335 15.3331C19.3335 14.2451 13.7908 10.7851 13.1615 11.4077C12.5322 12.0304 12.4722 18.5651 13.1615 19.2464C13.8508 19.9277 19.3335 16.4077 19.3335 15.3331Z"
                          stroke="url(#paint1_linear_141_713)"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_141_713"
                            x1="2.88327"
                            y1="19.718"
                            x2="28.4331"
                            y2="19.718"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#841524" />
                            <stop offset={1} stopColor="#E83A3D" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_141_713"
                            x1="12.7237"
                            y1="16.7179"
                            x2="19.4475"
                            y2="16.7179"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#841524" />
                            <stop offset={1} stopColor="#E83A3D" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="spark-button-text-copy">Watch Demo Now</div>
                  </a>
                </div>
              </div>

              <img
                src="/images/hero-test-bg.png"
                loading="lazy"
                width={147}
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 100vw, 1240px"
                alt=""
                srcSet="/images/hero-test-bg-p-500.png 500w, /images/hero-test-bg-p-800.png 800w, /images/hero-test-bg-p-1080.png 1080w, /images/hero-test-bg-p-1600.png 1600w, /images/hero-test-bg.png 2032w"
                className="image-2"
              />
            </div>
          </div>
        </section>
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
            {/* <div className="div-block-2">
              <div
                data-current="Tab 1"
                className="tabs w-tabs"
              >
                <div className="tabs-menu w-tab-menu">
                  <a
                    data-w-tab="Tab 1"
                    className="tab tab-link-tab-2 w-inline-block w-tab-link w--current"
                  >
                    <div className="text-block-4">Mobile</div>
                  </a>
                  <a
                    data-w-tab="Tab 2"
                    className="tab tab-link-tab-2 w-inline-block w-tab-link"
                  >
                    <div className="text-block-3">Desktop</div>
                  </a>
                </div>
                <div className="w-tab-content">
                  <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                      <div className="mask w-slider-mask">
                        <div className="w-slide">
                          <div
                            id="w-node-aaf41455-63e2-560a-fa71-b50112771750-fbb97df6"
                            className="w-layout-layout quick-stack wf-layout-layout"
                          >
                            <div
                              id="w-node-aaf41455-63e2-560a-fa71-b50112771751-fbb97df6"
                              // data-w-id="aaf41455-63e2-560a-fa71-b50112771751"
                              // style={{ opacity: 0 }}
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
                              // data-w-id="aaf41455-63e2-560a-fa71-b50112771753"
                              // style={{ opacity: 0 }}
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
                              // data-w-id="aaf41455-63e2-560a-fa71-b5011277175e"
                              // style={{ opacity: 0 }}
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
                              // data-w-id="aaf41455-63e2-560a-fa71-b50112771760"
                              // style={{ opacity: 0 }}
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
                      <div className="left-arrow w-slider-arrow-left">
                        <img
                          loading="lazy"
                          src="https://uploads-ssl.webflow.com/65b241323dfbfb12eb47a03b/65bd2926d807263491a559a3_Arrow%20-%20Right.png"
                          alt=""
                        />
                      </div>
                      <div className="right-arrow w-slider-arrow-right">
                        <img
                          loading="lazy"
                          src="https://uploads-ssl.webflow.com/65b241323dfbfb12eb47a03b/65bd28b5e98b18de6be7094c_Arrow%20-%20Right.png"
                          alt=""
                        />
                      </div>
                      <div className="slide-nav w-slider-nav w-round w-num" />
                  </div>
                  <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                      <div className="mask w-slider-mask">
                        <div className="w-slide">
                          <div
                            id="w-node-aaf41455-63e2-560a-fa71-b50112771772-fbb97df6"
                            className="w-layout-layout quick-stack wf-layout-layout"
                          >
                            <div
                              id="w-node-aaf41455-63e2-560a-fa71-b50112771773-fbb97df6"
                              // data-w-id="aaf41455-63e2-560a-fa71-b50112771773"
                              // style={{ opacity: 0 }}
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
                              // data-w-id="aaf41455-63e2-560a-fa71-b50112771775"
                              // style={{ opacity: 0 }}
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
                              // data-w-id="aaf41455-63e2-560a-fa71-b50112771780"
                              // style={{ opacity: 0 }}
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
                              // data-w-id="aaf41455-63e2-560a-fa71-b50112771782"
                              // style={{ opacity: 0 }}
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
                      <div className="left-arrow w-slider-arrow-left">
                        <img
                          loading="lazy"
                          src="https://uploads-ssl.webflow.com/65b241323dfbfb12eb47a03b/65bd2926d807263491a559a3_Arrow%20-%20Right.png"
                          alt=""
                        />
                      </div>
                      <div className="right-arrow w-slider-arrow-right">
                        <img
                          loading="lazy"
                          src="https://uploads-ssl.webflow.com/65b241323dfbfb12eb47a03b/65bd28b5e98b18de6be7094c_Arrow%20-%20Right.png"
                          alt=""
                        />
                      </div>
                      <div className="slide-nav w-slider-nav w-round w-num" />
                  </div>
                </div>
              </div>
            </div> */}
            <Tabs defaultValue="how-it-looks-tabs" className="w-[400px]">
              <TabsList>
              <div className="tabs-menu w-tab-menu">
                  <a
                    data-w-tab="Tab 1"
                    className="tab tab-link-tab-2 w-inline-block w-tab-link w--current"
                  >
                    <TabsTrigger value="mobile" className="text-block-3">Mobile</TabsTrigger>
                  </a>
                  <a
                    data-w-tab="Tab 2"
                    className="tab tab-link-tab-2 w-inline-block w-tab-link"
                  >
                    <TabsTrigger value="desktop" className="text-block-3">Desktop</TabsTrigger>
                  </a>
                </div>
              </TabsList>
              <div className="w-tab-content">
                <TabsContent value="mobile">
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
                </TabsContent>
                <TabsContent value="desktop">
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
                </TabsContent>
              </div>
            </Tabs>

          </div>
        </section>
        <section id="how-it-works" className="feature-section-1">
          <div className="w-layout-blockcontainer feature-container-1 w-container">
            <h1 className="pr-heading">Welcome To UFUND&nbsp;Program</h1>
            <p className="paragraph-7">
              We're thrilled to have you join us &nbsp;to unlocking opportunities and
              maximizing returns.
              <br />
              Get ready to experience a &nbsp;journey tailored to your financial
              aspirations.
            </p>
            {/* <div className="div-block-4">
              <div
                data-current="Tab 1"
                className="tabs w-tabs"
              >
                <div className="tabs-menu-1 w-tab-menu">
                  <a
                    data-w-tab="Tab 1"
                    className="tab tab-link-tab-2 w-inline-block w-tab-link w--current"
                  >
                    <div className="text-block-5">Investors</div>
                  </a>
                  <a
                    data-w-tab="Tab 2"
                    className="tab tab-link-tab-2 w-inline-block w-tab-link"
                  >
                    <div className="text-block-3">bussiness campaigners</div>
                  </a>
                </div>
                <div className="tab-con1 w-tab-content">
                  <div data-w-tab="Tab 1" className="tab-pa1 w-tab-pane w--tab-active">
                    <div
                      id="w-node-ee071c67-4def-2852-24de-9fc27060db50-fbb97df6"
                      className="w-layout-layout quick-stack-1 wf-layout-layout"
                    >
                      <div
                        id="w-node-ee071c67-4def-2852-24de-9fc27060db51-fbb97df6"
                        data-w-id="ee071c67-4def-2852-24de-9fc27060db51"
                        className="w-layout-cell cell-im"
                      >
                        <h1 className="h">Just follow these steps:</h1>
                        <p className="p">
                          Our intuitive signup process ensures easy access to our
                          platform, allowing you to start investing in no time.
                        </p>
                        <img
                          loading="lazy"
                          src="/images/Illustration.png"
                          alt=""
                          className="image-12"
                        />
                      </div>
                      <div
                        id="w-node-ee071c67-4def-2852-24de-9fc27060db57-fbb97df6"
                        data-w-id="ee071c67-4def-2852-24de-9fc27060db57"
                        className="w-layout-cell content-cell"
                      >
                        <a
                          href="#"
                          className="new-button spark-icon-left-button next w-inline-block"
                        />
                        <div className="a">
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060db5a-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-2-1_1Group-2-1.png"
                                alt=""
                              />
                            </div>
                            <div className="text111">
                              <div className="text-1">
                                <a
                                  href="https://webapp.ufund.online/login"
                                  target="_blank"
                                >
                                  <strong>Sign up here</strong>
                                </a>{" "}
                                or <strong className="bold-text">download </strong>the{" "}
                                <a href="#Downlode-app">
                                  <strong>UFUND iOS</strong>
                                </a>
                                <strong> or </strong>
                                <a href="#Downlode-app">
                                  <strong>Android</strong>{" "}
                                </a>
                                to sign up from your mobile.
                              </div>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060db70-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-3_1Group-3.png"
                                alt=""
                              />
                            </div>
                            <div className="text111">
                              <p className="text-1">
                                Enroll now with <strong>UFUND platform</strong> in a
                                few minutes.
                              </p>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060db79-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-4_1Group-4.png"
                                alt=""
                              />
                            </div>
                            <div className="text111">
                              <p className="text-1">
                                <strong>Verify your email</strong> to access your
                                investor's account.
                              </p>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060db81-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-5_1Group-5.png"
                                alt=""
                              />
                            </div>
                            <div className="text111">
                              <p className="text-1">
                                Get approved to login into FUND platform.
                              </p>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060db87-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-6_1Group-6.png"
                                alt=""
                                className="image-11"
                              />
                            </div>
                            <div className="text111">
                              <p className="text-1">
                                Start investing in{" "}
                                <strong>approved investments offers.</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-layout-blockcontainer container-5 w-container">
                      <h1 className="heading-5">Features For Investors</h1>
              
                      <div className="industries_mask new-home w-slider-mask">
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">Dashboard</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16.png"
                              alt=""
                              className="image-13"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">Categories</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-1.png"
                              alt=""
                              className="image-13"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">My Product Investment</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-2.png"
                              alt=""
                              className="image-19"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">New Products</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-5.png"
                              alt=""
                              className="image-20"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">New Tokenized Assets</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-6.png"
                              alt=""
                              className="image-21"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">Dashbord</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16.png"
                              alt=""
                              className="image-22"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">Categories</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-1.png"
                              alt=""
                              className="image-13"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">My Product Investment</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-2.png"
                              alt=""
                              className="image-19"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="industries_arrow left new-home w-slider-arrow-left">
                        <img
                          loading="lazy"
                          src="/images/Arrow---Right_1Arrow---Right.png"
                          alt=""
                        />
                      </div>
                      <div className="industries_arrow new-home w-slider-arrow-right">
                        <img
                          loading="lazy"
                          src="/images/Arrow---Right_2Arrow---Right.png"
                          alt=""
                        />
                      </div>
                      <div className="industries_slide-nav w-slider-nav w-slider-nav-invert w-round" />
                    </div>
                  </div>
                  <div data-w-tab="Tab 2" className="tab-pa1 w-tab-pane">
                    <div
                      id="w-node-ee071c67-4def-2852-24de-9fc27060dbc2-fbb97df6"
                      className="w-layout-layout quick-stack-1 wf-layout-layout"
                    >
                      <div
                        id="w-node-ee071c67-4def-2852-24de-9fc27060dbc3-fbb97df6"
                        className="w-layout-cell cell-im"
                      >
                        <h1 className="h">Just follow these steps:</h1>
                        <p className="p">
                          Our intuitive signup process ensures easy access to our
                          platform, allowing you to start campaigning in no time.
                        </p>
                        <img
                          loading="lazy"
                          src="/images/Illustration.png"
                          alt=""
                          className="image-12"
                        />
                      </div>
                      <div
                        id="w-node-ee071c67-4def-2852-24de-9fc27060dbc9-fbb97df6"
                        className="w-layout-cell content-cell"
                      >
                        <a
                          href="#"
                          className="new-button spark-icon-left-button next w-inline-block"
                        />
                        <div className="a">
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060dbcc-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-2-1_1Group-2-1.png"
                                alt=""
                              />
                            </div>
                            <div className="text111">
                              <div className="text-1">
                                <a
                                  href="https://webapp.ufund.online/login"
                                  target="_blank"
                                >
                                  <strong>Sign up here</strong>
                                </a>{" "}
                                or <strong className="bold-text">download </strong>the{" "}
                                <a href="#Downlode-app">
                                  <strong>UFUND iOS</strong>
                                </a>
                                <strong> or </strong>
                                <a href="#Downlode-app">
                                  <strong>Android</strong>
                                </a>{" "}
                                to sign up from your mobile.
                              </div>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060dbe1-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-3_1Group-3.png"
                                alt=""
                              />
                            </div>
                            <div className="text111">
                              <p className="text-1">
                                Enroll now with <strong>UFUND platform</strong> in a
                                few minutes.
                              </p>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060dbea-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-4_1Group-4.png"
                                alt=""
                              />
                            </div>
                            <div className="text111">
                              <p className="text-1">
                                <strong>Verify your email</strong> to access your
                                campaigner's account.
                              </p>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060dbf2-fbb97df6"
                            className="div-block-9"
                          >
                            <div
                              id="w-node-ee071c67-4def-2852-24de-9fc27060dbf3-fbb97df6"
                              className="item"
                            >
                              <div className="img">
                                <img
                                  loading="lazy"
                                  src="/images/Group-5_1Group-5.png"
                                  alt=""
                                />
                              </div>
                              <div className="text111">
                                <p className="text-1">
                                  Start submitting your business assets and ask for
                                  deployement <strong>on Blockchain</strong>.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060dbfc-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-6_1Group-6.png"
                                alt=""
                                className="image-11"
                              />
                            </div>
                            <div className="text111">
                              <p className="text-1">
                                Wait to get your assets Tokenized and listed for P2P
                                trading.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-layout-blockcontainer container-5 w-container">
                      <h1 className="heading-5">Features For Business Campaigners</h1>
                    
                      <div className="industries_mask new-home w-slider-mask">
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">Dashboard</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16.png"
                              alt=""
                              className="image-13"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">Categories</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-1.png"
                              alt=""
                              className="image-13"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">My Product Investment</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-2.png"
                              alt=""
                              className="image-19"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">New Products</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-5.png"
                              alt=""
                              className="image-20"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">New Tokenized Assets</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-6.png"
                              alt=""
                              className="image-21"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">Dashbord</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16.png"
                              alt=""
                              className="image-22"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">Categories</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-1.png"
                              alt=""
                              className="image-13"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">My Product Investment</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-2.png"
                              alt=""
                              className="image-19"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="industries_arrow left new-home w-slider-arrow-left">
                        <img
                          loading="lazy"
                          src="/images/Arrow---Right_1Arrow---Right.png"
                          alt=""
                        />
                      </div>
                      <div className="industries_arrow new-home w-slider-arrow-right">
                        <img
                          loading="lazy"
                          src="/images/Arrow---Right_2Arrow---Right.png"
                          alt=""
                        />
                      </div>
                      <div className="industries_slide-nav w-slider-nav w-slider-nav-invert w-round" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <Tabs defaultValue="how-it-works-tabs" className="w-[400px]">
              <TabsList>
              <div className="tabs-menu-1 w-tab-menu">
                  <a
                    data-w-tab="Tab 1"
                    className="tab tab-link-tab-2 w-inline-block w-tab-link w--current"
                  >
                    <TabsTrigger value="investors" className="text-block-5">Investors</TabsTrigger>
                  </a>
                  <a
                    data-w-tab="Tab 2"
                    className="tab tab-link-tab-2 w-inline-block w-tab-link"
                  >
                    <TabsTrigger value="businnes-compaigners" className="text-block-5">Business Compaigners</TabsTrigger>
                  </a>
                </div>
              </TabsList>
              <div className="tab-con1 w-tab-content">
              <TabsContent value="investors">
              <div data-w-tab="Tab 1" className="tab-pa1 w-tab-pane w--tab-active">
                    <div
                      id="w-node-ee071c67-4def-2852-24de-9fc27060db50-fbb97df6"
                      className="w-layout-layout quick-stack-1 wf-layout-layout"
                    >
                      <div
                        id="w-node-ee071c67-4def-2852-24de-9fc27060db51-fbb97df6"
                        className="w-layout-cell cell-im"
                      >
                        <h1 className="h">Just follow these steps:</h1>
                        <p className="p">
                          Our intuitive signup process ensures easy access to our
                          platform, allowing you to start investing in no time.
                        </p>
                        <img
                          loading="lazy"
                          src="/images/Illustration.png"
                          alt=""
                          className="image-12"
                        />
                      </div>
                      <div
                        id="w-node-ee071c67-4def-2852-24de-9fc27060db57-fbb97df6"
                        className="w-layout-cell content-cell"
                      >
                        <a
                          href="#"
                          className="new-button spark-icon-left-button next w-inline-block"
                        />
                        <div className="a">
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060db5a-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-2-1_1Group-2-1.png"
                                alt=""
                              />
                            </div>
                            <div className="text111">
                              <div className="text-1">
                                <a
                                  href="https://webapp.ufund.online/login"
                                  target="_blank"
                                >
                                  <strong>Sign up here</strong>
                                </a>{" "}
                                or <strong className="bold-text">download </strong>the{" "}
                                <a href="#Downlode-app">
                                  <strong>UFUND iOS</strong>
                                </a>
                                <strong> or </strong>
                                <a href="#Downlode-app">
                                  <strong>Android</strong>{" "}
                                </a>
                                to sign up from your mobile.
                              </div>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060db70-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-3_1Group-3.png"
                                alt=""
                              />
                            </div>
                            <div className="text111">
                              <p className="text-1">
                                Enroll now with <strong>UFUND platform</strong> in a
                                few minutes.
                              </p>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060db79-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-4_1Group-4.png"
                                alt=""
                              />
                            </div>
                            <div className="text111">
                              <p className="text-1">
                                <strong>Verify your email</strong> to access your
                                investor's account.
                              </p>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060db81-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-5_1Group-5.png"
                                alt=""
                              />
                            </div>
                            <div className="text111">
                              <p className="text-1">
                                Get approved to login into FUND platform.
                              </p>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060db87-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-6_1Group-6.png"
                                alt=""
                                className="image-11"
                              />
                            </div>
                            <div className="text111">
                              <p className="text-1">
                                Start investing in{" "}
                                <strong>approved investments offers.</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-layout-blockcontainer container-5 w-container">
      <h1 className="heading-5">Features For Investors</h1>

      <Carousel>
        <CarouselContent className="flex space-x-4 overflow-hidden">
          <CarouselItem className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="industries_slide w-slide">
              <div className="lop">
                <h1 className="heading-6">Dashboard</h1>
                <img
                  loading="lazy"
                  src="/images/Rectangle-16.png"
                  alt=""
                  className="image-13"
                />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="industries_slide w-slide">
              <div className="lop">
                <h1 className="heading-6">Categories</h1>
                <img
                  loading="lazy"
                  src="/images/Rectangle-16-1.png"
                  alt=""
                  className="image-13"
                />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="industries_slide w-slide">
              <div className="lop">
                <h1 className="heading-6">My Product Investment</h1>
                <img
                  loading="lazy"
                  src="/images/Rectangle-16-2.png"
                  alt=""
                  className="image-19"
                />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="industries_slide w-slide">
              <div className="lop">
                <h1 className="heading-6">New Products</h1>
                <img
                  loading="lazy"
                  src="/images/Rectangle-16-5.png"
                  alt=""
                  className="image-20"
                />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="industries_slide w-slide">
              <div className="lop">
                <h1 className="heading-6">New Tokenized Assets</h1>
                <img
                  loading="lazy"
                  src="/images/Rectangle-16-6.png"
                  alt=""
                  className="image-21"
                />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="industries_slide w-slide">
              <div className="lop">
                <h1 className="heading-6">Dashboard</h1>
                <img
                  loading="lazy"
                  src="/images/Rectangle-16.png"
                  alt=""
                  className="image-22"
                />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="industries_slide w-slide">
              <div className="lop">
                <h1 className="heading-6">Categories</h1>
                <img
                  loading="lazy"
                  src="/images/Rectangle-16-1.png"
                  alt=""
                  className="image-13"
                />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="industries_slide w-slide">
              <div className="lop">
                <h1 className="heading-6">My Product Investment</h1>
                <img
                  loading="lazy"
                  src="/images/Rectangle-16-2.png"
                  alt=""
                  className="image-19"
                />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious>
          <div className="industries_arrow left new-home w-slider-arrow-left">
            <img
              loading="lazy"
              src="/images/Arrow---Right_1Arrow---Right.png"
              alt=""
            />
          </div>
        </CarouselPrevious>

        <CarouselNext>
          <div className="industries_arrow new-home w-slider-arrow-right">
            <img
              loading="lazy"
              src="/images/Arrow---Right_2Arrow---Right.png"
              alt=""
            />
          </div>
        </CarouselNext>
      </Carousel>
    </div>
                  </div>
              </TabsContent>
              <TabsContent value="businnes-compaigners">
              <div data-w-tab="Tab 2" className="tab-pa1 w-tab-pane w--tab-active">
                    <div
                      id="w-node-ee071c67-4def-2852-24de-9fc27060dbc2-fbb97df6"
                      className="w-layout-layout quick-stack-1 wf-layout-layout"
                    >
                      <div
                        id="w-node-ee071c67-4def-2852-24de-9fc27060dbc3-fbb97df6"
                        className="w-layout-cell cell-im"
                      >
                        <h1 className="h">Just follow these steps:</h1>
                        <p className="p">
                          Our intuitive signup process ensures easy access to our
                          platform, allowing you to start campaigning in no time.
                        </p>
                        <img
                          loading="lazy"
                          src="/images/Illustration.png"
                          alt=""
                          className="image-12"
                        />
                      </div>
                      <div
                        id="w-node-ee071c67-4def-2852-24de-9fc27060dbc9-fbb97df6"
                        className="w-layout-cell content-cell"
                      >
                        <a
                          href="#"
                          className="new-button spark-icon-left-button next w-inline-block"
                        />
                        <div className="a">
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060dbcc-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-2-1_1Group-2-1.png"
                                alt=""
                              />
                            </div>
                            <div className="text111">
                              <div className="text-1">
                                <a
                                  href="https://webapp.ufund.online/login"
                                  target="_blank"
                                >
                                  <strong>Sign up here</strong>
                                </a>{" "}
                                or <strong className="bold-text">download </strong>the{" "}
                                <a href="#Downlode-app">
                                  <strong>UFUND iOS</strong>
                                </a>
                                <strong> or </strong>
                                <a href="#Downlode-app">
                                  <strong>Android</strong>
                                </a>{" "}
                                to sign up from your mobile.
                              </div>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060dbe1-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-3_1Group-3.png"
                                alt=""
                              />
                            </div>
                            <div className="text111">
                              <p className="text-1">
                                Enroll now with <strong>UFUND platform</strong> in a
                                few minutes.
                              </p>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060dbea-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-4_1Group-4.png"
                                alt=""
                              />
                            </div>
                            <div className="text111">
                              <p className="text-1">
                                <strong>Verify your email</strong> to access your
                                campaigner's account.
                              </p>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060dbf2-fbb97df6"
                            className="div-block-9"
                          >
                            <div
                              id="w-node-ee071c67-4def-2852-24de-9fc27060dbf3-fbb97df6"
                              className="item"
                            >
                              <div className="img">
                                <img
                                  loading="lazy"
                                  src="/images/Group-5_1Group-5.png"
                                  alt=""
                                />
                              </div>
                              <div className="text111">
                                <p className="text-1">
                                  Start submitting your business assets and ask for
                                  deployement <strong>on Blockchain</strong>.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            id="w-node-ee071c67-4def-2852-24de-9fc27060dbfc-fbb97df6"
                            className="item"
                          >
                            <div className="img">
                              <img
                                loading="lazy"
                                src="/images/Group-6_1Group-6.png"
                                alt=""
                                className="image-11"
                              />
                            </div>
                            <div className="text111">
                              <p className="text-1">
                                Wait to get your assets Tokenized and listed for P2P
                                trading.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-layout-blockcontainer container-5 w-container">
                      <h1 className="heading-5">Features For Business Campaigners</h1>
                    
                      <div className="industries_mask new-home w-slider-mask">
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">Dashboard</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16.png"
                              alt=""
                              className="image-13"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">Categories</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-1.png"
                              alt=""
                              className="image-13"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">My Product Investment</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-2.png"
                              alt=""
                              className="image-19"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">New Products</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-5.png"
                              alt=""
                              className="image-20"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">New Tokenized Assets</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-6.png"
                              alt=""
                              className="image-21"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">Dashbord</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16.png"
                              alt=""
                              className="image-22"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">Categories</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-1.png"
                              alt=""
                              className="image-13"
                            />
                          </div>
                        </div>
                        <div className="industries_slide w-slide">
                          <div className="lop">
                            <h1 className="heading-6">My Product Investment</h1>
                            <img
                              loading="lazy"
                              src="/images/Rectangle-16-2.png"
                              alt=""
                              className="image-19"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="industries_arrow left new-home w-slider-arrow-left">
                        <img
                          loading="lazy"
                          src="/images/Arrow---Right_1Arrow---Right.png"
                          alt=""
                        />
                      </div>
                      <div className="industries_arrow new-home w-slider-arrow-right">
                        <img
                          loading="lazy"
                          src="/images/Arrow---Right_2Arrow---Right.png"
                          alt=""
                        />
                      </div>
                      <div className="industries_slide-nav w-slider-nav w-slider-nav-invert w-round" />
                    </div>
                  </div>
              </TabsContent>
              </div>
            </Tabs>

          </div>
        </section>
        <section id="our-services" className="uui-section_pricing09">
          <div id="ser" className="uui-page-padding-3">
            <div className="uui-container-large-3">
              <div className="uui-padding-vertical-xhuge-3">
                <div className="uui-text-align-center">
                  <div className="uui-max-width-large-2 align-center">
                    <h1 className="feature-heading">Our Services</h1>
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
                            <a
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
                            </a>
                          </div>
                          <img
                            src="/images/Frame.png"
                            loading="lazy"
                            alt=""
                            className="image-14"
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
                            <a
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
                            </a>
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
                            <a
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
                            </a>
                          </div>
                          <img
                            src="/images/Frame.png"
                            loading="lazy"
                            alt=""
                            className="image-15"
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
        <section id="about" className="about-section">
          <div className="w-layout-blockcontainer about-container w-container">
            <h1 className="about-heading">About UFUND platform</h1>
            <p className="about-text">
              With Blockchain, &nbsp;the driving force behind UFUND Platform is to
              empower companies and individuals to navigate funding and new investment
              landscape.
            </p>
            <div
              id="w-node-_59b0cdb5-8c37-f91f-f80f-432183905231-fbb97df6"
              className="w-layout-layout quick-stack-3 wf-layout-layout"
            >
              <div
                id="w-node-_59b0cdb5-8c37-f91f-f80f-432183905232-fbb97df6"
                className="w-layout-cell cell-14"
              >
                <h1 className="about-sub-heading">
                  UFUND is Simple and Secure: A One-Stop Business Funding Solution.
                </h1>
                <p className="looks-text-main">
                  Whether you are a new business or have been trading for years, UFUND
                  understands that most businesses need financing to be able to buy
                  goods from suppliers or sell goods to clients. UFUND secured
                  platform is a one stop solution that gathers business owners and
                  investors. Using UFUND Token and major Fiat and crypto currencies,
                  investors can directly finance businesses at a predefined interest
                  rate and period. Known as decentralized finance (DeFi), UFUND
                  platform brings solutions for businesses and alternative investment
                  opportunities for investors. UFUND tokenizer is powered by Polygon
                  blockchain. The platform promotes tokenization as a new solution in
                  the finance industry.
                </p>
                <a
                  href="#Downlode-app"
                  className="looks-button spark-right-icon-button-copy next-looks w-inline-block"
                >
                  <p className="spark-button-dark-text">Download Our App</p>
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
              <div
                id="w-node-_59b0cdb5-8c37-f91f-f80f-43218390523b-fbb97df6"
                className="w-layout-cell cell-6"
              >
                <div className="div-block-3">
                  <img
                    src="/images/our-vision.png"
                    loading="lazy"
                    alt=""
                    className="image-8"
                  />
                  <div className="div-block-5">
                    <h3 className="about-sub-heading">Our Vision</h3>
                    <p className="looks-text">
                      We started in 2019 with a radical idea that Small and
                      Medium-sized Businesses (SMBs) could raise capital from crowd
                      funders. Our far-reaching vision is to become a leading platform
                      that supports SMB’s growth throughout Decentralized Finance
                      (DeFi) and assets tokenization where investors can expect steady
                      returns and rewards.
                    </p>
                  </div>
                </div>
                <div className="div-block-3">
                  <h3 className="about-sub-heading">Our Mission</h3>
                  <p className="looks-text">
                    The mission is to enhance economic freedom in the world of
                    crowdfunding and tokenization, with a fair and accessible platform
                    enabled by blockchain. Join us and create an impact on a global
                    scale.
                  </p>
                  <img
                    src="/images/our-mission_1our-mission.png"
                    loading="lazy"
                    alt=""
                    className="image-9"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="counter-section">
          <div className="w-layout-blockcontainer counter-conatiner w-container">
            <div
              id="w-node-b26f0831-8cc7-508a-c68f-db2fe4d30afb-fbb97df6"
              className="w-layout-layout quick-stack-2 wf-layout-layout"
            >
              <div className="w-layout-cell cell-8">
                <img src="/images/projects.svg" loading="lazy" alt="" />
              </div>
              <div className="w-layout-cell cell-7">
                <h1 className="counter">45</h1>
                <h1 className="heading-4">R&amp;D Projects</h1>
              </div>
            </div>
            <div
              id="w-node-b26f0831-8cc7-508a-c68f-db2fe4d30b03-fbb97df6"
              className="w-layout-layout quick-stack-2 wf-layout-layout"
            >
              <div className="w-layout-cell cell-8">
                <img src="/images/users.svg" loading="lazy" alt="" />
              </div>
              <div className="w-layout-cell cell-7">
                <h1 className="counter">1478</h1>
                <h1 className="heading-4">Active Users</h1>
              </div>
            </div>
            <div
              id="w-node-b26f0831-8cc7-508a-c68f-db2fe4d30b0b-fbb97df6"
              className="w-layout-layout quick-stack-2 wf-layout-layout"
            >
              <div className="w-layout-cell cell-8">
                <img src="/images/compaigns.svg" loading="lazy" alt="" />
              </div>
              <div className="w-layout-cell cell-7">
                <h1 className="counter">159</h1>
                <h1 className="heading-4">Active Campaigners</h1>
              </div>
            </div>
            <div
              id="w-node-b26f0831-8cc7-508a-c68f-db2fe4d30b13-fbb97df6"
              className="w-layout-layout quick-stack-2 wf-layout-layout"
            >
              <div className="w-layout-cell cell-8">
                <img src="/images/Active-Investors.svg" loading="lazy" alt="" />
              </div>
              <div className="w-layout-cell cell-7">
                <h1 className="counter">1319</h1>
                <h1 className="heading-4">Active Investors</h1>
              </div>
            </div>
            <div
              id="w-node-b26f0831-8cc7-508a-c68f-db2fe4d30b1b-fbb97df6"
              className="w-layout-layout quick-stack-2 wf-layout-layout"
            >
              <div className="w-layout-cell cell-8">
                <img src="/images/products.svg" loading="lazy" alt="" />
              </div>
              <div className="w-layout-cell cell-7">
                <h1 className="counter">10</h1>
                <h1 className="heading-4">Total Products</h1>
              </div>
            </div>
            <div
              id="w-node-b26f0831-8cc7-508a-c68f-db2fe4d30b23-fbb97df6"
              className="w-layout-layout quick-stack-2 wf-layout-layout"
            >
              <div className="w-layout-cell cell-8">
                <img src="/images/assets.svg" loading="lazy" alt="" />
              </div>
              <div className="w-layout-cell cell-7">
                <h1 className="counter">10</h1>
                <h1 className="heading-4">Tokenized Assets</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="section-2">
          <div className="w-layout-blockcontainer invest-container w-container">
            <img
              src="/images/Group-2127_1Group-2127.png"
              loading="lazy"
              alt=""
              className="image-18"
            />
            <img
              src="/images/Group-2141_1Group-2141.png"
              loading="lazy"
              alt=""
              className="image-17"
            />
            <h1 className="feature-heading">Invest Anywhere, Anytime</h1>
            <div className="invest-text">
              UFUND is available for both iOS and Android phones
            </div>
            <div
              id="w-node-_6af9c471-2e6d-ddef-d3f6-6cfe8f6a3fc1-fbb97df6"
              className="w-layout-layout invest-quick-stack wf-layout-layout"
            >
              <div className="w-layout-cell">
                <a
                  href="https://apps.apple.com/in/app/ufund-investing-fundraising/id1490084497"
                  target="_blank"
                  className="w-inline-block"
                >
                  <img src="/images/app-store-apple-1.png" loading="lazy" alt="" />
                </a>
              </div>
              <div className="w-layout-cell">
                <a
                  href="https://play.google.com/store/apps/details?id=com.ufund.app"
                  target="_blank"
                  className="w-inline-block"
                >
                  <img src="/images/app-store-google-1.png" loading="lazy" alt="" />
                </a>
              </div>
            </div>
            <div
              id="w-node-_6af9c471-2e6d-ddef-d3f6-6cfe8f6a3fc8-fbb97df6"
              className="w-layout-layout quick-stack-24 wf-layout-layout"
            >
              <div
                id="w-node-_6af9c471-2e6d-ddef-d3f6-6cfe8f6a3fc9-fbb97df6"
                className="w-layout-cell app"
              >
                <h1 className="invest-sub-heading">Web App</h1>
                <p className="invest-sub-text">
                  Unlock the full potential of our features with our intuitive web
                  application.
                </p>
                <div
                  id="w-node-_6af9c471-2e6d-ddef-d3f6-6cfe8f6a3fce-fbb97df6"
                  className="w-layout-layout inner-quick-stack wf-layout-layout"
                >
                  <div className="w-layout-cell cell-15">
                    <a
                      href="https://webapp.ufund.online/login"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img src="/images/Invester-Icon.svg" loading="lazy" alt="" />
                    </a>
                  </div>
                  <div className="w-layout-cell">
                    <img src="/images/web-app-done.png" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
              <div
                id="w-node-_6af9c471-2e6d-ddef-d3f6-6cfe8f6a3fd3-fbb97df6"
                className="w-layout-cell app"
              >
                <h1 className="invest-sub-heading">Android App</h1>
                <p className="invest-sub-text">
                  Take control of your investments on-the-go with our Android app.
                </p>
                <div
                  id="w-node-_6af9c471-2e6d-ddef-d3f6-6cfe8f6a3fd8-fbb97df6"
                  className="w-layout-layout inner-quick-stack wf-layout-layout"
                >
                  <div className="w-layout-cell cell-15">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.ufund.app"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img src="/images/Invester-Icon.svg" loading="lazy" alt="" />
                    </a>
                  </div>
                  <div className="w-layout-cell">
                    <img src="/images/andriod-app.png" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
              <div
                id="w-node-_6af9c471-2e6d-ddef-d3f6-6cfe8f6a3fdd-fbb97df6"
                className="w-layout-cell app"
              >
                <h1 className="invest-sub-heading">iOS App</h1>
                <p className="invest-sub-text">
                  Optimize your investment strategy with our iOS app designed for
                  Apple users.
                </p>
                <div
                  id="w-node-_6af9c471-2e6d-ddef-d3f6-6cfe8f6a3fe2-fbb97df6"
                  className="w-layout-layout inner-quick-stack wf-layout-layout"
                >
                  <div className="w-layout-cell cell-15">
                    <a
                      href="https://apps.apple.com/in/app/ufund-investing-fundraising/id1490084497"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img src="/images/Invester-Icon.svg" loading="lazy" alt="" />
                    </a>
                  </div>
                  <div className="w-layout-cell">
                    <img src="/images/ios-app-done.png" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="funding-section">
          <div className="w-layout-blockcontainer container-3 w-container">
            <div
              id="w-node-bc4dfb0c-4859-41e4-9f56-caeeb28ace7c-fbb97df6"
              className="w-layout-layout quick-stack-5 wf-layout-layout"
            >
              <div
                id="w-node-bc4dfb0c-4859-41e4-9f56-caeeb28ace7d-fbb97df6"
                className="w-layout-cell cell-20"
              >
                <h1 className="feature-heading">Crowdfunding For Business</h1>
                <div className="text-block-6">
                  One of the biggest advantages of crowdfunding with UFUND is to
                  provide access to a larger and more diverse group of investors.
                  UFUND is defining a new way for businesses to enhance their working
                  to know more signup today at{" "}
                  <a
                    href="https://webapp.ufund.online/login"
                    target="_blank"
                    className="link"
                  >
                    web.ufund.online
                  </a>
                </div>
                <a
                  href="#"
                  className="funding-btnn funding-btnn-s play-look w-inline-block w-lightbox"
                >
                  <div className="play-icon w-embed">
                    <svg
                      width={25}
                      height={25}
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 -0.000488281C22.7578 -0.000488281 26.4313 1.11384 29.5558 3.20159C32.6804 5.28934 35.1156 8.25673 36.5537 11.7285C37.9918 15.2003 38.368 19.0206 37.6349 22.7062C36.9018 26.3919 35.0922 29.7773 32.435 32.4345C29.7778 35.0917 26.3924 36.9013 22.7067 37.6344C19.0211 38.3676 15.2008 37.9913 11.729 36.5532C8.25722 35.1152 5.28982 32.6799 3.20208 29.5553C1.11433 26.4308 0 22.7574 0 18.9995C0 13.9604 2.00178 9.12767 5.56497 5.56448C9.12816 2.00129 13.9609 -0.000488281 19 -0.000488281Z"
                        fill="url(#paint0_linear_134_1674)"
                      />
                      <path
                        d="M25.0001 18.9986C25.0001 17.3666 16.6861 12.1766 15.7421 13.1106C14.7981 14.0446 14.7081 23.8466 15.7421 24.8686C16.7761 25.8906 25.0001 20.6106 25.0001 18.9986Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_134_1674"
                          x1="0.324786"
                          y1="25.5764"
                          x2="38.6496"
                          y2="25.5764"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#841524" />
                          <stop offset={1} stopColor="#E83A3D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="spark-button-dark-text">Watch Demo Now</p>
                </a>
              </div>
              <div
                id="w-node-bc4dfb0c-4859-41e4-9f56-caeeb28ace88-fbb97df6"
                className="w-layout-cell"
              >
                <img
                  src="/images/Funding-coins.png"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="/images/Funding-coins-p-500.png 500w, /images/Funding-coins.png 756w"
                  alt=""
                  className="image-25"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-3">
          <div className="w-layout-blockcontainer container-4 w-container">
            <h1 className="h4">Offers To Our Clients</h1>
            <div className="offers-text">
              Investors :SECURED INVESTMENTS opportunities in real economy &nbsp;with
              substantial return in &nbsp;short terms :60-90-120-180 Days
              &nbsp;Campaigners: we offer FUNDING &nbsp;for &nbsp;Growth ,
              TOKENISZATION of RWA for Capital.
            </div>
            <div className="div-block-31">
              <div className="div-block-32">
                <img src="/images/investment-1.svg" loading="lazy" alt="" />
                <h1 className="heading-7">Small &amp; Mid size &nbsp;Businesses</h1>
              </div>
              <div className="div-block-32">
                <img src="/images/Group-1.svg" loading="lazy" alt="" />
                <h1 className="heading-7">Small Industries &nbsp;Operations</h1>
              </div>
              <div className="div-block-32">
                <img src="/images/real-state-1.svg" loading="lazy" alt="" />
                <h1 className="heading-7">
                  Commercial &amp; Real state &nbsp;Businesses
                </h1>
              </div>
              <div className="div-block-32">
                <img src="/images/shopping-1-1.svg" loading="lazy" alt="" />
                <h1 className="heading-7">Online Businesses</h1>
              </div>
              <div className="div-block-32">
                <img src="/images/Group.svg" loading="lazy" alt="" />
                <h1 className="heading-7">Healthcare Businesses</h1>
              </div>
            </div>
          </div>
        </section>
        <div className="brix---footer-wrapper">
          <div className="brix---container-default-2 w-container" />
          <div className="container-default-2 w-container">
            <div className="footer-top">
              <div
                id="w-node-_72b0d2a0-8cd2-2415-f808-de40b6ab935e-b6ab935c"
                className="w-layout-layout quick-stack-22 wf-layout-layout"
              >
                <div
                  id="w-node-_72b0d2a0-8cd2-2415-f808-de40b6ab935f-b6ab935c"
                  className="w-layout-cell cell-40"
                >
                  <div className="div-block-18">
                    <div className="brix---mg-bottom-24px">
                      <a
                        href="index.html"
                        aria-current="page"
                        className="brix---footer-logo-wrapper w-inline-block w--current"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/65bc78eda6983c7153fb1361/65bc7af9b3f46630fda68890_logo.svg"
                          alt=""
                          className="brix---footer-logo"
                        />
                      </a>
                    </div>
                    <div className="brix---mg-bottom-40px">
                      <div className="brix---color-neutral-600">
                        <p className="brix---paragraph-default">
                          Crowdfunding for SMBs, tokenization of RWA&nbsp;,
                          UFUND&nbsp;Offers innovative investor's opportunities
                          <br />
                        </p>
                      </div>
                    </div>
                    <div
                      id="Downlode-app"
                      className="w-layout-layout quick-stack-6 w-node-_72b0d2a0-8cd2-2415-f808-de40b6ab936a-b6ab935c wf-layout-layout"
                    >
                      <div
                        id="w-node-_72b0d2a0-8cd2-2415-f808-de40b6ab936b-b6ab935c"
                        className="w-layout-cell cell-16"
                      >
                        <a
                          href="https://apps.apple.com/in/app/ufund-investing-fundraising/id1490084497"
                          target="_blank"
                          className="w-inline-block"
                        >
                          <img
                            src="/images/transparent-istore.png"
                            loading="lazy"
                            alt=""
                          />
                        </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.ufund.app"
                          target="_blank"
                          className="w-inline-block"
                        >
                          <img
                            src="/images/transparent-google-play.png"
                            loading="lazy"
                            alt=""
                          />
                        </a>
                      </div>
                      <div
                        id="w-node-_72b0d2a0-8cd2-2415-f808-de40b6ab9370-b6ab935c"
                        className="w-layout-cell cell-17"
                      >
                        <img src="/images/or_1or.png" loading="lazy" alt="" />
                      </div>
                      <div
                        id="w-node-_72b0d2a0-8cd2-2415-f808-de40b6ab9372-b6ab935c"
                        className="w-layout-cell cell-19"
                      >
                        <img
                          src="/images/qr_1qr.png"
                          loading="lazy"
                          alt=""
                          className="image-23"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_72b0d2a0-8cd2-2415-f808-de40b6ab9374-b6ab935c"
                  className="w-layout-cell cell-38"
                >
                  <div>
                    <div className="brix---footer-col-title">Company</div>
                    <ul role="list" className="brix---footer-list-wrapper">
                      <li className="brix---footer-list-item">
                        <a
                          href="https://www.tokensales.ufund.online/contact"
                          target="_blank"
                          className="brix---footer-link"
                        >
                          Security Token Offering
                        </a>
                      </li>
                      <li className="brix---footer-list-item">
                        <a
                          href="https://www.tokensales.ufund.online/news-media"
                          target="_blank"
                          className="brix---footer-link"
                        >
                          News &amp; Media
                        </a>
                      </li>
                    </ul>
                    <div className="brix---footer-col-title">Compliance</div>
                    <ul role="list" className="brix---footer-list-wrapper">
                      <li className="brix---footer-list-item">
                        <a href="#" className="brix---footer-link">
                          .Actiwires LLC DBA&nbsp;UFUND&nbsp;filled with SEC a Reg D
                          506(c) and is .Registered with FINCEN
                        </a>
                      </li>
                      <li className="brix---footer-list-item" />
                    </ul>
                  </div>
                </div>
                <div
                  id="w-node-_72b0d2a0-8cd2-2415-f808-de40b6ab9386-b6ab935c"
                  className="w-layout-cell"
                >
                  <div>
                    <div className="brix---footer-col-title">Legal</div>
                    <ul role="list" className="brix---footer-list-wrapper">
                      <li className="brix---footer-list-item">
                        <a
                          href="/terms-conditions"
                          className="brix---footer-link"
                        >
                          Terms of Use
                        </a>
                      </li>
                      <li className="brix---footer-list-item">
                        <a
                          href="/privacy-policy"
                          className="brix---footer-link"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className="brix---footer-list-item" />
                      <li className="brix---footer-list-item">
                        <a href="/disclaimer" className="brix---footer-link">
                          Disclaimer
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  id="w-node-_72b0d2a0-8cd2-2415-f808-de40b6ab9395-b6ab935c"
                  className="w-layout-cell"
                >
                  <div id="contact1" className="div-block-30">
                    <div className="footer-col-title1">Contact Us</div>
                    <ul role="list" className="footer-list-wrapper">
                      <li className="footer-list-item-1">
                        <div className="w-layout-grid contact-links-grid-1">
                          <div
                            id="w-node-_72b0d2a0-8cd2-2415-f808-de40b6ab939c-b6ab935c"
                            className="w-layout-layout quick-stack-7 wf-layout-layout"
                          >
                            <div className="w-layout-cell">
                              <img
                                src="https://uploads-ssl.webflow.com/65bc78eda6983c7153fb1361/65bfd47ee36b396feda95284_address.png"
                                loading="eager"
                                alt=""
                                className="image-39 contact-link-icon"
                              />
                            </div>
                            <div className="w-layout-cell cell-39">
                              <div className="contact-link-text-2">Address</div>
                              <a
                                href="tel:+13024265043"
                                className="link-block-5 w-inline-block"
                              >
                                <div className="contact-txt-2">
                                  Actiwires LLC , 1000 N West Street, Suite 1200
                                  Wilmington, DE 19801.USA
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            id="w-node-_72b0d2a0-8cd2-2415-f808-de40b6ab93a5-b6ab935c"
                            className="w-layout-layout quick-stack-7 wf-layout-layout"
                          >
                            <div className="w-layout-cell">
                              <img
                                src="https://uploads-ssl.webflow.com/65bc78eda6983c7153fb1361/65bfd47ebe8065401ac181c9_call.png"
                                loading="eager"
                                alt=""
                                className="image-39 contact-link-icon"
                              />
                            </div>
                            <div className="w-layout-cell cell-39">
                              <div className="contact-link-text-2">Call Us Now</div>
                              <a
                                href="tel:+13024265043"
                                className="link-block-5 w-inline-block"
                              >
                                <div className="contact-txt-2">+1 302 426 5043</div>
                              </a>
                            </div>
                          </div>
                          <div
                            id="w-node-_72b0d2a0-8cd2-2415-f808-de40b6ab93ae-b6ab935c"
                            className="w-layout-layout quick-stack-7 wf-layout-layout"
                          >
                            <div className="w-layout-cell">
                              <img
                                src="https://uploads-ssl.webflow.com/65bc78eda6983c7153fb1361/65bfd47e60bcfa83d9a199db_email.png"
                                loading="eager"
                                alt=""
                                className="image-39 contact-link-icon"
                              />
                            </div>
                            <div className="w-layout-cell cell-39">
                              <div className="contact-link-text-2">Email Us</div>
                              <a
                                href="mailto:info@ufund.online"
                                className="link-block-4 w-inline-block"
                              >
                                <div className="contact-txt-2">info@ufund.online</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="w-layout-grid brix---social-media-grid-left-2">
                      <a
                        href="https://www.facebook.com/UFUND-111016331442418"
                        target="_blank"
                        className="brix---icon-square-36px-2 w-inline-block"
                      >
                        <img src="/images/facebook_1facebook.png" alt="" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/ufund1/"
                        target="_blank"
                        className="brix---icon-square-36px-2 w-inline-block"
                      >
                        <img src="/images/linkiden_1linkiden.png" alt="" />
                      </a>
                      <a
                        href="https://twitter.com/UFUND1"
                        target="_blank"
                        className="brix---icon-square-36px-2 w-inline-block"
                      >
                        <img
                          src="/images/Twitter-logo.png"
                          srcSet="/images/Twitter-logo-p-500.png 500w, /images/Twitter-logo.png 992w"
                          width={22}
                          sizes="(max-width: 991px) 22.000001907348633px, (max-width: 1439px) 2vw, (max-width: 1919px) 22.000001907348633px, 1vw"
                          alt=""
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/ufundonline/"
                        target="_blank"
                        className="brix---icon-square-36px-2 w-inline-block"
                      >
                        <img src="/images/instagram_1instagram.png" alt="" />
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCDY3NzRErTYaKGOssH1TXPg"
                        target="_blank"
                        className="brix---icon-square-36px-2 w-inline-block"
                      >
                        <img src="/images/youtube-logo.svg" alt="" width={23} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-block-29" />
            <div className="brix---footer-bottom-2">
              <p className="brix---paragraph-default-4">
                @ 2024 Actiwires LLC DBA UFUND. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <section className="uui-section_cta12">
          <div className="uui-page-padding-3">
            <div className="uui-container-large-3" />
          </div>
          <a href="#hero" className="link-block-8 w-inline-block">
            <img src="/images/icons8-up-26_1icons8-up-26.png" loading="lazy" alt="" />
          </a>
        </section>
        {/* Add more structured JSX content here based on your file */}
      </main>
    </>
  );
}
