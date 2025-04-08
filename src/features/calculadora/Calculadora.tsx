import { MainLayout } from '../../layout';

export const Calculadora = () => {

return (
        <MainLayout>
            <div>
                <div className="flex justify-center mt-5">
                    <p className="text-center">
                    Precio calculado en tiempo real sobre Binance. Actualiza cada 30 segundos
                    </p>
                </div>
            </div>
            <div className="calculadora mt-5">
            <div className="flex justify-center mb-3">
                <div className="w-[10%] px-2">
                <select
                    className="w-full rounded-lg p-2 bg-white text-[#804617] cursor-pointer border border-[#804617] focus:outline-none"
                >
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>
                </div>
                <div className="w-[30%] px-2">
                <input
                    type="text"
                    className="w-full h-12 text-center bg-white border border-[#804617] rounded-lg text-[#804617] focus:outline-none"
                    placeholder="Enter amount"
                />
                </div>
            </div>

            <div className="flex justify-center mt-3">
                <div className="w-[10%  ] px-2">
                <select
                    className="w-full rounded-lg p-2 bg-white text-[#804617] cursor-pointer border border-[#804617] focus:outline-none"
                >
                    <option value="BTC">BTC</option>
                    <optgroup label="Alt coins">
                    <option value="BNB">BNB</option>
                    <option value="ETH">ETH</option>
                    <option value="MATIC">MATIC</option>
                    <option value="AVAX">AVAX</option>
                    <option value="NEAR">NEAR</option>
                    <option value="ROSE">ROSE</option>
                    <option value="IOTA">IOTA</option>
                    <option value="DOGE">DOGE</option>
                    <option value="SHIB">SHIB</option>
                    <option value="SOL">SOL</option>
                    <option value="ADA">ADA</option>
                    <option value="LUNA">LUNA</option>
                    <option value="XRP">XRP</option>
                    <option value="DOT">DOT</option>
                    </optgroup>
                    <optgroup label="Stable coins">
                    <option value="USDT">USDT</option>
                    <option value="DAI">DAI</option>
                    <option value="BUSD">BUSD</option>
                    <option value="USDC">USDC</option>
                    </optgroup>
                </select>
                </div>
                <div className="w-[30%] px-2">
                <input
                    type="text"
                    className="w-full h-12 text-center bg-white border border-[#804617] rounded-lg text-[#804617] focus:outline-none"
                    placeholder="Converted amount"
                    disabled
                />
                </div>
            </div>
            </div>


            <div className="flex flex-wrap justify-center mt-5 crypto-logos">
                <div className="w-1/6 sm:w-1/15 p-2">
                    <img className="logo-crypto" src="src/assets/img/btc-logo.png" alt="BTC Logo" />
                </div>
                <div className="w-1/6 sm:w-1/15 p-2">
                    <img className="logo-crypto" src="src/assets/img/bnb-logo.png" alt="BNB Logo" />
                </div>
                <div className="w-1/6 sm:w-1/15 p-2">
                    <img className="logo-crypto" src="src/assets/img/matic-logo.png" alt="MATIC Logo" />
                </div>
                <div className="w-1/6 sm:w-1/15 p-2">
                    <img className="logo-crypto" src="src/assets/img/eth-logo.png" alt="ETH Logo" />
                </div>
                <div className="w-1/6 sm:w-1/15 p-2">
                    <img className="logo-crypto" src="src/assets/img/iota-logo.png" alt="IOTA Logo" />
                </div>
                <div className="w-1/6 sm:w-1/15 p-2">
                    <img className="logo-crypto" src="src/assets/img/usdt-logo.png" alt="USDT Logo" />
                </div>
                <div className="w-1/6 sm:w-1/15 p-2">
                    <img className="logo-crypto" src="src/assets/img/dai-logo.png" alt="DAI Logo" />
                </div>
                <div className="w-1/6 sm:w-1/15 p-2">
                    <img className="logo-crypto" src="src/assets/img/busd-logo.png" alt="BUSD Logo" />
                </div>
            </div>

        </MainLayout>
    );
};
