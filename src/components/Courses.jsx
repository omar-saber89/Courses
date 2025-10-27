import React, { useState, useEffect } from "react";
import { Data } from "../constance/Data";
import { Link } from "react-router-dom";
import "./Card.css";

const Courses = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setCourses(Data);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="luxury-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-center"></div>
          </div>
          <h2 className="loading-title">Loading Courses</h2>
          <p className="loading-subtitle">Preparing amazing learning experiences...</p>
          <div className="loading-progress">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className=""></div>
      <main className="main-container m-5 gap-5">
        <svg className="svg-container">
          <defs>
            <filter
              id="turbulent-displace"
              colorInterpolationFilters="sRGB"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feTurbulence
                type="turbulence"
                baseFrequency="0.02"
                numOctaves="10"
                result="noise1"
                seed="1"
              />
              <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
                <animate
                  attributeName="dy"
                  values="700; 0"
                  dur="6s"
                  repeatCount="indefinite"
                  calcMode="linear"
                />
              </feOffset>

              <feTurbulence
                type="turbulence"
                baseFrequency="0.02"
                numOctaves="10"
                result="noise2"
                seed="1"
              />
              <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
                <animate
                  attributeName="dy"
                  values="0; -700"
                  dur="6s"
                  repeatCount="indefinite"
                  calcMode="linear"
                />
              </feOffset>

              <feTurbulence
                type="turbulence"
                baseFrequency="0.02"
                numOctaves="10"
                result="noise1"
                seed="2"
              />
              <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
                <animate
                  attributeName="dx"
                  values="490; 0"
                  dur="6s"
                  repeatCount="indefinite"
                  calcMode="linear"
                />
              </feOffset>

              <feTurbulence
                type="turbulence"
                baseFrequency="0.02"
                numOctaves="10"
                result="noise2"
                seed="2"
              />
              <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
                <animate
                  attributeName="dx"
                  values="0; -490"
                  dur="6s"
                  repeatCount="indefinite"
                  calcMode="linear"
                />
              </feOffset>

              <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
              <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
              <feBlend
                in="part1"
                in2="part2"
                mode="color-dodge"
                result="combinedNoise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="combinedNoise"
                scale="30"
                xChannelSelector="R"
                yChannelSelector="B"
              />
            </filter>
          </defs>
        </svg>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <Link 
              to={`/course/${course.id}`} 
              key={course.id || index} 
              className="card-link"
            >
              <div className="card-container">
                <div className="inner-container">
                  <div className="border-outer">
                    <div
                      className="main-card"
                      style={{
                        backgroundImage: `url(${course.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                  <div className="glow-layer-1"></div>
                  <div className="glow-layer-2"></div>
                </div>

                <div className="overlay-1"></div>
                <div className="overlay-2"></div>
                <div className="background-glow"></div>

                <div className="content-container">
                  <div className="content-top">
                    <div className="scrollbar-glass">{course.category}</div>
                    <p className="title">{course.title}</p>
                  </div>

                  <hr className="divider" />

                  <div className="content-bottom">
                    <p className="description">{course.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Courses;