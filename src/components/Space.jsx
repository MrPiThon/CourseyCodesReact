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

        const initializeStars = () => {
            stars.current = []; // Reset stars array on initialization
            for (let i = 0; i < numStars; i++) {
                stars.current.push({
                    x: (Math.random() - 0.5) * canvas.width,
                    y: (Math.random() - 0.5) * canvas.height,
                    z: Math.random() * canvas.width,
                });
            }
        };

        // Function to resize canvas to fit the window
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initializeStars(); // Re-initialize stars on resize
        };

        resizeCanvas(); // Initial resize
        window.addEventListener('resize', resizeCanvas); // Adjust canvas on window resize

        const drawStars = () => {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'white';
            stars.current.forEach(star => {
                const k = 128.0 / star.z;
                const px = star.x * k + canvas.width / 2;
                const py = star.y * k + canvas.height / 2;

                if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
                    const size = (1 - star.z / canvas.width) * 2;
                    ctx.fillRect(px, py, size, size);
                }

                star.z -= speed;
                if (star.z <= 0) {
                    star.x = (Math.random() - 0.5) * canvas.width;
                    star.y = (Math.random() - 0.5) * canvas.height;
                    star.z = canvas.width;
                }
            });
        };

        const drawText = (time) => {
            // Adjust font size based on canvas width
            let baseFontSize = canvas.width * 0.1; // 10% of canvas width
            baseFontSize = Math.max(Math.min(baseFontSize, 80), 24); // Clamp font size between 24px and 80px

            // Adjust pulsing effect for mobile devices
            let scale = 1 + 0.2 * Math.sin(time / 500); // Pulsing effect
            if (isMobile()) {
                scale = 1 + 0.1 * Math.sin(time / 500); // Reduce pulsing effect on mobile
            }

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2 - (isMobile() ? 30 : 0)); // Move text up slightly on mobile
            ctx.scale(scale, scale);
            ctx.font = `${baseFontSize}px Arial`;
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle'; // Center vertically
            ctx.fillText('MrPiThon', 0, 0);
            ctx.restore();
        };

        const drawScrollDown = (time) => {
            // Adjust font size based on canvas width
            let baseFontSize = canvas.width * 0.03; // 3% of canvas width
            baseFontSize = Math.max(Math.min(baseFontSize, 24), 12); // Clamp font size between 12px and 24px

            // Animate the vertical position of the "Scroll Down" text
            const yOffset = 10 * Math.sin(time / 300); // Up and down movement

            ctx.save();
            ctx.font = `${baseFontSize}px Arial`;
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            // Adjust position for mobile devices
            let textYPosition = canvas.height - baseFontSize + yOffset - 10;
            if (isMobile()) {
                textYPosition = canvas.height - baseFontSize - 70 + yOffset; // Move text up by 70 pixels on mobile
            }

            ctx.fillText('⬇ Scroll Down ⬇', canvas.width / 2, textYPosition);
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
