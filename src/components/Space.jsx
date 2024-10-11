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

        // const drawText = () => {
        //     ctx.font = '100px Arial';
        //     ctx.fillStyle = 'white';
        //     ctx.textAlign = 'center';
        //     ctx.fillText('MrPiThon', canvas.width / 2, canvas.height / 2);
        // };

        const animate = () => {
            drawStars();
            // drawText();
            requestAnimationFrame(animate);
        };

        initializeStars();
        animate();
    }, []);

    return (
        <div className="relative h-screen w-screen">
            <canvas className="absolute top-0 left-0 w-full h-full" ref={canvasRef} id="space"></canvas>
            <img
                src="/MrPiThonHeroAnimated.gif"
                alt="MrPiThon Logo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    );
};

export default Space;