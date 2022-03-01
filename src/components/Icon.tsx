import React from 'react'
import ArrowBackIcon from '../../public/icons/arrowBack.svg'
import ArrowForwardIcon from '../../public/icons/arrowforward.svg'
import BulbIcon from '../../public/icons/bulb.svg'
import CLanguageIcon from '../../public/icons/c.svg'
import CSharpIcon from '../../public/icons/csharp.svg'
import CSSIcon from '../../public/icons/css.svg'
import EmailIcon from '../../public/icons/email.svg'
import ExternalLinkIcon from '../../public/icons/externalLink.svg'
import FlutterIcon from '../../public/icons/flutter.svg'
import GitHubIcon from '../../public/icons/github.svg'
import HTMLICon from '../../public/icons/html.svg'
import JavaIcon from '../../public/icons/java.svg'
import JavascriptIcon from '../../public/icons/javascript.svg'
import LinkedinIcon from '../../public/icons/linkedin.svg'
import NodeJSIcon from '../../public/icons/nodejs.svg'
import PythonIcon from '../../public/icons/python.svg'
import ReactIcon from '../../public/icons/react.svg'
import SqlIcon from '../../public/icons/sql.svg'
import TwitterIcon from '../../public/icons/twitter.svg'

type Props = {
  name: string
  small?: boolean
  noEffect?: boolean
}

export default function Icon({ name, small, noEffect }: Props) {
  var classNames = [
    'icon',
    small && 'icon--small',
    noEffect && 'icon--no-effect'
  ].join(' ')

  return (
    <span className={classNames}>
      {
        {
          arrowBack: <ArrowBackIcon />,
          arrowForward: <ArrowForwardIcon />,
          externalLink: <ExternalLinkIcon />,
          bulb: <BulbIcon />,
          twitter: <TwitterIcon />,
          linkedin: <LinkedinIcon />,
          github: <GitHubIcon />,
          csharp: <CSharpIcon />,
          clanguage: <CLanguageIcon />,
          css: <CSSIcon />,
          flutter: <FlutterIcon />,
          html: <HTMLICon />,
          java: <JavaIcon />,
          javascript: <JavascriptIcon />,
          nodejs: <NodeJSIcon />,
          python: <PythonIcon />,
          react: <ReactIcon />,
          email: <EmailIcon />,
          sql: <SqlIcon />
        }[name]
      }
    </span>
  )
}
