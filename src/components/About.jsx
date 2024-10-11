const About = () => {
    return (
        <div>
            <h1 className="text-center text-3xl pt-20 text-custom-lighter">About Me</h1>
            <p className="text-custom-lighter text-lg max-w-lg mx-auto text-center pt-4 pb-24 leading-relaxed">
                Hello! My name is Alex Coursey, I am 22 years old, and currently studying Software Development at the
                <a className="px-1 text-custom-lightest hover:underline"
                   href="https://www.ciat.edu/?utm_campaign=BRAND&utm_source=google&utm_medium=cpc&utm_content=Brand&utm_term=ciat&gad_source=1&gclid=Cj0KCQjwpP63BhDYARIsAOQkATawjN9GHxF5lh8a1CtLLu8t_jjfBtrVyR9Gh3ACM5geX-gpncn2VLIaAh22EALw_wcB">
                    California Institute of Applied Technology
                </a>.
                My passion for coding has always been in the Game Development space, however I am expanding my horizons
                to Website Development.
                *talk more about myself*
            </p>
        </div>
    )
}

export default About;