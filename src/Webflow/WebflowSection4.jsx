import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const slides = [
  {
    img: "/src/assets/section1img1.webp",
    title: "Company websites",
    text: "Presenting your brand to the world? We’ve got it covered. Webflow gives us the tools to bring your vision to life with functional, high-converting sites.",
  },
  {
    img: "/src/assets/section1img2.webp",
    title: "Landing pages",
    text: "Getting a campaign-specific landing page up and running on time is easy with Webflow. The A/B testing process is simple to figure out the best layout.",
  },
  {
    img: "/src/assets/section1img3.webp",
    title: "E-commerce",
    text: "From products to payments, we help you craft online stores that deliver smooth shopping experiences with Webflow’s integrated tools.",
  },
];
function WebflowSection4() {
  const [showAll, setShowAll] = useState(false);
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const services = [
    {
      img: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 18.94H11.5C11.09 18.94 10.75 18.6 10.75 18.19C10.75 17.78 11.09 17.44 11.5 17.44H18.75C19.16 17.44 19.5 17.78 19.5 18.19C19.5 18.6 19.16 18.94 18.75 18.94Z"
            fill="white"
          />
          <mask
            id="mask0_1641_37441"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="18"
            height="19"
          >
            <path d="M17.18 0H0V18.94H17.18V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1641_37441)">
            <path
              d="M1.62065 18.94C1.27065 18.94 0.970647 18.7 0.890647 18.36L0.0606474 14.89C-0.109353 14.18 0.0606473 13.42 0.520647 12.85L9.94065 1.07C10.9906 -0.179997 12.8306 -0.359997 14.1106 0.650003L15.8106 1.98H15.8306C16.4706 2.39 16.9306 3.03 17.1006 3.77C17.2806 4.52 17.1506 5.32 16.7306 5.97C16.7006 6.02 16.6706 6.06 7.14065 17.98C6.68065 18.55 5.99065 18.89 5.25065 18.89L1.61065 18.94H1.62065ZM12.2406 1.5C11.8106 1.5 11.3906 1.69 11.1106 2.02L1.70065 13.79C1.53065 14 1.47065 14.28 1.53065 14.55L2.21065 17.43L5.25065 17.39C5.53065 17.39 5.80065 17.26 5.98065 17.04C9.11065 13.12 15.3306 5.34 15.5006 5.12C15.6706 4.82 15.7306 4.46 15.6406 4.12C15.5506 3.75 15.3206 3.43 14.9906 3.23C14.9306 3.19 13.7306 2.26 13.2106 1.85L13.1806 1.83C12.9106 1.62 12.5806 1.5 12.2406 1.5Z"
              fill="white"
            />
          </g>
          <path
            d="M14.2202 8.68C14.0502 8.68 13.8902 8.63 13.7602 8.52L8.31021 4.33C7.98021 4.08 7.91021 3.61 8.15021 3.28C8.40021 2.95 8.87021 2.88 9.20021 3.12C9.20021 3.12 9.22021 3.13 9.22021 3.14L14.6702 7.33C15.0002 7.58 15.0602 8.05 14.8102 8.38C14.6702 8.57 14.4502 8.67 14.2102 8.67"
            fill="white"
          />
        </svg>
      ),
      title: "Design Freedom",
      text: "Webflow lets us do what we want. It’s a simple statement — but it’s true. Prior to Webflow, we were dealing with a bunch of CMS systems, often having to compromise on design or branding choices to get something working. Now, we can be sure that our original vision for the site is what the user sees on screen.",
    },



    {  img: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 18.94H11.5C11.09 18.94 10.75 18.6 10.75 18.19C10.75 17.78 11.09 17.44 11.5 17.44H18.75C19.16 17.44 19.5 17.78 19.5 18.19C19.5 18.6 19.16 18.94 18.75 18.94Z"
            fill="white"
          />
          <mask
            id="mask0_1641_37441"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="18"
            height="19"
          >
            <path d="M17.18 0H0V18.94H17.18V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1641_37441)">
            <path
              d="M1.62065 18.94C1.27065 18.94 0.970647 18.7 0.890647 18.36L0.0606474 14.89C-0.109353 14.18 0.0606473 13.42 0.520647 12.85L9.94065 1.07C10.9906 -0.179997 12.8306 -0.359997 14.1106 0.650003L15.8106 1.98H15.8306C16.4706 2.39 16.9306 3.03 17.1006 3.77C17.2806 4.52 17.1506 5.32 16.7306 5.97C16.7006 6.02 16.6706 6.06 7.14065 17.98C6.68065 18.55 5.99065 18.89 5.25065 18.89L1.61065 18.94H1.62065ZM12.2406 1.5C11.8106 1.5 11.3906 1.69 11.1106 2.02L1.70065 13.79C1.53065 14 1.47065 14.28 1.53065 14.55L2.21065 17.43L5.25065 17.39C5.53065 17.39 5.80065 17.26 5.98065 17.04C9.11065 13.12 15.3306 5.34 15.5006 5.12C15.6706 4.82 15.7306 4.46 15.6406 4.12C15.5506 3.75 15.3206 3.43 14.9906 3.23C14.9306 3.19 13.7306 2.26 13.2106 1.85L13.1806 1.83C12.9106 1.62 12.5806 1.5 12.2406 1.5Z"
              fill="white"
            />
          </g>
          <path
            d="M14.2202 8.68C14.0502 8.68 13.8902 8.63 13.7602 8.52L8.31021 4.33C7.98021 4.08 7.91021 3.61 8.15021 3.28C8.40021 2.95 8.87021 2.88 9.20021 3.12C9.20021 3.12 9.22021 3.13 9.22021 3.14L14.6702 7.33C15.0002 7.58 15.0602 8.05 14.8102 8.38C14.6702 8.57 14.4502 8.67 14.2102 8.67"
            fill="white"
          />
        </svg>
      ), title: "Rapid Prototyping", text: "It used to be prohibitively expensive to take more than one design idea past the sketchbook stage. But with Webflow, we can prototype quickly, roundtable with our clients, and bring several ideas through the design process to identify the best brand fit." },



      
    { img: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 18.94H11.5C11.09 18.94 10.75 18.6 10.75 18.19C10.75 17.78 11.09 17.44 11.5 17.44H18.75C19.16 17.44 19.5 17.78 19.5 18.19C19.5 18.6 19.16 18.94 18.75 18.94Z"
            fill="white"
          />
          <mask
            id="mask0_1641_37441"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="18"
            height="19"
          >
            <path d="M17.18 0H0V18.94H17.18V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1641_37441)">
            <path
              d="M1.62065 18.94C1.27065 18.94 0.970647 18.7 0.890647 18.36L0.0606474 14.89C-0.109353 14.18 0.0606473 13.42 0.520647 12.85L9.94065 1.07C10.9906 -0.179997 12.8306 -0.359997 14.1106 0.650003L15.8106 1.98H15.8306C16.4706 2.39 16.9306 3.03 17.1006 3.77C17.2806 4.52 17.1506 5.32 16.7306 5.97C16.7006 6.02 16.6706 6.06 7.14065 17.98C6.68065 18.55 5.99065 18.89 5.25065 18.89L1.61065 18.94H1.62065ZM12.2406 1.5C11.8106 1.5 11.3906 1.69 11.1106 2.02L1.70065 13.79C1.53065 14 1.47065 14.28 1.53065 14.55L2.21065 17.43L5.25065 17.39C5.53065 17.39 5.80065 17.26 5.98065 17.04C9.11065 13.12 15.3306 5.34 15.5006 5.12C15.6706 4.82 15.7306 4.46 15.6406 4.12C15.5506 3.75 15.3206 3.43 14.9906 3.23C14.9306 3.19 13.7306 2.26 13.2106 1.85L13.1806 1.83C12.9106 1.62 12.5806 1.5 12.2406 1.5Z"
              fill="white"
            />
          </g>
          <path
            d="M14.2202 8.68C14.0502 8.68 13.8902 8.63 13.7602 8.52L8.31021 4.33C7.98021 4.08 7.91021 3.61 8.15021 3.28C8.40021 2.95 8.87021 2.88 9.20021 3.12C9.20021 3.12 9.22021 3.13 9.22021 3.14L14.6702 7.33C15.0002 7.58 15.0602 8.05 14.8102 8.38C14.6702 8.57 14.4502 8.67 14.2102 8.67"
            fill="white"
          />
        </svg>
      ),title: "Highly Scalable", text: "Whether you’re running a niche blog that might take off any day soon, or creating a new ecommerce store with thousands of inbound prospects expected on day one, Webflow makes it easy to scale your website to match expected user demand — no 404 pages, no lost sales." },




    { img: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 18.94H11.5C11.09 18.94 10.75 18.6 10.75 18.19C10.75 17.78 11.09 17.44 11.5 17.44H18.75C19.16 17.44 19.5 17.78 19.5 18.19C19.5 18.6 19.16 18.94 18.75 18.94Z"
            fill="white"
          />
          <mask
            id="mask0_1641_37441"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="18"
            height="19"
          >
            <path d="M17.18 0H0V18.94H17.18V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1641_37441)">
            <path
              d="M1.62065 18.94C1.27065 18.94 0.970647 18.7 0.890647 18.36L0.0606474 14.89C-0.109353 14.18 0.0606473 13.42 0.520647 12.85L9.94065 1.07C10.9906 -0.179997 12.8306 -0.359997 14.1106 0.650003L15.8106 1.98H15.8306C16.4706 2.39 16.9306 3.03 17.1006 3.77C17.2806 4.52 17.1506 5.32 16.7306 5.97C16.7006 6.02 16.6706 6.06 7.14065 17.98C6.68065 18.55 5.99065 18.89 5.25065 18.89L1.61065 18.94H1.62065ZM12.2406 1.5C11.8106 1.5 11.3906 1.69 11.1106 2.02L1.70065 13.79C1.53065 14 1.47065 14.28 1.53065 14.55L2.21065 17.43L5.25065 17.39C5.53065 17.39 5.80065 17.26 5.98065 17.04C9.11065 13.12 15.3306 5.34 15.5006 5.12C15.6706 4.82 15.7306 4.46 15.6406 4.12C15.5506 3.75 15.3206 3.43 14.9906 3.23C14.9306 3.19 13.7306 2.26 13.2106 1.85L13.1806 1.83C12.9106 1.62 12.5806 1.5 12.2406 1.5Z"
              fill="white"
            />
          </g>
          <path
            d="M14.2202 8.68C14.0502 8.68 13.8902 8.63 13.7602 8.52L8.31021 4.33C7.98021 4.08 7.91021 3.61 8.15021 3.28C8.40021 2.95 8.87021 2.88 9.20021 3.12C9.20021 3.12 9.22021 3.13 9.22021 3.14L14.6702 7.33C15.0002 7.58 15.0602 8.05 14.8102 8.38C14.6702 8.57 14.4502 8.67 14.2102 8.67"
            fill="white"
          />
        </svg>
      ), title: "E-commerce Ready", text: "Webflow offers baked-in ecommerce functionality or, if you already have an online store, seamless integration with major ecommerce providers. No more worries about plugin compatibility, payment gateways, or inventory management — it’s all right there for you." },





    { img: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 18.94H11.5C11.09 18.94 10.75 18.6 10.75 18.19C10.75 17.78 11.09 17.44 11.5 17.44H18.75C19.16 17.44 19.5 17.78 19.5 18.19C19.5 18.6 19.16 18.94 18.75 18.94Z"
            fill="white"
          />
          <mask
            id="mask0_1641_37441"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="18"
            height="19"
          >
            <path d="M17.18 0H0V18.94H17.18V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1641_37441)">
            <path
              d="M1.62065 18.94C1.27065 18.94 0.970647 18.7 0.890647 18.36L0.0606474 14.89C-0.109353 14.18 0.0606473 13.42 0.520647 12.85L9.94065 1.07C10.9906 -0.179997 12.8306 -0.359997 14.1106 0.650003L15.8106 1.98H15.8306C16.4706 2.39 16.9306 3.03 17.1006 3.77C17.2806 4.52 17.1506 5.32 16.7306 5.97C16.7006 6.02 16.6706 6.06 7.14065 17.98C6.68065 18.55 5.99065 18.89 5.25065 18.89L1.61065 18.94H1.62065ZM12.2406 1.5C11.8106 1.5 11.3906 1.69 11.1106 2.02L1.70065 13.79C1.53065 14 1.47065 14.28 1.53065 14.55L2.21065 17.43L5.25065 17.39C5.53065 17.39 5.80065 17.26 5.98065 17.04C9.11065 13.12 15.3306 5.34 15.5006 5.12C15.6706 4.82 15.7306 4.46 15.6406 4.12C15.5506 3.75 15.3206 3.43 14.9906 3.23C14.9306 3.19 13.7306 2.26 13.2106 1.85L13.1806 1.83C12.9106 1.62 12.5806 1.5 12.2406 1.5Z"
              fill="white"
            />
          </g>
          <path
            d="M14.2202 8.68C14.0502 8.68 13.8902 8.63 13.7602 8.52L8.31021 4.33C7.98021 4.08 7.91021 3.61 8.15021 3.28C8.40021 2.95 8.87021 2.88 9.20021 3.12C9.20021 3.12 9.22021 3.13 9.22021 3.14L14.6702 7.33C15.0002 7.58 15.0602 8.05 14.8102 8.38C14.6702 8.57 14.4502 8.67 14.2102 8.67"
            fill="white"
          />
        </svg>
      ), title: "Future-Proof Structure", text: "Without getting super techy, the way Webflow handles layout and assets — media, interactive elements, etc. — makes it much simpler to restructure, rework or fully redesign your site in future. Rather than going back to the drawing board every time you need a refresh or update, with Webflow, it’s a painless process." },





    { img: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 18.94H11.5C11.09 18.94 10.75 18.6 10.75 18.19C10.75 17.78 11.09 17.44 11.5 17.44H18.75C19.16 17.44 19.5 17.78 19.5 18.19C19.5 18.6 19.16 18.94 18.75 18.94Z"
            fill="white"
          />
          <mask
            id="mask0_1641_37441"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="18"
            height="19"
          >
            <path d="M17.18 0H0V18.94H17.18V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1641_37441)">
            <path
              d="M1.62065 18.94C1.27065 18.94 0.970647 18.7 0.890647 18.36L0.0606474 14.89C-0.109353 14.18 0.0606473 13.42 0.520647 12.85L9.94065 1.07C10.9906 -0.179997 12.8306 -0.359997 14.1106 0.650003L15.8106 1.98H15.8306C16.4706 2.39 16.9306 3.03 17.1006 3.77C17.2806 4.52 17.1506 5.32 16.7306 5.97C16.7006 6.02 16.6706 6.06 7.14065 17.98C6.68065 18.55 5.99065 18.89 5.25065 18.89L1.61065 18.94H1.62065ZM12.2406 1.5C11.8106 1.5 11.3906 1.69 11.1106 2.02L1.70065 13.79C1.53065 14 1.47065 14.28 1.53065 14.55L2.21065 17.43L5.25065 17.39C5.53065 17.39 5.80065 17.26 5.98065 17.04C9.11065 13.12 15.3306 5.34 15.5006 5.12C15.6706 4.82 15.7306 4.46 15.6406 4.12C15.5506 3.75 15.3206 3.43 14.9906 3.23C14.9306 3.19 13.7306 2.26 13.2106 1.85L13.1806 1.83C12.9106 1.62 12.5806 1.5 12.2406 1.5Z"
              fill="white"
            />
          </g>
          <path
            d="M14.2202 8.68C14.0502 8.68 13.8902 8.63 13.7602 8.52L8.31021 4.33C7.98021 4.08 7.91021 3.61 8.15021 3.28C8.40021 2.95 8.87021 2.88 9.20021 3.12C9.20021 3.12 9.22021 3.13 9.22021 3.14L14.6702 7.33C15.0002 7.58 15.0602 8.05 14.8102 8.38C14.6702 8.57 14.4502 8.67 14.2102 8.67"
            fill="white"
          />
        </svg>
      ), title: "Collaborative Workflows", text: "Webflow lets the team at Phunk work effectively in parallel — design, development and media teams can operate simultaneously without getting in each other's way. On the client side, there’s no compromise on quality — but a huge chunk taken out of lead times." },




    { img: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 18.94H11.5C11.09 18.94 10.75 18.6 10.75 18.19C10.75 17.78 11.09 17.44 11.5 17.44H18.75C19.16 17.44 19.5 17.78 19.5 18.19C19.5 18.6 19.16 18.94 18.75 18.94Z"
            fill="white"
          />
          <mask
            id="mask0_1641_37441"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="18"
            height="19"
          >
            <path d="M17.18 0H0V18.94H17.18V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1641_37441)">
            <path
              d="M1.62065 18.94C1.27065 18.94 0.970647 18.7 0.890647 18.36L0.0606474 14.89C-0.109353 14.18 0.0606473 13.42 0.520647 12.85L9.94065 1.07C10.9906 -0.179997 12.8306 -0.359997 14.1106 0.650003L15.8106 1.98H15.8306C16.4706 2.39 16.9306 3.03 17.1006 3.77C17.2806 4.52 17.1506 5.32 16.7306 5.97C16.7006 6.02 16.6706 6.06 7.14065 17.98C6.68065 18.55 5.99065 18.89 5.25065 18.89L1.61065 18.94H1.62065ZM12.2406 1.5C11.8106 1.5 11.3906 1.69 11.1106 2.02L1.70065 13.79C1.53065 14 1.47065 14.28 1.53065 14.55L2.21065 17.43L5.25065 17.39C5.53065 17.39 5.80065 17.26 5.98065 17.04C9.11065 13.12 15.3306 5.34 15.5006 5.12C15.6706 4.82 15.7306 4.46 15.6406 4.12C15.5506 3.75 15.3206 3.43 14.9906 3.23C14.9306 3.19 13.7306 2.26 13.2106 1.85L13.1806 1.83C12.9106 1.62 12.5806 1.5 12.2406 1.5Z"
              fill="white"
            />
          </g>
          <path
            d="M14.2202 8.68C14.0502 8.68 13.8902 8.63 13.7602 8.52L8.31021 4.33C7.98021 4.08 7.91021 3.61 8.15021 3.28C8.40021 2.95 8.87021 2.88 9.20021 3.12C9.20021 3.12 9.22021 3.13 9.22021 3.14L14.6702 7.33C15.0002 7.58 15.0602 8.05 14.8102 8.38C14.6702 8.57 14.4502 8.67 14.2102 8.67"
            fill="white"
          />
        </svg>
      ), title: "Live Staging", text: "No more sending PDF drafts back and forth — with Webflow we can iterate your change requests quickly, and publish them immediately, so you can see your design coming together in real time. It makes for a much more responsive and collaborative process — with genuine involvement from your side." },




    { img: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 18.94H11.5C11.09 18.94 10.75 18.6 10.75 18.19C10.75 17.78 11.09 17.44 11.5 17.44H18.75C19.16 17.44 19.5 17.78 19.5 18.19C19.5 18.6 19.16 18.94 18.75 18.94Z"
            fill="white"
          />
          <mask
            id="mask0_1641_37441"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="18"
            height="19"
          >
            <path d="M17.18 0H0V18.94H17.18V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1641_37441)">
            <path
              d="M1.62065 18.94C1.27065 18.94 0.970647 18.7 0.890647 18.36L0.0606474 14.89C-0.109353 14.18 0.0606473 13.42 0.520647 12.85L9.94065 1.07C10.9906 -0.179997 12.8306 -0.359997 14.1106 0.650003L15.8106 1.98H15.8306C16.4706 2.39 16.9306 3.03 17.1006 3.77C17.2806 4.52 17.1506 5.32 16.7306 5.97C16.7006 6.02 16.6706 6.06 7.14065 17.98C6.68065 18.55 5.99065 18.89 5.25065 18.89L1.61065 18.94H1.62065ZM12.2406 1.5C11.8106 1.5 11.3906 1.69 11.1106 2.02L1.70065 13.79C1.53065 14 1.47065 14.28 1.53065 14.55L2.21065 17.43L5.25065 17.39C5.53065 17.39 5.80065 17.26 5.98065 17.04C9.11065 13.12 15.3306 5.34 15.5006 5.12C15.6706 4.82 15.7306 4.46 15.6406 4.12C15.5506 3.75 15.3206 3.43 14.9906 3.23C14.9306 3.19 13.7306 2.26 13.2106 1.85L13.1806 1.83C12.9106 1.62 12.5806 1.5 12.2406 1.5Z"
              fill="white"
            />
          </g>
          <path
            d="M14.2202 8.68C14.0502 8.68 13.8902 8.63 13.7602 8.52L8.31021 4.33C7.98021 4.08 7.91021 3.61 8.15021 3.28C8.40021 2.95 8.87021 2.88 9.20021 3.12C9.20021 3.12 9.22021 3.13 9.22021 3.14L14.6702 7.33C15.0002 7.58 15.0602 8.05 14.8102 8.38C14.6702 8.57 14.4502 8.67 14.2102 8.67"
            fill="white"
          />
        </svg>
      ), title: "Secure and Reliable", text: "It’s not just about visual excellence. Under the surface, Webflow makes it a breeze to implement the load balancing, traffic management and security features that ensure your website is always available and your data is always safe — no matter how much traffic you get." },
  ];

  return (
    <section className=" lg:h-300 h-650 bg-black pt-10 ">
      <div>
        <motion.h1 initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="text-gray-300 mx-auto  font-semibold leading-normal  lg:text-6xl text-3xl font-medium text-center ">
          Why choose{" "}
          <span className="bg-gradient-to-r from-[#00d1ff] to-[#004cff] bg-clip-text text-transparent">
            Webflow?
          </span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="text-sm leading-relaxed mx-auto lg:w-120 md:w-100 w-90 text-gray-400 mt-10 px-3 text-center">
          As an official Webflow partner it should be no surprise that we’re huge
          evangelists for the platform. Here’s a rundown of why we believe it’s
          the best option for any client project.
        </motion.p>
      </div>

      <div
        className={`relative transition-all duration-700 ease-in-out ${
          showAll ? "" : "lg:max-h-[500px] overflow-hidden"
        }`}
      >
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 place-items-center pt-15 px-20">
          {services.map((service, index) => (
            <motion.div  initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              key={index}
              className="border lg:w-160 w-90 lg:h-46 h-60 border-white rounded-2xl p-6 transition-all duration-300"
            >
                <div className=" flex items-center gap-4">
              {/* SVG ICON (if exists) */}
              <div className="mb-4">{service.img}</div>

              <a href="" className="text-2xl text-white font-medium mb-3">
                {service.title}
              </a>
              </div>
              <p className="text-[#969696] text-sm pt-5">{service.text}</p>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="absolute lg:block hidden bottom-0 left-1/2 w-[98%] rounded-b-xl max-w-[2100px]  -translate-x-1/2  opacity-60 h-72 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none"></div>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-white lg:block hidden text-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition-all duration-300"
        >
          {showAll ? "Show less" : "See all"}
        </button>
      </div>



      
    </section>
  );
}

export default WebflowSection4;
