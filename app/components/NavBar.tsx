
export default function NavBar() {
    const items = ["About", "Projects", "Contact"];
    return (
        <nav className="w-full flex border-b border-gray-300 dark:border-gray-700 justify-center sticky top-0 bg-zinc-50 dark:bg-slate-800 z-10">
            <nav className="flex h-16 px-4 w-300 items-center justify-between">
                <NavBarHome />
                <div className="w-90">
                    <ul className="flex w-80 justify-between">
                        {items.map((item) => (
                            <NavBarItem key={item} page={item}/>
                        ))}
                    </ul>
                </div>
            </nav>
        </nav>
    );
}

function NavBarHome() {
    return (
        <div className="flex w-80 justify-center">
            <a href="/" className="text-2xl font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                Home
            </a>
        </div>
    );
}

function NavBarItem({ page }: { page: string }) {
    return (
        <li>
            <a href={`#${page.toLowerCase()}`} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 w-40">
                {page}
            </a>
        </li>
    );
}