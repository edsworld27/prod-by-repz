"use client";

import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  const mouse = useRef({ x: 0, y: 0 });
  const cursorP = useRef({ x: 0, y: 0 });
  const followerP = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const moveMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Initial binding for existing elements
    const bindInteractions = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], .interactive');
      interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };
    
    bindInteractions();

    let requestId: number;
    const animate = () => {
      // Main Cursor (Fast)
      cursorP.current.x += (mouse.current.x - cursorP.current.x) * 0.2;
      cursorP.current.y += (mouse.current.y - cursorP.current.y) * 0.2;
      
      // Follower (Lagged with Inertia)
      followerP.current.x += (mouse.current.x - followerP.current.x) * 0.1;
      followerP.current.y += (mouse.current.y - followerP.current.y) * 0.1;

      if (cursor) {
        cursor.style.transform = `translate(${cursorP.current.x}px, ${cursorP.current.y}px)`;
      }
      if (follower) {
        follower.style.transform = `translate(${followerP.current.x}px, ${followerP.current.y}px)`;
      }
      
      requestId = requestAnimationFrame(animate);
    };

    requestId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10001,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          willChange: 'transform'
        }}
      />
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '60px' : '32px',
          height: isHovered ? '60px' : '32px',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease',
          backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
          mixBlendMode: 'difference',
          willChange: 'transform'
        }}
      />
    </>
  );
}
