import ArrowBackIcon from '@assets/icons/arrowBack.svg'
import ArrowForwardIcon from '@assets/icons/arrowforward.svg'
import BulbIcon from '@assets/icons/bulb.svg'
import CLanguageIcon from '@assets/icons/c.svg'
import CSharpIcon from '@assets/icons/csharp.svg'
import CSSIcon from '@assets/icons/css.svg'
import EmailIcon from '@assets/icons/email.svg'
import ExternalLinkIcon from '@assets/icons/externalLink.svg'
import FlutterIcon from '@assets/icons/flutter.svg'
import GitHubIcon from '@assets/icons/github.svg'
import HTMLICon from '@assets/icons/html.svg'
import JavaIcon from '@assets/icons/java.svg'
import JavascriptIcon from '@assets/icons/javascript.svg'
import LinkedinIcon from '@assets/icons/linkedin.svg'
import NodeJSIcon from '@assets/icons/nodejs.svg'
import PythonIcon from '@assets/icons/python.svg'
import ReactIcon from '@assets/icons/react.svg'
import SqlIcon from '@assets/icons/sql.svg'
import TwitterIcon from '@assets/icons/twitter.svg'
import React from 'react'

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
