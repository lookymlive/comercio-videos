
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <Button asChild variant="link">
        <Link href="/auth/login">Iniciar Sesión</Link>
      </Button>
      <Button asChild variant="link">
        <Link href="/auth/register">Registrarse</Link>
      </Button>
      <Button asChild variant="link">
        <Link href="/subir">Subir Video</Link>
      </Button>
      <Button asChild variant="link">
        <Link href="/explorar">Explorar Videos</Link>
      </Button>

    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-8">
          Bienvenido a <span className="text-blue-600">Lookym</span>
        </h1>
        <p className="text-xl mb-8">
          Descubre los mejores escaparates de tiendas en video
        </p>
       
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="/subir">Subir Video</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/mis-videos">Mis Videos</Link>
            </Button>
          </div>
       
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="/explorar">Explorar Videos</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/favoritos">Mis Favoritos</Link>
            </Button>
          </div>
        
      </main>
    </div>
    </>
  )
}
     