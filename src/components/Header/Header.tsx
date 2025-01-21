import React, { ReactNode } from "react";
import styles from './Header.module.css'

interface headerProps {
    children: ReactNode;
}

const Header: React.FC<headerProps> = ({ children }) => {
    return (
        <header className={styles.header}>{children}</header>
    );
}
 
export default Header;