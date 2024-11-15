'use client';
import { useEffect } from "react";
import interact from "interactjs";

const Draggable = () => {
  useEffect(() => {
    // Initialize Interact.js after the component has been mounted
    interact(".draggable").draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: "parent",
          endOnly: true,
        }),
      ],
      autoScroll: true,
      listeners: {
        move: dragMoveListener,
        end(event) {
          const textEl = event.target.querySelector("p");
          if (textEl) {
            textEl.textContent = `Moved ${(
              Math.sqrt(
                Math.pow(event.pageX - event.x0, 2) +
                  Math.pow(event.pageY - event.y0, 2)
              ) | 0
            ).toFixed(2)}px`;
          }
        },
      },
    });

    function dragMoveListener(event) {
      const target = event.target;
      const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
      const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

      target.style.transform = `translate(${x}px, ${y}px)`;
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    }
  }, []);

  return (
    <div style={{width:"100%", height:"100%"}}>
      <div
        id="drag-1"
        className="draggable"
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "lightblue",
          margin: "10px",
          textAlign: "center",
          lineHeight: "150px",
        }}
      >
        <p>Drag me!</p>
      </div>
      <div
        id="drag-2"
        className="draggable"
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "lightgreen",
          margin: "10px",
          textAlign: "center",
          lineHeight: "150px",
        }}
      >
        <p>Drag me too!</p>
      </div>
    </div>
  );
};

export default Draggable;





