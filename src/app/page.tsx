import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <main className="w-full max-w-lg mx-auto min-h-screen flex flex-col items-start justify-center p-4">
      <header className="mb-8">
        <h1 className="text-xl font-bold">
          Ngifent Hiatus – Terima Kasih Banyak! 🙏🎉
        </h1>
      </header>

      <section className="max-w-xl space-y-4">
        <p>Hai semuanya!</p>
        <p>
          Kami mau mengucapkan terima kasih yang sebesar-besarnya buat kalian yang udah percaya dan pakai <strong>Ngifent</strong> sebagai platform e-ticketing event komunitas kalian.
        </p>
        <p>
          Mulai tanggal <strong>27 Agustus 2024</strong>, server Ngifent akan berhenti dulu 😔 dan sementara ini belum ada rencana buat lanjut pengembangan lagi. Kami bangga banget bisa bantu <strong>459 pengguna</strong> dan jadi bagian dari <strong>3 event</strong> keren yang pakai Ngifent sebagai platform mereka.
        </p>
        <p>
          Meskipun harus hiatus sekarang, kami tetap berharap suatu saat nanti Ngifent bisa balik lagi dengan layanan yang lebih oke buat bantu event kalian jadi lebih mudah dan seru 🎫✨.
        </p>
        <p>Sekali lagi, terima kasih atas semua dukungannya! 💖</p>
      </section>

      <footer className="mt-8">
        <p>Sampai jumpa lagi,</p>
        <Link href='https://www.linkedin.com/in/hidayahapriliansyah/' target='_blank' className='hover:underline'>
          <strong>Ngifent - Adi Muhamad Firmansyah</strong>
        </Link>
      </footer>
    </main>
  )
}

export default LandingPage
