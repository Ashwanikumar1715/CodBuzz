"use client"
import { useState,useEffect } from "react";
import { useRef } from "react";
function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
export default function Home() {
  return (
    <div>
    <FadeInSection>
   <div className='main_div'>
   <br /><br /><br />

    <h1>Take Your Career to the Next Level with CodeBuzz</h1><br />
    <h3>Join Our Internship Program</h3><br /><br />
     <button>Apply</button>
   </div>
   </FadeInSection>
  <FadeInSection>
  <div className="who_we_are_main">
  <div className='who_we_are'>
    <h1>Who We Are</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Minima debitis error, asperiores, aliquam saepe officia eum
      consequatur labore porro illum accusamus. Dolor commodi 
      blanditiis laboriosam nulla eius iure incidunt vel quasi 
      sapiente! Quisquam tempore, non recusandae accusantium 
      necessitatibus nihil quo quae dolorem voluptatibus quibusdam 
      ipsum quis, officia, a nesciunt culpa accusamus eum et maiores
       dolorum nobis! Eius quaerat aperiam labore quae itaque nostrum
        repudiandae perferendis quo veritatis, explicabo voluptatem 
        delectus earum voluptatibus ducimus. Tempore officia, accusamus
         nulla quae tempora laboriosam assumenda delectus magnam ducimus
          cupiditate doloribus labore veniam error ipsa atque quod maiores,
           eos dolor! Enim ipsa accusantium nemo cupiditate?</p>
        </div>
        </div>
  </FadeInSection>

  <FadeInSection>
    <div>
      <h1>Service for the Client</h1>
    </div>
  </FadeInSection>
</div>
  )
}
