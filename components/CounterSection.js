"use client";
import React, { useState, useEffect, useRef } from "react";

const CounterSection = () => {
  const counters = [
    { id: 1, value: 45, label: "R&D Projects", image: "/images/projects.svg" },
    { id: 2, value: 1478, label: "Active Users", image: "/images/users.svg" },
    { id: 3, value: 159, label: "Active Campaigners", image: "/images/compaigns.svg" },
    { id: 4, value: 1319, label: "Active Investors", image: "/images/Active-Investors.svg" },
    { id: 5, value: 10, label: "Total Products", image: "/images/products.svg" },
    { id: 6, value: 10, label: "Tokenized Assets", image: "/images/assets.svg" },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false); // To prevent multiple starts
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleCounterStart = () => {
      counters.forEach((counter, index) => {
        const increment = Math.ceil(counter.value / 100);
        const interval = setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < counter.value) {
              newCounts[index] += increment;
            } else {
              newCounts[index] = counter.value;
              clearInterval(interval);
            }
            return newCounts;
          });
        }, 25);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          handleCounterStart();
          setHasStarted(true); // Prevent running the counter multiple times
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [counters, hasStarted]);

  return (
    <>
      <section className="counter-section" ref={sectionRef}
      style={{
        boxShadow: "0 6px 20px #0000000f",
      }}>
        <div className="w-layout-blockcontainer counter-conatiner w-container">
          {counters.map((counter, index) => (
            <div
              key={counter.id}
              id="w-node-b26f0831-8cc7-508a-c68f-db2fe4d30b23-fbb97df6"
              className="w-layout-layout quick-stack-2 wf-layout-layout"
            >
              <div className="w-layout-cell cell-8">
                <img src={counter.image} loading="lazy" alt="" />
              </div>
              <div className="w-layout-cell cell-7">
                <h1 className="counter">{counts[index]}</h1>
                <h1 className="heading-4">{counter.label}</h1>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CounterSection