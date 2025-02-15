"use client";
import Link from 'next/link';
import styles from './header.module.css';
import { Button } from './Button'; // Adjust the path based on your structure
import { useState, useEffect } from 'react';
import Dropdown from './Dropdown/Dropdown'; // Adjust the path based on your structure

export default function Header() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header className="flex justify-between items-center min-h-[10vh]">
      <div className="flex-grow flex justify-center">
        <nav className={`${styles.navLinks} shadow-md rounded-[50px] flex items-center space-x-6 border border-gray-600`} style={{ backgroundColor: 'var(--navbar-bg)' }}>
        <Link href="/" legacyBehavior>
  <a
    className={`${styles.navLink} ${activeLink === '/' ? 'text-teal-500 font-bold border-green-500' : ''}`}
    onClick={() => handleLinkClick('/')}
  >
    Home
  </a>
</Link>
<Link href="/about" legacyBehavior>
  <a
    className={`${styles.navLink} ${activeLink === '/about' ? 'text-teal-500 font-bold border-green-500' : ''}`}
    onClick={() => handleLinkClick('/about')}
  >
    About
  </a>
</Link>

          <Link href="/projects" legacyBehavior>
            <a className={`${styles.navLink} `}>Projects</a>
          </Link>
          <Link href="/uses" legacyBehavior>
            <a className={`${styles.navLink} `}>Uses</a>
          </Link>
        </nav>
        <div className={`${styles.dropdownMenu}`}>
          <Dropdown
            onPreview={() => console.log('Preview')}
            onEdit={() => console.log('Edit')}
            onClone={() => console.log('Clone')}
            onDelete={() => console.log('Delete')}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <nav className="p-3 shadow-md rounded-[25px] flex items-center space-x-6 mr-8" style={{ backgroundColor: 'var(--navbar-bg)' }}>
          <button onClick={toggleTheme} className={`${styles.themeToggle} text-gray-900 dark:text-gray-100`} style={{ backgroundColor: 'var(--button-bg)' }}>
            {theme === 'dark' ? '🌙' : '🌞'}
          </button>
        </nav>
      </div>
      {/* <Button onClick={() => alert('Button clicked!')} style={{ backgroundColor: 'var(--button-bg)' }}>Click Me!</Button> */}
    </header>
  );
}
