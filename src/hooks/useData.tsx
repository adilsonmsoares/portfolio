export default function useData<T>(filename: string) {
  var data: T = require(`@shared/data/${filename}`) as T

  return data
}
