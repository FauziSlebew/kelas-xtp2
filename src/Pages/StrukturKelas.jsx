"use client"

import { useEffect, useState } from "react"
import BorderStruktur from "../components/BorderStruktur"
import AOS from "aos"
import "aos/dist/aos.css"

const StrukturKelas = () => {
  const [aosLoaded, setAosLoaded] = useState(false)

  useEffect(() => {
    if (!aosLoaded) {
      AOS.init()
      AOS.refresh()
      setAosLoaded(true)
    }
  }, [aosLoaded])

  return (
    <div className="z-1 relative h-auto lg:overflow-hidden">
      {/* wali kelas */}
      <div data-aos="fade-up" data-aos-duration="500" className="mt-14 md:mt-10 flex justify-center">
        <BorderStruktur Jabatan="Wali Kelas" Nama="Fathurrahman, S.Pd." Width="150px" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="LineVertikal.svg" alt="" data-aos="fade-up" data-aos-duration="550" />

        <div className="lg:flex">
          <img
            src="LineHorizontal.svg"
            alt=""
            className="relative top-[-1rem]"
            data-aos="fade-up"
            data-aos-duration="600"
          />
          <img
            src="LineHorizontal.svg"
            alt=""
            className="relative top-[-1rem] hidden lg:flex"
            data-aos="fade-up"
            data-aos-duration="600"
          />
          <img
            src="LineHorizontal.svg"
            alt=""
            className="relative top-[-1rem] hidden lg:flex lg:w-[4.2rem]"
            data-aos="fade-up"
            data-aos-duration="600"
          />
        </div>

        <div
          className="flex gap-[10.6rem] lg:gap-[27.4rem] relative top-[-1.93rem]"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img src="LineKananKiri.svg" alt="" />
          <img src="LineKananKiri.svg" alt="" />
        </div>

        <div
          className="flex gap-[10.6rem] lg:gap-[27.4rem] relative top-[-3rem]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src="Circle.svg" alt="" />
          <img src="Circle.svg" alt="" />
        </div>

        {/* wakil dan ketua */}
        <div className="flex relative top-[-3rem]" data-aos="fade-up" data-aos-duration="1200">
          <div className="relative left-[0.2rem]">
            <BorderStruktur Jabatan="Ketua Kelas" Nama="" Width="120px" />
          </div>
          <img src="LineHorizontalPendek.svg" className="relative top-3" />
          <img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
          <img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
          <img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
          <div className="relative right-[0.2rem]">
            <BorderStruktur Jabatan="Wakil Ketua" Nama="" Width="120px" />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="120" className="">
          <img src="LineVertikal2.svg" alt="" className="relative top-[-3.8rem]" />
        </div>

        {/* Seketaris dan bendahara */}
        <div className="lg:flex">
          <img
            src="LineHorizontal.svg"
            alt=""
            className="relative top-[-5.5rem]"
            data-aos="fade-up"
            data-aos-duration="600"
          />

          <img
            src="LineHorizontal.svg"
            alt=""
            className="relative top-[-5.5rem] hidden lg:flex"
            data-aos="fade-up"
            data-aos-duration="600"
          />

          <img
            src="LineHorizontal.svg"
            alt=""
            className="relative top-[-5.5rem] hidden lg:flex lg:w-[4.2rem]"
            data-aos="fade-up"
            data-aos-duration="600"
          />
        </div>

        <div
          className="flex gap-[10.6rem] relative top-[-6.45rem] lg:gap-[27.4rem]"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img src="LineKananKiri.svg" alt="" />
          <img src="LineKananKiri.svg" alt="" />
        </div>
        <div
          className="flex gap-[10.6rem] relative top-[-7.2rem] lg:gap-[27.4rem]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src="Circle.svg" alt="" />
          <img src="Circle.svg" alt="" />
        </div>

        <div
          className="flex gap-[5rem] relative top-[-7.3rem] lg:gap-[22rem]"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="flex-col">
            <BorderStruktur Jabatan="Sekertaris" Nama="" Width="120px" />
            <div className="py-[3%]"></div>
            <BorderStruktur Jabatan="" Nama="" Width="120px" />
          </div>

          <div className="flex-col">
            <BorderStruktur Jabatan="Bendahara" Nama="" Width="120px" />
            <div className="py-[3%]"></div>
            <BorderStruktur Jabatan="" Nama="" Width="120px" />
          </div>
        </div>

        <div className="relative top-[-15rem]" data-aos="fade-up" data-aos-duration="900">
          <img src="LineVertikal3.svg" alt="" />
        </div>

        {/* Keamanan dan Kebersihan */}
        <div className="lg:flex">
          <img
            src="LineHorizontal.svg"
            alt=""
            className="relative top-[-16.5rem]"
            data-aos="fade-up"
            data-aos-duration="600"
          />
          <img
            src="LineHorizontal.svg"
            alt=""
            className="relative top-[-16.5rem] hidden lg:flex"
            data-aos="fade-up"
            data-aos-duration="600"
          />
          <img
            src="LineHorizontal.svg"
            alt=""
            className="relative top-[-16.5rem] hidden lg:flex"
            data-aos="fade-up"
            data-aos-duration="600"
          />
          <img
            src="LineHorizontal.svg"
            alt=""
            className="relative top-[-16.5rem] hidden lg:flex"
            data-aos="fade-up"
            data-aos-duration="600"
          />
        </div>

        <div
          className="flex gap-[10.6rem] lg:gap-[23.1rem] relative top-[-17.44rem]"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img src="LineKananKiri.svg" alt="" />
          <img src="LineKananKiri.svg" alt="" />
          <img src="LineKananKiri.svg" alt="" className="hidden lg:flex" />
        </div>
        <div
          className="flex gap-[10.6rem] relative top-[-18.3rem] lg:gap-[23.1rem]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src="Circle.svg" alt="" />
          <img src="Circle.svg" alt="" />
          <img src="Circle.svg" alt="" className="hidden lg:flex" />
        </div>

        <div
          className=" flex gap-[5rem] relative top-[-18.5rem] lg:gap-[17.5rem]"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          <div className="flex-col">
            <BorderStruktur Jabatan="Keamanan" Nama="" Width="120px" />
            <div className="py-[3%]"></div>
            <BorderStruktur Jabatan="" Nama="" Width="120px" />
          </div>

          <div className="flex-col">
            <BorderStruktur Jabatan="Kebersihan" Nama="" Width="120px" />
            <div className="py-[3%]"></div>
            <BorderStruktur Jabatan="" Nama="" Width="120px" />
          </div>

          <div className="flex-col hidden lg:flex">
            <BorderStruktur Jabatan="Kesehatan" Nama="" Width="120px" />
            <div className="py-[3%]"></div>
            <BorderStruktur Jabatan="" Nama="" Width="120px" />
          </div>
        </div>

        {/* Kesehatan */}
        <div className="lg:flex">
          <img
            src="LineHorizontal.svg"
            alt=""
            className="relative top-[-16.9rem] lg:hidden"
            data-aos="fade-up"
            data-aos-duration="600"
          />
          {/* 	<img
					src="LineHorizontal.svg"
					alt=""
					className="relative top-[-16.9rem] hidden lg:flex lg:w-[50px]"
					data-aos="fade-up"
					data-aos-duration="600"
				/> */}

          <img
            src="LineHorizontal.svg"
            alt=""
            className="relative top-[-16.9rem] hidden lg:flex lg:hidden "
            data-aos="fade-up"
            data-aos-duration="600"
          />
        </div>

        <div
          className="flex gap-[10.6rem] lg:gap-[23.1rem] relative top-[-17.85rem] lg:hidden"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img src="LineKananKiri.svg" alt="" />
          <img src="LineKananKiri.svg" alt="" />
        </div>
        <div
          className="flex gap-[10.6rem] relative top-[-18.6rem] lg:gap-[23.1rem] lg:hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src="Circle.svg" alt="" />
          <img src="Circle.svg" alt="" />
        </div>

        <div
          className=" flex gap-[5rem] relative top-[-18.9rem] lg:gap-[17.5rem] lg:hidden"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          <div className="flex-col">
            <BorderStruktur Jabatan="Kesehatan" Nama="" Width="120px" />
          </div>

          <div className="flex-col">
            <BorderStruktur Jabatan="Kesehatan" Nama="" Width="120px" />
          </div>
        </div>

        {/* peralatan */}
        <div className="lg:flex">
          <img
            src="LineHorizontal.svg"
            alt=""
            className="relative top-[-16.9rem]"
            data-aos="fade-up"
            data-aos-duration="600"
          />
          <img
            src="LineHorizontal.svg"
            alt=""
            className="relative top-[-16.9rem] hidden lg:flex"
            data-aos="fade-up"
            data-aos-duration="600"
          />
          <img
            src="LineHorizontal.svg"
            alt=""
            className="relative top-[-16.9rem] hidden lg:flex"
            data-aos="fade-up"
            data-aos-duration="600"
          />
        </div>

        <div
          className="flex gap-[10.6rem] lg:gap-[35.6rem] relative top-[-17.85rem]"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img src="LineKananKiri.svg" alt="" />
          <img src="LineKananKiri.svg" alt="" />
        </div>
        <div
          className="flex gap-[10.6rem] relative top-[-18.6rem] lg:gap-[35.6rem]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src="Circle.svg" alt="" />
          <img src="Circle.svg" alt="" />
        </div>

        <div
          className=" flex gap-[5rem] relative top-[-18.9rem] lg:gap-[29.7rem]"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          <div className="flex-col">
            <BorderStruktur Jabatan="Peralatan" Nama="" Width="120px" />
          </div>

          <div className="flex-col">
            <BorderStruktur Jabatan="Peralatan" Nama="" Width="120px" />
          </div>
        </div>

        <div className=" absolute bottom-[15%] lg:bottom-[20%] " data-aos="fade-up" data-aos-duration="1000">
          <div className="flex justify-center items-center flex-col">
            <img src="LineVertikal3.svg" alt="" className="lg:h-3" />
            <img src="LineVertikal3.svg" alt="" className="lg:-z-50" />
            <img src="LineVertikal3.svg" alt="" className="lg:hidden" />
            <img src="Circle.svg" alt="" className="relative top-[-0.7rem]" />
            <div className="relative bottom-3">
              <BorderStruktur Jabatan="Peralatan" Nama="" Width="120px" />
            </div>
          </div>
        </div>

        {/* Kesehatan */}
        {/* 	<div
				className=" absolute bottom-[14.5%] lg:hidden"
				data-aos="fade-up"
				data-aos-duration="1200">
				<div className="flex justify-center items-center flex-col">
					<img src="LineVertikal3.svg" alt="" className="lg:hidden" />
					<img src="Circle.svg" alt="" className="relative top-[-0.7rem]" />
					<div className="relative bottom-3">
						<BorderStruktur Jabatan="Kesehatan" Nama="Eki" Width="120px" />
						<div className="py-[3%]"></div>
						<BorderStruktur Jabatan="" Nama="Hendri" Width="120px" />
					</div>
				</div>
			</div> */}
      </div>
    </div>
  )
}

export default StrukturKelas
