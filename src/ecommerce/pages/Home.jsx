import { Link } from "react-router-dom"


export const Home = () => {


  return (
    <>
      <section className="w-full h-[170px] flex flex-col items-center relative lg:h-[416px]">
        <div className='w-full h-full lg:w-4/5 lg:h-full flex items-center justify-center'>
          <img src="https://http2.mlstatic.com/D_NQ_976024-MLA73829475095_012024-OO.webp" alt="" className="object-cover h-full w-11/12 mt-2 rounded-md lg:rounded-none lg:mt-0" />
        </div>
        <div className='w-full h-[60px] hidden absolute left-0  bg-gradient-to-t from-[#ebebeb] blur-x lg:left-[10%] bottom-0 lg:inline-block'></div>
          {/* <button className="w-10 h-10 bg-gray-950 absolute left-0 top-[calc(50%-20px)]"></button>
          <button className="w-10 h-10 bg-gray-950 absolute right-0 top-[calc(50%-20px)]"></button> */}
      </section>
      <div className='w-full container flex items-center justify-center mt-3'>
          <div className="w-11/12 h-6 rounded-md bg-white shadow-sm flex items-center justify-center">
            <span className="text-xs">Con el codigo <span className='font-semibold text-actions-success'>CONTRATADO</span> obten 20% de descuento</span>
          </div>
      </div>
      <section className="w-full flex items-center justify-center pt-5">
          <ul className="w-11/12 flex justify-between">
            <li className='text-center'>
              <div className="bg-white w-14 h-14 rounded-full">
                <img src="https://i.imgur.com/rTC4WrP.png" alt="" />
              </div>
              <span className="text-xs first-letter:uppercase text-gray-500">Hogar</span>
            </li>
            <li className='text-center'>
              <div className="bg-white w-14 h-14 rounded-full">
                <img src="https://i.imgur.com/rTC4WrP.png" alt="" />
              </div>
              <span className="text-xs first-letter:uppercase text-gray-500">Hogar</span>
            </li>
            <li className='text-center'>
              <div className="bg-white w-14 h-14 rounded-full">
                <img src="https://i.imgur.com/rTC4WrP.png" alt="" />
              </div>
              <span className="text-xs first-letter:uppercase text-gray-500">Hogar</span>
            </li>
            <li className='text-center'>
              <div className="bg-white w-14 h-14 rounded-full">
                <img src="https://i.imgur.com/rTC4WrP.png" alt="" />
              </div>
              <span className="text-xs first-letter:uppercase text-gray-500">Hogar</span>
            </li>
            <li className='text-center'>
              <div className="bg-white w-14 h-14 rounded-full">
                <img src="https://i.imgur.com/rTC4WrP.png" alt="" />
              </div>
              <span className="text-xs first-letter:uppercase text-gray-500">Hogar</span>
            </li>
          </ul>
      </section>
      <section className="container w-full flex items-center justify-center pt-5">
          <ul className="w-11/12 flex justify-between overflow-hidden">
            {
              [...Array(2).keys()].map((item, i) => (
                <li key={i} className="w-36 max-w-[136px] h-[195px] rounded-md p-3 bg-white flex flex-col items-center justify-between">
                  <div className="text-center flex flex-col items-center">
                    <svg class="ui-homes-icon ui-homes-icon--da-low-price-products font-color--HOME-DA-NEW-LOWPRICEPRODUCTS" width="98" height="88" viewBox="0 0 98 88" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_850_12)"><path fill-rule="evenodd" clip-rule="evenodd" d="M82.4149 46.145C84.7016 24.4893 78.3311 18.7834 73.7945 16.0797C69.3476 13.4296 62.5536 14.2767 57.1684 18.1607C51.2564 22.4251 47.822 24.034 42.6185 24.677C37.6487 25.2911 28.1335 23.6111 21.3885 30.9049C13.2897 39.6616 12.7171 51.4863 18.1463 60.9378C24.2131 71.5 38.5035 81.9721 56.1077 78.8401C73.7114 75.7078 81.1816 57.8255 82.4149 46.145Z" fill="black" fill-opacity="0.04"></path><path d="M69.0186 30.4998C69.0186 33.0431 68.56 35.4771 67.7226 37.7205C67.5448 38.1967 67.35 38.6644 67.1388 39.1227C66.9746 39.479 66.8005 39.8297 66.617 40.1744C66.2956 40.7778 65.9452 41.3627 65.5675 41.9271C65.2444 42.4099 64.9015 42.8777 64.5399 43.3293C64.2507 43.6904 63.9496 44.0412 63.6372 44.381C60.0086 48.3271 54.8512 50.7922 49.1294 50.7922C40.6377 50.7922 33.3889 45.3626 30.5362 37.7205C30.407 37.3744 30.2868 37.0237 30.176 36.6688C30.0321 36.2083 29.9039 35.7407 29.7921 35.2666C29.4313 33.7378 29.2402 32.1416 29.2402 30.4998C29.2402 19.2927 38.1449 10.2075 49.1294 10.2075C60.1139 10.2075 69.0186 19.2927 69.0186 30.4998Z" fill="white"></path><path d="M29.7911 35.2666C29.4304 33.7378 29.2393 32.1416 29.2393 30.4998C29.2393 19.2927 38.1439 10.2075 49.1284 10.2075C60.1129 10.2075 69.0176 19.2927 69.0176 30.4998C69.0176 33.0431 68.559 35.4771 67.7216 37.7205M30.5352 37.7205C33.3879 45.3626 40.6367 50.7922 49.1284 50.7922C54.8502 50.7922 60.0077 48.3271 63.6362 44.381M66.616 40.1744C66.2947 40.7778 65.9442 41.3627 65.5665 41.9271" stroke="#333333" stroke-width="1.5"></path><path d="M62.491 30.5004C62.491 38.0756 56.4799 44.1648 49.1278 44.1648C41.7758 44.1648 35.7646 38.0756 35.7646 30.5004C35.7646 22.9252 41.7758 16.8359 49.1278 16.8359C56.4799 16.8359 62.491 22.9252 62.491 30.5004Z" fill="#FFE600" stroke="white" stroke-width="3"></path><path d="M52.9224 26.321C52.3753 25.0704 51.1413 24.3008 48.9809 24.3008C46.718 24.3008 45.0366 25.5874 45.0366 27.4734C45.0366 29.811 46.4081 30.2845 48.4909 30.8423C48.6222 30.8786 48.7534 30.9147 48.8837 30.9511L49.143 31.0245C50.8193 31.5061 52.9224 31.9727 53.1076 33.8486C53.2927 35.7244 51.8185 37.3957 48.8306 37.3888C46.718 37.3839 44.9333 36.3815 44.6133 34.7986" stroke="#333333" stroke-width="1.5"></path><path d="M49.045 21.9902V24.299" stroke="#333333" stroke-width="1.5"></path><path d="M49.045 37.5483V39.8571" stroke="#333333" stroke-width="1.5"></path><ellipse cx="49.1278" cy="30.4989" rx="14.8632" ry="15.1644" stroke="#333333" stroke-width="1.5"></ellipse><mask id="path-9-inside-1_850_12" fill="white"><rect x="32.4062" y="70.3394" width="39.7783" height="7.97261" rx="0.698839"></rect></mask><rect x="32.4062" y="70.3394" width="39.7783" height="7.97261" rx="0.698839" fill="white" stroke="white" stroke-width="2.79536" mask="url(#path-9-inside-1_850_12)"></rect><rect x="32.4062" y="70.3394" width="39.7783" height="7.97261" rx="0.698839" stroke="#333333" stroke-width="1.5"></rect><mask id="path-11-inside-2_850_12" fill="white"><rect x="26.0723" y="62.3677" width="39.7783" height="7.97262" rx="0.698839"></rect></mask><rect x="26.0723" y="62.3677" width="39.7783" height="7.97262" rx="0.698839" fill="white" stroke="white" stroke-width="2.79536" mask="url(#path-11-inside-2_850_12)"></rect><rect x="26.0723" y="62.3677" width="39.7783" height="7.97262" rx="0.698839" stroke="#333333" stroke-width="1.5"></rect><mask id="path-13-inside-3_850_12" fill="white"><rect x="30.2949" y="54.395" width="39.7783" height="7.97261" rx="0.698839"></rect></mask><rect x="30.2949" y="54.395" width="39.7783" height="7.97261" rx="0.698839" fill="white" stroke="white" stroke-width="2.79536" mask="url(#path-13-inside-3_850_12)"></rect><rect x="30.2949" y="54.395" width="39.7783" height="7.97261" rx="0.698839" stroke="#333333" stroke-width="1.5"></rect><line x1="31.2275" y1="64.23" x2="31.2275" y2="68.479" stroke="#333333" stroke-width="1.5"></line><line x1="37.209" y1="64.2305" x2="37.209" y2="68.4795" stroke="#333333" stroke-width="1.5"></line><line x1="43.1885" y1="64.2305" x2="43.1885" y2="68.4795" stroke="#333333" stroke-width="1.5"></line><line x1="49.1689" y1="64.2305" x2="49.1689" y2="68.4795" stroke="#333333" stroke-width="1.5"></line><line x1="55.1494" y1="64.2305" x2="55.1494" y2="68.4795" stroke="#333333" stroke-width="1.5"></line><line x1="61.1299" y1="64.2305" x2="61.1299" y2="68.4795" stroke="#333333" stroke-width="1.5"></line><line x1="37.5635" y1="72.2187" x2="37.5635" y2="76.4678" stroke="#333333" stroke-width="1.5"></line><line x1="43.5439" y1="72.2197" x2="43.5439" y2="76.4688" stroke="#333333" stroke-width="1.5"></line><line x1="49.5244" y1="72.2197" x2="49.5244" y2="76.4688" stroke="#333333" stroke-width="1.5"></line><line x1="55.5059" y1="72.2197" x2="55.5059" y2="76.4688" stroke="#333333" stroke-width="1.5"></line><line x1="61.4854" y1="72.2197" x2="61.4854" y2="76.4688" stroke="#333333" stroke-width="1.5"></line><line x1="67.4668" y1="72.2197" x2="67.4668" y2="76.4688" stroke="#333333" stroke-width="1.5"></line><line x1="35.4512" y1="56.2446" x2="35.4512" y2="60.4937" stroke="#333333" stroke-width="1.5"></line><line x1="41.4316" y1="56.2461" x2="41.4316" y2="60.4951" stroke="#333333" stroke-width="1.5"></line><line x1="47.4121" y1="56.2461" x2="47.4121" y2="60.4951" stroke="#333333" stroke-width="1.5"></line><line x1="53.3926" y1="56.2461" x2="53.3926" y2="60.4951" stroke="#333333" stroke-width="1.5"></line><line x1="59.373" y1="56.2461" x2="59.373" y2="60.4951" stroke="#333333" stroke-width="1.5"></line><line x1="65.3525" y1="56.2461" x2="65.3525" y2="60.4951" stroke="#333333" stroke-width="1.5"></line><ellipse cx="68.1599" cy="20.1886" rx="9.43433" ry="9.46494" fill="white" stroke="#333333" stroke-width="1.5"></ellipse><path d="M68.0375 14.229V25.0218M64.3154 21.0972L68.0381 25.0206L71.7608 21.0972" stroke="#333333" stroke-width="1.5"></path></g><defs><clipPath id="clip0_850_12"><rect width="97" height="87" fill="white" transform="translate(0.733398 0.881836)"></rect></clipPath></defs></svg>
                      <span className="text-xs font-semibold text-actions-success uppercase">menos de $40.000</span>
                      <p className='w-full text-xs text-ellipsis first-letter:uppercase'>descubre productos con precios bajos</p>
                  </div>
                  <div className="w-full">
                      <button className='w-full h-6 flex items-center justify-center rounded-sm font-semibold text-xs text-white bg-actions-success'>
                        <p className='first-letter:uppercase'> mostrar productos</p>
                      </button>
                  </div>
                </li>
              ))
            }
          </ul>
      </section>
      <section className="container flex items-center justify-center pt-5">
          <div className='w-11/12 p-3 bg-white rounded-md flex flex-col items-center'>
              <p className='py-4 text-lg font-semibold'>¡Crea una cuenta y mejora tu experiencia!</p>
              <div className="w-full">
                <button className='p-3 w-full bg-actions-success rounded-md font-semibold text-white'>
                  Crear cuenta
                </button>
                <div className="py-5 flex items-center justify-center gap-2 font-light">
                  ¿Ya tienes una cuenta? <Link className='first-letter:uppercase text-actions-success'>ingresar</Link>
                </div>
              </div>
          </div>
      </section>
      <div className='container flex items-center justify-center pt-5'>
          <div className='w-11/12 h-[160px] flex items-center rounded-md bg-white shadow-md overflow-hidden'>
            <div className="w-7/12 h-full p-3 flex flex-col justify-between">
              <div>
                <p className='uppercase text-[10px] tracking-[2.5px]'>¡aprovecha!</p>
                <p className='uppercase text-wrap font-semibold'>descuentazos unicos</p>
              </div>
              <Link className='text-actions-success text-sm font-semibold'>Ver más</Link>
            </div>
            <div className='w-5/12 h-full'>
              <img src="https://i.imgur.com/C3wIFiE.jpg" alt="" className="h-full object-cover" />
            </div>
          </div>
      </div>
      <section className="container flex flex-col items-center justify-center pt-5">
        <h3 className="w-11/12 text-left first-letter:uppercase text-lg font-semibold mb-2 indent-1">belleza y cuidado</h3>
        <ul className='w-11/12 h-96 grid grid-cols-2 grid-rows-2 gap-3'>
            <li className='w-full h-full'>
              <div className='h-[90%] bg-white rounded-md overflow-hidden'>
                <img src="https://i.imgur.com/xrolePX.jpg" alt="" />
              </div>
              <Link className='indent-1'>
                <p className='text-sm first-letter:uppercase'>cosmeticos</p>
              </Link>
            </li>
            <li className='w-full h-full'>
              <div className='h-[90%] bg-white rounded-md overflow-hidden'>
                <img src="https://i.imgur.com/xrolePX.jpg" alt="" />
              </div>
              <Link className='indent-1'>
                <p className='text-sm first-letter:uppercase'>cosmeticos</p>
              </Link>
            </li>
            <li className='w-full h-full'>
              <div className='h-[90%] bg-white rounded-md overflow-hidden'>
                <img src="https://i.imgur.com/xrolePX.jpg" alt="" />
              </div>
              <Link className='indent-1'>
                <p className='text-sm first-letter:uppercase'>cosmeticos</p>
              </Link>
            </li>
            <li className='w-full h-full'>
              <div className='h-[90%] bg-white rounded-md overflow-hidden'>
                <img src="https://i.imgur.com/xrolePX.jpg" alt="" />
              </div>
              <Link className='indent-1'>
                <p className='text-sm first-letter:uppercase'>cosmeticos</p>
              </Link>
            </li>
        </ul>
      </section>
      <section className='container flex items-center justify-center pt-5'>
        <div className='w-11/12 flex flex-col gap-[2px] rounded-md overflow-hidden'>
          <div className='bg-white w-full py-3 px-4'>
            <p className='text-sm font-semibold first-letter:uppercase'>ofertas</p>
          </div>
          <ul className='w-full bg-white flex flex-col gap-1'>
            <li className='w-full h-28 flex'>
              <div className='w-2/5 h-full'>
                <img src='https://i.imgur.com/kXM6Y3t.jpg' alt="" className='object-cover h-full'/>
              </div>
              <div className='w-3/5 h-full flex flex-col py-2 px-1 relative'>
                <Link className='text-xs capitalize'>Lorem ipsum dolor sit amet consectetur</Link>
                <div className='flex gap-2'>
                  <p className='text-lg'>$ 14.900</p>
                  <p className='text-xs font-bold text-actions-discount'>30% OFF</p>
                </div>
              </div>
            </li>
          </ul>
          <div className='bg-white w-full py-3 px-4 flex items-center'>
            <Link className='text-xs text-actions-success font-semibold'>
              <p className='first-letter:uppercase'>ver más ofertas</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
