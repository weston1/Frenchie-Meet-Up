import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const Slider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      }
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img
          src="https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1920/https://images.ctfassets.net/mmeshd7gafk1/3Q7WPipZLnoT4iOpICXHKg/1d7474b74bd2d627283b3723c4fe2b59/US-Accessories-Carousel_Desktop2.png"
          className="img--fluid"
          alt="Lorem Ipsum"
        />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img
          src="https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=1920/https://images.ctfassets.net/mmeshd7gafk1/3Q7WPipZLnoT4iOpICXHKg/1d7474b74bd2d627283b3723c4fe2b59/US-Accessories-Carousel_Desktop2.png"
          className="img--fluid"
          alt="Lorem Ipsum"
        />
      </div>
    </div>
  );
};

export default Slider;
