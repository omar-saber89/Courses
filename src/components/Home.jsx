import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Data } from "../constance/Data";
import './Home.css';

const Home = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [myLearning, setMyLearning] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      // Get 8 featured courses
      const featured = Data.slice(0, 8);
      // Get 4 courses for "My Learning" (simulated)
      const learning = Data.slice(8, 12);
      
      setFeaturedCourses(featured);
      setMyLearning(learning);
      setLoading(false);
    }, 1500);

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
          <h2 className="loading-title">Loading Home</h2>
          <p className="loading-subtitle">Preparing your learning dashboard...</p>
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
    <div className="home-container">
      {/* Header Section */}
      <div className="home-header">
        <div className="header-content">
          <h1 className="main-title">Let's Start Learning</h1>
          <p className="subtitle">Expand your skills with our curated courses</p>
        </div>
        <div className="header-stats">
          <h2>My Learning</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">{myLearning.length}</span>
              <span className="stat-label">Active Courses</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">12</span>
              <span className="stat-label">Hours Learned</span>
            </div>
          </div>
        </div>
      </div>

      {/* My Learning Section */}
      {myLearning.length > 0 && (
        <section className="learning-section">
          <div className="section-header">
            <h2 className="section-title">Continue Learning</h2>
            <Link to="/courses" className="view-all-link m-10 mt-24">
              View All Courses →
            </Link>
          </div>
          <div className="courses-grid">
            {myLearning.map((course, index) => (
              <div key={course.id} className="learning-card">
                <div className="card-image">
                  <img src={course.image} alt={course.title} />
                  <div className="progress-overlay">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${Math.min(100, (index + 1) * 25)}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">
                      {Math.min(100, (index + 1) * 25)}% Complete
                    </span>
                  </div>
                </div>
                <div className="card-content">
                  <span className="course-category">{course.category}</span>
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <div className="card-footer">
                    <span className="course-level">{course.level}</span>
                    <Link to={`/course/${course.id}`} className="continue-btn">
                      Continue
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Featured Courses Section */}
      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Featured Courses</h2>
          <p className="section-subtitle">Most popular courses this week</p>
        </div>
        <div className="featured-grid">
          {featuredCourses.map((course, index) => (
            <Link to={`/course/${course.id}`} key={course.id} className="featured-card">
              <div className="featured-image">
                <img src={course.image} alt={course.title} />
                <div className="featured-badge">Featured</div>
              </div>
              <div className="featured-content">
                <div className="course-meta">
                  <span className="category-tag">{course.category}</span>
                  <span className="rating">⭐ {course.rating || '4.8'}</span>
                </div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-info">
                  <span className="info-item">⏱️ {course.duration || '8 weeks'}</span>
                  <span className="info-item">👥 {course.students || '1.2k'}</span>
                </div>
                <div className="price-section">
                  <span className="price">${course.price || '49.99'}</span>
                  {course.originalPrice && (
                    <span className="original-price">${course.originalPrice}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Browse by Category</h2>
        <div className="categories-grid">
          {['Web Development', 'Data Science', 'Mobile Development', 'Design', 'Business', 'Marketing'].map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">
                {['💻', '📊', '📱', '🎨', '💼', '📈'][index]}
              </div>
              <h3>{category}</h3>
              <span className="course-count">{Math.floor(Math.random() * 50) + 10} courses</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Learning?</h2>
          <p>Join thousands of students advancing their careers with our courses</p>
          <Link to="/courses" className="cta-button">
            Browse All Courses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;