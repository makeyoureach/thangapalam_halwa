import { useEffect, useRef, useState } from "react";
import "./professional.css";
import useVisible from "../../custom_hooks/visible";

const Professional = () => {
  const [value, setValue] = useState(0);

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  let timer;
  const elemref = useRef();
  const isvisble = useVisible(elemref);

  useEffect(() => {
    if (isvisble === true) {
      clearInterval(timer);
      timer = setInterval(() => {
        if (value === 100) {
          clearInterval(timer);
          return;
        }
        setValue((prev) => prev + 1);
      }, 30);

      return () => clearInterval(timer);
    }
  }, [value, isvisble]);

  return (
    <div ref={elemref} className="pro_wrapper">
      {isvisble === true && (
        <>
          {" "}
          <div className="pro_first">
            <h2 style={{ width: "max-content" }}>
              We are Professional at our skills
            </h2>
            <h5>More than 2000+ people trusted us</h5>
          </div>
          <div className="procontainer">
            <div>
              <h1>{value}%</h1>
              <h5>Years of Experience</h5>
            </div>
            <div>
              <h1>{value}%</h1>
              <h5>Customer Support</h5>
            </div>
            <div>
              <h1>{value}%</h1>
              <h5>Happy Clients</h5>
            </div>
            <div>
              <h1>{value}%</h1>
              <h5>Natural Products</h5>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Professional;
