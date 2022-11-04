import "../styles/header.scss";

export function Header() {
    return (
        <header>
            <nav className="header-container">
                    <h3>[NOME OU LOGO AQUI]</h3>
                <ul>
                    <li>
                        <a href="">Store</a>
                        </li>
                    <li>
                        <a href="">Library</a>
                    </li>
                    <li>
                        <a href="">Community</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Profile</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}