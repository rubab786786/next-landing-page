"use client"
import { useState,useEffect } from "react";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardItems from "./CardItems";
const HowItWorks = () => {
  const [newActiveTab, setNewActiveTab] = useState("investors");
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section id="how-it-works" className="feature-section-1">
        <div className="w-layout-blockcontainer feature-container-1 w-container"
        style={{
          padding: isMobile ? "20px" : "0px",
          textAlign: isMobile ? "center":"left",
        }}>
          <h1 className="pr-heading"
          style={{
            fontFamily: "THICCCBOI",
            fontSize: isMobile ? "24px" : "36px",
          }}>Welcome To UFUND&nbsp;Program</h1>
          <p className="paragraph-7"
           style={{
            fontSize: isMobile ? "14px" : "18px",
            lineHeight: isMobile ? "20px" : "28px",
            marginBottom: isMobile ? "20px" : "30px",
          }}>
            We're thrilled to have you join us &nbsp;to unlocking opportunities and
            maximizing returns.
            <br />
            Get ready to experience a &nbsp;journey tailored to your financial
            aspirations.
          </p>
          <div className="tabs-container">
            <div className="tabs-list" style={{ display: "flex", justifyContent: "center",flexDirection:isMobile?"column":"row", alignItems: "center" }}>
              <div
                className={`tab-button-outer ${newActiveTab === "investors" ? "active" : ""}`}
                style={{
                  background: newActiveTab === "investors"
                    ? "linear-gradient(89.73deg, #FF00B0 0%, #FF870B 18.63%, #E80346 47.09%, #A800E4 76.59%, #0096F1 99.36%)"
                    : "transparent",
                  borderRadius: "25rem",
                  padding: "2px",
                  margin: "10px",
                  width: "max-content",
                }}
                onClick={() => setNewActiveTab("investors")}
              >
                <button
                  className="tab-button"
                  style={{
                    padding:isMobile ? "10px 20px" : "16px 36px",
                    backgroundColor: "#fafafa",
                    border: "none",
                    color: "#000000",
                    cursor: "pointer",
                    borderRadius: "25rem",
                    // textTransform: "uppercase",
                    // fontFamily: "THICCCBOI",
                    fontSize: isMobile ? "14px" : "18px",
                  fontWeight: newActiveTab === "investors" ? "700" : "500",
                    // fontWeight: newActiveTab === "investors" ? 600 : 400,
                  }}
                >
                  Investors
                </button>
              </div>
              <div
                className={`tab-button-outer ${newActiveTab === "business" ? "active" : ""}`}
                style={{
                  background: newActiveTab === "business"
                    ? "linear-gradient(89.73deg, #FF00B0 0%, #FF870B 18.63%, #E80346 47.09%, #A800E4 76.59%, #0096F1 99.36%)"
                    : "transparent",
                  borderRadius: "25rem",
                  padding: "2px",
                  margin: "5px",
                  width: "max-content",
                }}
                onClick={() => setNewActiveTab("business")}
              >
                <button
                  className="tab-button"
                  style={{
                    padding: isMobile ? "10px 20px" : "16px 36px",
                    backgroundColor: "#fafafa",
                    border: "none",
                    color: "#000000",
                    cursor: "pointer",
                    borderRadius: "25rem",
                    // textTransform: "uppercase",
                    // fontFamily: "THICCCBOI",
                    fontSize: isMobile ? "14px" : "18px",
                  fontWeight: newActiveTab === "business" ? 700 : 500,
                    // fontWeight: newActiveTab === "business" ? 600 : 400,
                  }}
                >
                  Business Compaigners
                </button>
              </div>
            </div>

            <div className="w-tab-content mt-4">
              {newActiveTab === "investors" && (
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
                  <div className="w-layout-blockcontainer container-5 w-container p-14">
                    <h1 className="heading-5">Features For Investors</h1>
                    <Carousel className="w-full mx-auto p-5">
                        <CarouselContent >
                          <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <CardItems heading="Dashboard" img={"/images/Rectangle-16.png"} />
                          </CarouselItem>
                          <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <CardItems heading="Categories" img={"/images/Rectangle-16-1.png"} />
                          </CarouselItem>
                          <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <CardItems heading="My Product Investment" img={"/images/Rectangle-16-2.png"} />
                          </CarouselItem>
                          <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <CardItems heading="New Products" img={"/images/Rectangle-16-5.png"} />
                          </CarouselItem>
                          <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <CardItems heading="New Tokenized Assets" img={"/images/Rectangle-16-6.png"} />
                          </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                  </div>
                </div>
              )}
              {newActiveTab === "business" && (
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
                  <div className="w-layout-blockcontainer container-5 w-container p-14">
                    <h1 className="heading-5">Features For Business Campaigners</h1>
                      <Carousel className="w-full mx-auto p-5">
                        <CarouselContent >
                          <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <CardItems heading="Dashboard" img={"/images/Rectangle-16.png"} />
                          </CarouselItem>
                          <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <CardItems heading="Categories" img={"/images/Rectangle-16-1.png"} />
                          </CarouselItem>
                          <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <CardItems heading="My Product Investment" img={"/images/Rectangle-16-2.png"} />
                          </CarouselItem>
                          <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <CardItems heading="New Products" img={"/images/Rectangle-16-5.png"} />
                          </CarouselItem>
                          <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <CardItems heading="New Tokenized Assets" img={"/images/Rectangle-16-6.png"} />
                          </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                  </div>

                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks