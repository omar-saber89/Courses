import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Courses from "./components/Courses";
import CourseDetail from "./components/CoursDetail"
import Header from "./components/Header";
import Story from "./components/Story";
import Nav from "./components/Nav";
import React from "react";

function Layout() {
  const location = useLocation();

  // إخفاء الهيدر في صفحة تفاصيل الكورس
  const showHeader = location.pathname === "/";
  // إخفاء النافبار في صفحة تفاصيل الكورس إذا أردت
  const showNav = !location.pathname.startsWith("/course/");

  return (
    <>
      {showNav && <Nav />}
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/story" element={<Story />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;