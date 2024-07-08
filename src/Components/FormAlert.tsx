export type Alert = {
  message: string,
  error: boolean
}
type AlertaProps = {
  alerta : Alert
}
export function Alerta({alerta} : AlertaProps ) {
  return (
    
    <div className={`${alerta.error ? "bg-red-500" : "bg-green-500" } fixed top-28 md:top-48 p-2 text-center font-bold text-white mb-6 text-xs`} >
      {alerta.message}
    </div>
  )
}