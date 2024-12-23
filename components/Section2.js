"use client"
import React from 'react'

const arrowImageStyles1 = {
  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.4s linear', // Smooth transition for hover effect
};

const Section2 = () => {
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
      <section className="section-2">
        <style>{keyframes}</style>

        <div className="w-layout-blockcontainer invest-container w-container">
          <img
            src="/images/Group-2127_1Group-2127.png"
            loading="lazy"
            alt=""
            className="image-18"
            style={arrowImageStyles}
          />
          <img
            src="/images/Group-2141_1Group-2141.png"
            loading="lazy"
            alt=""
            className="image-17"
            style={arrowImageStyles}
          />
          <h1 className="feature-heading" style={{ fontFamily: "THICCCBOI" }}>Invest Anywhere, Anytime</h1>
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
                    <img src="/images/Invester-Icon.svg" loading="lazy" alt=""
                      style={arrowImageStyles1}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)'; // Enlarge image on hover
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)'; // Revert to original size
                      }} />
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
                    <img src="/images/Invester-Icon.svg" loading="lazy" alt="" 
                     style={arrowImageStyles1}
                     onMouseOver={(e) => {
                       e.currentTarget.style.transform = 'scale(1.1)'; // Enlarge image on hover
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.transform = 'scale(1)'; // Revert to original size
                     }}/>
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
                    <img src="/images/Invester-Icon.svg" loading="lazy" alt=""
                     style={arrowImageStyles1}
                     onMouseOver={(e) => {
                       e.currentTarget.style.transform = 'scale(1.1)'; // Enlarge image on hover
                     }}
                     onMouseOut={(e) => {
                       e.currentTarget.style.transform = 'scale(1)'; // Revert to original size
                     }} />
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
    </>
  )
}

export default Section2