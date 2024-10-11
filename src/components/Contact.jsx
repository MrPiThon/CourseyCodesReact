const Contact = () => {
    return (
        <div className="text-center justify-center py-14">
            <h1 className="text-custom-lighter py-4">Contact Me</h1>
            <div className="flex flex-row justify-center">
                <a className="flex flex-col items-center w-auto px-4 relative group"
                   href="https://discord.gg/5Py2AYHXCc">
                    <img src="/discord.png" alt="Discord Logo" className="mb-2"/>
                    <p className="text-custom-lighter sm:opacity-100 md:opacity-0 lg:opacity-0 group-hover:opacity-100">Discord</p>
                </a>
                <a className="flex flex-col items-center px-4 relative group" href="https://github.com/MrPiThon">
                    <img src="/github.png" alt="GitHub Logo" className="mb-2"/>
                    <p className="text-custom-lighter sm:opacity-100 md:opacity-0 lg:opacity-0 group-hover:opacity-100">GitHub</p>
                </a>
                <a className="flex flex-col items-center px-4 relative group"
                   href="https://www.linkedin.com/in/alex-coursey-80388b298/">
                    <img src="/linkedin.png" alt="LinkedIn Logo" className="mb-2"/>
                    <p className="text-custom-lighter sm:opacity-100 md:opacity-0 lg:opacity-0 group-hover:opacity-100">LinkedIn</p>
                </a>
                <a className="flex flex-col items-center px-4 relative group"
                   href="mailto:alexcoursey33@gmail.com">
                    <img src="/email.png" alt="Email Logo" className="mb-2"/>
                    <p className="text-custom-lighter sm:opacity-100 md:opacity-0 lg:opacity-0 group-hover:opacity-100">Email</p>
                </a>
            </div>
        </div>
    )
}

export default Contact;
