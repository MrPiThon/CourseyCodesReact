import Space from "../components/Space.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";

const HomePage = () => {
    return (
        <div>
            <Space/>
            <About/>

            <h1 className="text-center text-custom-lighter md:text-3xl lg:text-3xl sm:text-2xl">Projects</h1>
            <div className="flex lg:flex-row md:flex-row sm:flex-col">
                <ProjectCard
                    title={"Zombie Siege"}
                    description={"A round-based Minecraft Zombie Survival Server chasing the feeling of OG CoD Zombies"}
                    url={"https://discord.gg/jBF5Jb7Cg9"}
                    image="/zombie-siege2.png"
                />
                <ProjectCard
                    title={"A1 Pools"}
                    description={"A website for the A1 Pool Company in the US, not affiliated with the real A1 Pool Company"}
                    url={"https://sunny-stroopwafel-e64f2e.netlify.app/"}
                    image="/A1 Pool Hero Animated.gif"
                />
                <ProjectCard
                    title={"Coursey.Codes"}
                    description={"This website! This was made from scratch with React, Vite, TailwindCSS and Canvas"}
                    url={"https://coursey.codes"}
                    image="/MrPiThon Hero Logo Animated.gif"
                />
            </div>

            <Contact/>
        </div>
    )
}

export default HomePage;