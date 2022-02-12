export default function useData<T>(filename: string): T {
  var data: T = require(`@shared/data/${filename}`)

  return data
}
