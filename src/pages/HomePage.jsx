import Space from "../components/Space.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";

const HomePage = () => {
    return (
        <div className={"cursor-default"}>
            <Space/>
            <About/>
            <h1 className="text-center text-custom-lighter md:text-3xl lg:text-3xl sm:text-2xl">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProjectCard
                    title={"Zombie Siege"}
                    description={"A round-based Minecraft Zombie Survival Server chasing the feeling of OG CoD Zombies"}
                    url={"https://discord.gg/jBF5Jb7Cg9"}
                    image="/zombie-siege2.png"
                />
                <ProjectCard
                    title={"A1 Pools"}
                    description={"A website for the A1 Pool Company in the US. Created with Vite/React"}
                    url={"https://a1-pools.netlify.app/"}
                    image="/A1 Pool Hero Animated.gif"
                />
                <ProjectCard
                    title={"Coursey.Codes"}
                    description={"This website! This was made from scratch with React, Vite, TailwindCSS and Canvas"}
                    url={"https://coursey.codes"}
                    image="/CourseyCodesLogo.png"
                />
                <ProjectCard
                    title={"PyColonies"}
                    description={"A website made for a fictional modpack website, created using WordPress"}
                    url={"https://mrpithon.wordpress.com"}
                    image="/PyColonies.png"
                />
            </div>
            <Contact/>
        </div>
    )
}

export default HomePage;