export default function useData<T>(filename: string) {
  var data = require(`@shared/data/${filename}`) as T

  return data
}
