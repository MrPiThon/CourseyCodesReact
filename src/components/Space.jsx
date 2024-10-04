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

        const drawText = () => {
            ctx.font = '100px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText('MrPiThon', canvas.width / 2, canvas.height / 2);
            ctx.font = '30px Arial';
            ctx.fillText("Coursey.Codes", canvas.width / 2, canvas.height / 2 - 420);
        };

        const animate = () => {
            drawStars();
            drawText();
            requestAnimationFrame(animate);
        };

        initializeStars();
        animate();
    }, []);

    return <canvas ref={canvasRef} id="space"></canvas>;
};

export default Space;