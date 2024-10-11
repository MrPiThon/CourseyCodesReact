const Contact = () => {
    return (
        <div className="text-center justify-center py-14">
            <h1 className="text-custom-lighter py-4">Contact Me</h1>
            <div className="flex flex-row justify-center">
                <a className="flex flex-col items-center w-auto px-4 relative group"
                   href="https://discord.gg/5Py2AYHXCc">
                    <img src="/discord.png" alt="Discord Logo" className="mb-2"/>
                    <p className="text-custom-lighter opacity-0 group-hover:opacity-100">Discord</p>
                </a>
                <a className="flex flex-col items-center px-4 relative group" href="https://github.com/MrPiThon">
                    <img src="/github.png" alt="GitHub Logo" className="mb-2"/>
                    <p className="text-custom-lighter opacity-0 group-hover:opacity-100">GitHub</p>
                </a>
                <a className="flex flex-col items-center px-4 relative group"
                   href="https://www.linkedin.com/in/alex-coursey-80388b298/">
                    <img src="/linkedin.png" alt="LinkedIn Logo" className="mb-2"/>
                    <p className="text-custom-lighter opacity-0 group-hover:opacity-100">LinkedIn</p>
                </a>
            </div>

            {/* Netlify Form */}
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="flex flex-col items-center py-8"
            >
                <input type="hidden" name="form-name" value="contact" />
                <div className="mb-4">
                    <label className="block text-custom-lighter mb-2" htmlFor="name">
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="border border-gray-300 px-4 py-2 rounded-md w-64"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-custom-lighter mb-2" htmlFor="email">
                        Your Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="border border-gray-300 px-4 py-2 rounded-md w-64"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-custom-lighter mb-2" htmlFor="message">
                        Your Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        className="border border-gray-300 px-4 py-2 rounded-md w-64 h-32"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-md"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;
