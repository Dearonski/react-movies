function Footer() {
    return (
        <footer className="bg-purple-600 h-[7vh]">
            <div className="p-4">
                <div className="text-white flex justify-center text-1xl">
                    © {new Date().getFullYear()} Copyright Text
                </div>
            </div>
        </footer>
    );
}

export { Footer };
