import "./font.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./globals.scss";
import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
// import LoadPhosphorIcons from "@/helper/LoadPhosphorIcons";

import CustomCursor from "@/helper/CustomCursor";
import BackToTop from "@/helper/BackToTop";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "EduAll  - LMS, Tutors, Education & Online Course NEXT JS Template",
  description:
    "EduAll is a comprehensive and modern NEXT JS template designed for online education platforms, learning management systems (LMS), tutors, educational institutions, and online courses. It’s the perfect solution for creating an engaging and interactive online learning experience for students, educators, and institutions. Whether you’re offering online courses, running a tutoring platform, or managing an educational website, EduAll provides the tools to help you succeed. This template is tailored to meet the needs of educators, administrators, and students, providing a seamless and engaging user experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/* <link rel='stylesheet' href='assets/css/bootstrap.min.css' /> */}
      {/* <link rel='stylesheet' href='assets/css/fontawesome.min.css' />
      <link rel='stylesheet' href='assets/css/nice-select.min.css' />
      <link rel='stylesheet' href='assets/css/animate.min.css' /> */}
      <body suppressHydrationWarning={true}>
        <BootstrapInit />
        <CustomCursor />
        <BackToTop />
        <Animation />
        {/* <LoadPhosphorIcons /> */}

        <RouteScrollToTop />
        {children}
      </body>
    </html>
  );
}
