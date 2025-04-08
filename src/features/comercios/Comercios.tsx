import BrownButton from "../../components/BrownButton"
import { MainLayout } from "../../layout"
import styles from "./Comercios.module.css"

export const Comercios = () => {

    return (
        <MainLayout>
            <div className={`${styles.background} py-10`}>
                <div className="container mx-auto w-4/5 max-w-screen-xl px-4">
                    <div className="mt-5">
                        <h1 className={`text-[27pt] font-bold ${styles.title}`}>El buscador de negocios</h1>
                    </div>

                    <div className="mt-2">
                        <h2 className={`${styles.subtitle} font-bold`}>que aceptan crypto</h2>
                    </div>

                    <div className="mt-1">
                        <p className="text-[15pt]">
                            Empieza a usar tus criptomonedas en el mundo real.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex justify-center md:justify-start">
                            <select className="w-full border border-gray-300 rounded-md p-2">
                                <option selected>Sector…</option>
                                <option>Sector 1</option>
                                <option>Sector 2</option>
                            </select>
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <input
                            placeholder="Keyword…"
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <div className="grid grid-cols-2 gap-2 w-full">
                                <BrownButton 
                                    text="Buscar"
                                />
                                <button className={`${styles.viewBtn}`}>
                                    Cambiar vista
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
