import React from 'react'
import ArrowBackIcon from '@assets/icons/arrowBack.svg'
import ArrowForwardIcon from '@assets/icons/arrowforward.svg'
import ArrowDownIcon from '@assets/icons/arrowDown.svg'
import ExternalLinkIcon from '@assets/icons/externalLink.svg'
import BulbIcon from '@assets/icons/bulb.svg'
import TwitterIcon from '@assets/icons/twitter.svg'
import LinkedinIcon from '@assets/icons/linkedin.svg'
import GitHub from '@assets/icons/github.svg'

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
          arrowDown: <ArrowDownIcon />,
          externalLink: <ExternalLinkIcon />,
          bulb: <BulbIcon />,
          twitter: <TwitterIcon />,
          linkedin: <LinkedinIcon />,
          github: <GitHub />
        }[name]
      }
    </>
  )
}
