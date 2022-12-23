import Head from 'next/head';

// import '../styles/styles.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta 
            name="description"
            content="Час Красивих Зубів – приватна стоматологія, швидке обслуговування, досвідчені лікарі з багаторічним стажем. місто Дніпро вулиця проспект Пушкіна, 73"/>
        <meta name="keywords" content="стоматологія зуб боль Дніпро Днепр стоматология клиника врач больница Пушкіна"/>
        <meta name="autor" content="Michael Horban"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="title" content="Час Красивих Зубів – Час Перемог. Приватна Стоматологія місто Дніпро"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://metatags.io/"/>
        <meta property="og:title" content="Час Красивих Зубів – Час Перемог. Приватна Стоматологія місто Дніпро"/>
        <meta property="og:description" content="Час Красивих Зубів – приватна стоматологія, швидке обслуговування, досвідчені лікарі з багаторічним стажем. місто Дніпро вулиця проспект Пушкіна, 73"/>
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://metatags.io/"/>
        <meta property="twitter:title" content="Час Красивих Зубів – Час Перемог. Приватна Стоматологія місто Дніпро"/>
        <meta property="twitter:description" content="Час Красивих Зубів – приватна стоматологія, швидке обслуговування, досвідчені лікарі з багаторічним стажем. місто Дніпро вулиця проспект Пушкіна, 73"/>
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
      </Head>
     <Component {...pageProps} />
   </div>
  )
}