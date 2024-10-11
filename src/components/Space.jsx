import { useEffect, useRef } from 'react';

const Space = () => {
    const canvasRef = useRef(null);
    const stars = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const numStars = 500;
        const speed = 2;

        const initializeStars = () => {
            for (let i = 0; i < numStars; i++) {
                stars.current.push({
                    x: (Math.random() - 0.5) * canvas.width,
                    y: (Math.random() - 0.5) * canvas.height,
                    z: Math.random() * canvas.width,
                });
            }
        };

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
            // Pulsing MrPiThon text
            const scale = 1 + 0.2 * Math.sin(time / 500);  // Pulsing effect

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.scale(scale, scale);
            ctx.font = '100px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText('MrPiThon', 0, 0);
            ctx.restore();
        };

        const drawScrollDown = (time) => {
            // Animate the vertical position of the "Scroll Down" text
            const yOffset = 10 * Math.sin(time / 300);  // Up and down movement

            ctx.save();
            ctx.font = '24px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText('⬇ Scroll Down ⬇', canvas.width / 2, canvas.height - 50 + yOffset);
            ctx.restore();
        };

        const animate = (time) => {
            drawStars();
            drawText(time);
            drawScrollDown(time);
            requestAnimationFrame(animate);
        };

        initializeStars();
        animate(0);  // Start animation loop
    }, []);

    return (
        <div className="relative h-screen w-screen">
            <canvas className="absolute top-0 left-0 w-full h-full" ref={canvasRef} id="space"></canvas>
        </div>
    );
};

export default Space;
