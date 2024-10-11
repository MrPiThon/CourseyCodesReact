const Footer = () => {
    return (
        <footer className={"text-center bottom-0"}>
            {/*<img className="mx-auto mb-2" src="/ssl_trust_seal.png" alt="SSL Trust"></img>*/}
            {/* No longer secured by positiveSSL, now goes through Let's Encrypt, who do not provide an image */}
            <div className="grid-rows-1">
                <p className={"text-sm text-custom-secondary"}>
                    &copy; 2024 Coursey Codes. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;