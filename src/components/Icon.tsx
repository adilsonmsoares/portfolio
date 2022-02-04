import React from 'react'
import ArrowBackIcon from '@assets/icons/arrowBack.svg'
import ArrowForwardIcon from '@assets/icons/arrowforward.svg'
import ExternalLinkIcon from '@assets/icons/externalLink.svg'
import BulbIcon from '@assets/icons/bulb.svg'
import TwitterIcon from '@assets/icons/twitter.svg'
import LinkedinIcon from '@assets/icons/linkedin.svg'
import GitHubIcon from '@assets/icons/github.svg'
import CSharpIcon from '@assets/icons/csharp.svg'
import CLanguageIcon from '@assets/icons/c.svg'
import CSSIcon from '@assets/icons/css.svg'
import FlutterIcon from '@assets/icons/flutter.svg'
import HTMLICon from '@assets/icons/html.svg'
import JavaIcon from '@assets/icons/java.svg'
import JavascriptIcon from '@assets/icons/javascript.svg'
import NodeJSIcon from '@assets/icons/nodejs.svg'
import PythonIcon from '@assets/icons/python.svg'
import ReactIcon from '@assets/icons/react.svg'
import SendIcon from '@assets/icons/send.svg'
import SqlIcon from '@assets/icons/sql.svg'

type Props = {
  name: string
}

export default function Icon({ name }: Props) {
  return (
    <>
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
          send: <SendIcon />,
          sql: <SqlIcon />
        }[name]
      }
    </>
  )
}
