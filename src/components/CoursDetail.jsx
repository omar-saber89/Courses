import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Data } from "../constance/Data";
import "./CourseDetail.css";

const CourseDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      const foundCourse = Data.find((course) => course.id === parseInt(id));
      setCourse(foundCourse);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [id]);

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
          <h2 className="loading-title">Loading Course</h2>
          <p className="loading-subtitle">
            Preparing your learning experience...
          </p>
          <div className="loading-progress">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="course-not-found">
        <div className="not-found-content">
          <h2>Course Not Found</h2>
          <p>The course you're looking for doesn't exist.</p>
          <Link to="/courses" className="back-button">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="course-detail-container">
      {/* Back Navigation */}
      <div className="back-nav">
        <Link to="/courses" className="back-button">
          ← Back to Courses
        </Link>
      </div>

      {/* Header */}
      <div className="course-header">
        <div className="course-hero">
          <div
            className="course-hero-image"
            style={{ backgroundImage: `url(${course.image})` }}
          >
            <div className="hero-overlay">
              <div className="course-category-badge">{course.category}</div>
              <h1 className="course-title">{course.title}</h1>
              <p className="course-subtitle">{course.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="course-content">
        <div className="course-main">
          {/* Course Info */}
          <div className="course-info-grid">
            <div className="info-card">
              <div className="info-icon">⏱️</div>
              <div className="info-content">
                <h3>Duration</h3>
                <p>{course.duration || "8 Weeks"}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📚</div>
              <div className="info-content">
                <h3>Level</h3>
                <p>{course.level || "Beginner"}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">👥</div>
              <div className="info-content">
                <h3>Students</h3>
                <p>{course.students || "1,200+"}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">⭐</div>
              <div className="info-content">
                <h3>Rating</h3>
                <p>{course.rating || "4.8/5"}</p>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <section className="course-description-section">
            <h2>About This Course</h2>
            <div className="description-content">
              <p>
                {course.fullDescription ||
                  `
                This comprehensive course will enable you to master ${course.title} from scratch to professional level. 
                We'll cover all fundamental and advanced concepts with real-world practical applications.
                `}
              </p>

              <div className="features-list">
                <h3>What You'll Learn</h3>
                <ul>
                  <li>Understand fundamental and advanced concepts</li>
                  <li>Real-world practical applications</li>
                  <li>Hands-on projects to develop skills</li>
                  <li>Best practices and industry standards</li>
                  <li>Problem-solving strategies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Curriculum */}
          <section className="curriculum-section">
            <h2>Course Curriculum</h2>
            <div className="curriculum-list">
              {course.curriculum?.map((chapter, index) => (
                <div key={index} className="chapter-card">
                  <div className="chapter-header">
                    <h3>
                      Chapter {index + 1}: {chapter.title}
                    </h3>
                    <span className="chapter-duration">{chapter.duration}</span>
                  </div>
                  <div className="lessons-list">
                    {chapter.lessons?.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="lesson-item">
                        <span className="lesson-icon">▶️</span>
                        <span className="lesson-title">{lesson.title}</span>
                        <span className="lesson-duration">
                          {lesson.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )) || (
                <div className="no-curriculum">
                  <p>Curriculum will be added soon</p>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="course-sidebar">
          <div className="enrollment-card">
            <div className="price-section">
              <span className="current-price">$ {course.price || "49.99"}</span>
              {course.originalPrice && (
                <span className="original-price">$ {course.originalPrice}</span>
              )}
            </div>

            <button
              className="enroll-button"
              title="It's a fake course"
              onClick={() =>
                alert("This course is fake. Go touch some grass instead.")
              }
            >
              Enroll Now
            </button>

            <div className="enrollment-features">
              <div className="feature-item">
                <span>✓</span>
                <span>Lifetime Access</span>
              </div>
              <div className="feature-item">
                <span>✓</span>
                <span>Certificate of Completion</span>
              </div>
              <div className="feature-item">
                <span>✓</span>
                <span>Technical Support</span>
              </div>
              <div className="feature-item">
                <span>✓</span>
                <span>Practical Exercises</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
