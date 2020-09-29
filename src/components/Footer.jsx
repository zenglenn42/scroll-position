import React from 'react'
import { FaGithubAlt as GithubIcon } from 'react-icons/fa'
import { BsFillBriefcaseFill as PortfolioIcon } from 'react-icons/bs'
import '../App.css'

export default () => {
  return (
    <footer className="footer">
      <span>Incremental Industries &copy; 2020</span>
      <span className="grow1x"></span>
      <a
        className="footerButton"
        href="https://zenglenn42.github.io/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="portfolio"
      >
        <PortfolioIcon />
      </a>
      <a
        className="footerButton"
        href="https://github.com/zenglenn42/scroll-position/blob/master/README.md"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github"
      >
        <GithubIcon />
      </a>
    </footer>
  )
}
