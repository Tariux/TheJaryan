import React, { useEffect } from "react";
import $ from "jquery";
import JAlert from "./JAlert";

function ImageGallery(props) {
  function openImage(element) {
    if (!$(element.target).hasClass("active")) {
      $(".image-gallery span.active").toggleClass("active");
      $(element.target).toggleClass("active");
    }
  }
  useEffect(() => {
    $(".image-gallery span").on("click", (e) => {
      openImage(e);
    });
  }, []);

  return (
    <div className="image-gallery" id={props.id}>
      <span
        class="align-self-center noselect"
        style={{
          backgroundImage: "url('/static/images/resume/gallery_resume_3.png')",
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://buy.iprocode.com/product/bigiseller/"
        >
          <h1 className="detail animate__animated animate__fadeInLeft">
            افزونه وردپرس بیگی سلر
          </h1>
        </a>
      </span>
      <span
        class="align-self-center noselect"
        style={{
          backgroundImage: "url('/static/images/resume/gallery_resume_2.png')",
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://seneginsaffron.ir"
        >
          <h1 className="detail animate__animated animate__fadeInLeft">
            وبسایت سه نگین زعفران
          </h1>
        </a>
      </span>

      <span
        class="align-self-center active noselect"
        style={{
          backgroundImage: "url('/static/images/resume/gallery_resume_1.png')",
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://neelabook.ir"
        >
          <h1 className="detail animate__animated animate__fadeInLeft">
            وبسایت نیلابوک
          </h1>
        </a>
      </span>

      <span
        class="align-self-center noselect"
        style={{
          backgroundImage: "url('/static/images/resume/gallery_resume_4.png')",
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://bigiseller.iprocode.com/"
        >
          <h1 className="detail animate__animated animate__fadeInLeft">
            بیگی سلر ( پنل فروشندگان )
          </h1>
        </a>
      </span>

      <span
        class="align-self-center noselect"
        style={{
          backgroundImage: "url('/static/images/resume/gallery_resume_5.png')",
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://iprocode.com/"
        >
          <h1 className="detail animate__animated animate__fadeInLeft">
            قالب وردپرسی بیگی کالا
          </h1>
        </a>
      </span>

      <span
        class="align-self-center noselect"
        style={{
          backgroundImage: "url('/static/images/resume/gallery_resume_6.png')",
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://buy.iprocode.com/product/bakala-woocommerce-theme/"
        >
          <h1 className="detail animate__animated animate__fadeInLeft">
            قالب وردپرسی باکالا
          </h1>
        </a>
      </span>
    </div>
  );
}

export default ImageGallery;
