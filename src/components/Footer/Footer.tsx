import React from 'react';
import styles from './Footer.module.css';
import { filterStatus } from '../../types';

interface FooterProps {
    filterStatus: 'all' | 'pending' | 'in progress' | 'done';
    setFilterStatus: React.Dispatch<React.SetStateAction<filterStatus>>;
}

const Footer: React.FC<FooterProps> = ({ filterStatus, setFilterStatus }) => {
    const filters = ['all', 'pending', 'in progress', 'done'] as const;

    return (
        <div className={styles.footer}>
            {filters.map(status => (
                <button
                    key={status}
                    className={`
                        ${styles.filterBtn} 
                        ${filterStatus === status ? styles.active : ''}
                    `}
                    onClick={() => setFilterStatus(status)}
                >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default Footer;
