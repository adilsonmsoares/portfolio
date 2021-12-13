// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {  PersonalData } from '@shared/types'
import data from './data.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PersonalData>
) {
  res.status(200).json(data)
}
