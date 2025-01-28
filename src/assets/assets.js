import logo from './logo.svg'
import logo_dark from './logo_dark.png';
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
// import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    // header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
  {
    title: "Air Compressor Installation",
    location: "King Plastic Ltd",
    description: "Installation and commissioning of high-performance air compressors for manufacturing efficiency.",
    image: project_img_1,
  },
  {
    title: "Steam Pipeline Setup",
    location: "New Kenya Cooperative Creameries (NKCC)",
    description: "Design and installation of steam and hot water pipelines for energy optimization.",
    image: project_img_2,
  },
  {
    title: "Refrigeration Plant Maintenance",
    location: "Equator Bottlers Kisumu",
    description: "Comprehensive maintenance and servicing of industrial refrigeration systems.",
    image: project_img_3,
  },
  {
    title: "Boiler Installation",
    location: "Leather Industries Ltd",
    description: "Installation and commissioning of steam and thermic boilers with advanced controls.",
    image: project_img_4,
  },
  {
    title: "Compressed Air Piping",
    location: "East African Manufacturing Plant",
    description: "Supply and installation of high-pressure compressed air pipelines for industrial use.",
    image: project_img_5,
  },
];

  export const testimonialsData = [
    {
        name: "Michael Johnson",
        title: "Operations Manager",
        image: profile_img_1,
        alt: "Portrait of Michael Johnson",
        rating: 5,
        text: "Lyma's expertise in air treatment equipment has significantly improved our manufacturing efficiency. Their team is professional and committed to delivering excellent service."
    },
    {
        name: "Sophia Carter",
        title: "Plant Engineer",
        image: profile_img_2,
        alt: "Portrait of Sophia Carter",
        rating: 4,
        text: "We have relied on Lyma for our steam distribution systems, and they never disappoint. Their solutions are tailored to meet industry standards and our specific requirements."
    },
    {
        name: "David Brown",
        title: "Facility Manager",
        image: profile_img_3,
        alt: "Portrait of David Brown",
        rating: 5,
        text: "The team at Lyma provided excellent installation services for our water pipelines and fittings. Their attention to detail and post-installation support was exceptional."
    }
];
