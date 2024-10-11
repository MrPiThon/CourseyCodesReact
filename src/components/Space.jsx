import { useEffect, useRef } from 'react';

const Space = () => {
    const canvasRef = useRef(null);
    const stars = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const numStars = 500;
        const speed = 2;

        // Function to detect if the device is mobile
        const isMobile = () => {
            return window.innerWidth <= 768; // Adjust breakpoint as needed
        };

        // Function to adjust canvas for device pixel ratio
        const adjustCanvasForDPR = () => {
            const dpr = window.devicePixelRatio || 1;

            // Set canvas size in CSS pixels
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            // Set canvas size in actual pixels
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;

            // Scale the context to ensure correct drawing operations
            ctx.scale(dpr, dpr);
        };

        // Function to resize canvas to fit the window
        const resizeCanvas = () => {
            adjustCanvasForDPR(); // Adjust for device pixel ratio
            initializeStars(); // Re-initialize stars on resize
        };

        const initializeStars = () => {
            stars.current = []; // Reset stars array on initialization
            for (let i = 0; i < numStars; i++) {
                stars.current.push({
                    x: (Math.random() - 0.5) * window.innerWidth,
                    y: (Math.random() - 0.5) * window.innerHeight,
                    z: Math.random() * window.innerWidth,
                });
            }
        };

        resizeCanvas(); // Initial resize
        window.addEventListener('resize', resizeCanvas); // Adjust canvas on window resize

        const drawStars = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            ctx.fillStyle = 'white';
            stars.current.forEach(star => {
                const k = 128.0 / star.z;
                const px = star.x * k + window.innerWidth / 2;
                const py = star.y * k + window.innerHeight / 2;

                if (px >= 0 && px <= window.innerWidth && py >= 0 && py <= window.innerHeight) {
                    const size = (1 - star.z / window.innerWidth) * 2;
                    ctx.fillRect(px, py, size, size);
                }

                star.z -= speed;
                if (star.z <= 0) {
                    star.x = (Math.random() - 0.5) * window.innerWidth;
                    star.y = (Math.random() - 0.5) * window.innerHeight;
                    star.z = window.innerWidth;
                }
            });
        };

        const drawText = (time) => {
            // Adjust font size based on window width
            let baseFontSize = window.innerWidth * 0.1; // 10% of window width
            baseFontSize = Math.max(Math.min(baseFontSize, 80), 24); // Clamp font size between 24px and 80px

            // Adjust pulsing effect for mobile devices
            let scale = 1 + 0.2 * Math.sin(time / 500); // Pulsing effect
            if (isMobile()) {
                scale = 1 + 0.1 * Math.sin(time / 500); // Reduce pulsing effect on mobile
            }

            ctx.save();
            ctx.translate(window.innerWidth / 2, window.innerHeight / 2 - (isMobile() ? 30 : 0)); // Move text up slightly on mobile
            ctx.scale(scale, scale);
            ctx.font = `${baseFontSize}px Arial`;
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle'; // Center vertically
            ctx.fillText('MrPiThon', 0, 0);
            ctx.restore();
        };

        const drawScrollDown = (time) => {
            // Adjust font size based on window width
            let baseFontSize = window.innerWidth * 0.03; // 3% of window width
            baseFontSize = Math.max(Math.min(baseFontSize, 24), 12); // Clamp font size between 12px and 24px

            // Animate the vertical position of the "Scroll Down" text
            const yOffset = 10 * Math.sin(time / 300); // Up and down movement

            ctx.save();
            ctx.font = `${baseFontSize}px Arial`;
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            // Adjust position for mobile devices
            let textYPosition = window.innerHeight - baseFontSize + yOffset - 10;
            if (isMobile()) {
                textYPosition = window.innerHeight - baseFontSize - 70 + yOffset; // Move text up by 70 pixels on mobile
            }

            ctx.fillText('⬇ Scroll Down ⬇', window.innerWidth / 2, textYPosition);
            ctx.restore();
        };

        const animate = (time) => {
            drawStars();
            drawText(time);
            drawScrollDown(time);
            requestAnimationFrame(animate);
        };

        initializeStars();
        animate(0); // Start animation loop

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <div className="relative h-screen w-screen">
            <canvas
                className="absolute top-0 left-0 w-full h-full"
                ref={canvasRef}
                id="space"
            ></canvas>
        </div>
    );
};

export default Space;
