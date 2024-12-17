"use client";
import { useState, useEffect } from "react";
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
        <section id="how-it-works" className="feature-section-1">
            <div className="w-layout-blockcontainer feature-container-1 w-container">
                <div className={`w-full ${isMobile ? 'px-5 py-8' : 'px-0 py-16'} text-center`}>
                    <h1
                        className={`pr-heading text-${isMobile ? '2xl' : '4xl'} font-bold`}
                        style={{ fontFamily: "THICCCBOI" }}
                    >
                        Welcome To UFUND Program
                    </h1>
                    <p
                        className={`paragraph-7 mt-4 text-${isMobile ? 'sm' : 'lg'} leading-relaxed`}
                        style={{ lineHeight: isMobile ? '1.5' : '2' }}
                    >
                        We're thrilled to have you join us, unlocking opportunities and maximizing returns.
                        <br />
                        Get ready to experience a journey tailored to your financial aspirations.
                    </p>
                    <div className="tabs-container mt-6">
                        <div
                            className={`tabs-list flex ${isMobile ? 'flex-col' : 'flex-row'} justify-center items-center`}
                        >
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
                                    className={`tab-button text-sm sm:text-lg font-${newActiveTab === "investors" ? 'bold' : 'normal'} border-none rounded-full`}
                                    style={{
                                        padding: isMobile ? "10px 20px" : "16px 36px",
                                        backgroundColor: "#fafafa",
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
                                    margin: "10px",
                                    width: "max-content",
                                }}
                                onClick={() => setNewActiveTab("business")}
                            >
                                <button
                                    className={`tab-button text-sm sm:text-lg font-${newActiveTab === "business" ? 'bold' : 'normal'} border-none rounded-full`}
                                    style={{
                                        padding: isMobile ? "10px 20px" : "16px 36px",
                                        backgroundColor: "#fafafa",
                                    }}
                                >
                                    Business Campaigners
                                </button>
                            </div>
                        </div>

                        {/* Investors Tab Content */}
                        {newActiveTab === "investors" && (
                            <div className="tab-pa1 w-tab-pane w--tab-active mt-4">
                                <div className="w-layout-layout quick-stack-1 wf-layout-layout">
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start w-full">
                                        <div className="cell-im flex-1 sm:w-1/2 px-4 mb-4 sm:mb-0" style={{ textAlign: "left" }}>
                                            <h1 className="text-lg sm:text-xl">Just follow these steps:</h1>
                                            <p className="text-sm sm:text-base">
                                                Our intuitive signup process ensures easy access to our platform, allowing you to start investing in no time.
                                            </p>
                                            <img
                                                loading="lazy"
                                                src="/images/Illustration.png"
                                                alt="steps"
                                                className="image-12"
                                            />
                                        </div>

                                        <div className="content-cell flex-1 sm:w-1/2 px-4" style={{ textAlign: isMobile ? "center" : "left" }}>
                                            <a href="#" className="new-button spark-icon-left-button next w-inline-block" />
                                            <div className="a">
                                                <div className="item">
                                                    <div className="img">
                                                        <img loading="lazy" src="/images/Group-2-1_1Group-2-1.png" alt="step" />
                                                    </div>
                                                    <div className="text111">
                                                        <div className="text-1">
                                                            <a href="https://webapp.ufund.online/login" target="_blank">
                                                                <strong>Sign up here</strong>
                                                            </a>{" "}
                                                            or{" "}
                                                            <strong className="font-bold">download</strong> the{" "}
                                                            <a href="#Downlode-app">
                                                                <strong>UFUND iOS</strong>
                                                            </a>{" "}
                                                            or{" "}
                                                            <strong>Android</strong> to sign up from your mobile.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
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
                                                <div className="item">
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
                                                <div className="item" >
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
                                                <div className="item">
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
                                </div>


                                {/* Carousel for Investors */}
                                <div className="w-layout-blockcontainer container-5 w-container px-16 pt-14 pb-0">
                                    <h1 className="heading-5 text-xl mb-3">Features For Investors</h1>
                                    <Carousel className="w-full mx-auto p-5">
                                        <CarouselContent>
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

                        {/* Business Tab Content */}
                        {newActiveTab === "business" && (
                            <div className="tab-pa1 w-tab-pane w--tab-active mt-4">
                                <div className="w-layout-layout quick-stack-1 wf-layout-layout">
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start w-full">
                                        <div className="cell-im flex-1 sm:w-1/2 px-4 mb-4 sm:mb-0" style={{ textAlign: "left" }}>
                                            <h1 className="text-lg sm:text-xl">Just follow these steps:</h1>
                                            <p className="text-sm sm:text-base">
                                                Our intuitive signup process ensures easy access to our
                                                platform, allowing you to start campaigning in no time.
                                            </p>
                                            <img
                                                loading="lazy"
                                                src="/images/Illustration.png"
                                                alt="steps"
                                                className="image-12"
                                            />
                                        </div>

                                        <div className="content-cell flex-1 sm:w-1/2 px-4" style={{ textAlign: isMobile ? "center" : "left" }}>
                                            <a href="#" className="new-button spark-icon-left-button next w-inline-block" />
                                            <div className="a">
                                                <div className="item">
                                                    <div className="img">
                                                        <img loading="lazy" src="/images/Group-2-1_1Group-2-1.png" alt="step" />
                                                    </div>
                                                    <div className="text111">
                                                        <div className="text-1">
                                                            <a href="https://webapp.ufund.online/login" target="_blank">
                                                                <strong>Sign up here</strong>
                                                            </a>{" "}
                                                            or{" "}
                                                            <strong className="font-bold">download</strong> the{" "}
                                                            <a href="#Downlode-app">
                                                                <strong>UFUND iOS</strong>
                                                            </a>{" "}
                                                            or{" "}
                                                            <strong>Android</strong> to sign up from your mobile.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
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
                                                <div className="item">
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
                                                <div className="item" >
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
                                                <div className="item">
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
                                </div>


                                {/* Carousel for Investors */}
                                <div className="w-layout-blockcontainer container-5 w-container p-16">
                                    <h1 className="heading-5 text-xl sm:text-2xl mb-6">Features For Business Campaigners</h1>
                                    <Carousel className="w-full mx-auto p-5">
                                        <CarouselContent>
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
    );
};

export default HowItWorks;
