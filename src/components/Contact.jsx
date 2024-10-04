const Contact = () => {
    return (
        <div className="text-center justify-center py-14">
            <h1 className="text-3xl pb-8 text-custom-lighter">Contact Me</h1>
            <div className="flex flex-row justify-center">
                <a className="px-4" href="https://discord.gg/5Py2AYHXCc">
                    <img src="/discord.png" alt="Discord Logo"/></a>
                <a className="px-4" href="https://github.com/MrPiThon">
                    <img src="/github.png" alt="GitHub Logo"/></a>
                <a className="px-4" href="https://www.linkedin.com/in/alex-coursey-80388b298/">
                    <img src="/linkedin.png" alt="LinkedIn Logo"/></a>
            </div>
        </div>
    )
}

export default Contact;