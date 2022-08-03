import CornersCarousel from "../common/cornersCarousel/cornersCarousel";
import {
  CornersSliderWrapper
} from "./styled";
import {PhotoSection} from "./photoSection/photoSection";
import {DeliveryBanner} from "../banners/deliveryBanner/deliveryBanner";
import {UpdatesCarousel} from "../common/updatesCarousel/updatesCarousel";

const slides = [
  {
    imageUrl: 'https://klike.net/uploads/posts/2019-06/1559545617_2.jpg',
    title: 'Первый слайд',
    address: 'Москва, ул. Ленина, д. 1',
    kitchenType: 'Кухня',
    url: '/test',
  },
  {
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/2960979/2a0000017260a9d9f85eb44d3ab634dd7d7f/XXL',
    title: 'Первый слайд',
    address: 'Москва, ул. Ленина, д. 1',
    kitchenType: 'Кухня',
    url: '/test',
  },
  {
    imageUrl: 'https://aif-s3.aif.ru/images/019/066/ab47449af04fdde2d5adbadaff8fa271.jpg',
    title: 'Первый слайд',
    address: 'Москва, ул. Ленина, д. 1',
    kitchenType: 'Кухня',
    url: '/test',
  },
  {
    imageUrl: 'https://e0.edimdoma.ru/data/posts/0002/2597/22597-ed4_wide.jpg?1631189893',
    title: 'Первый слайд',
    address: 'Москва, ул. Ленина, д. 1',
    kitchenType: 'Кухня',
    url: '/test',
  },
  {
    imageUrl: 'http://life-instyle.com/images/stories/spravochnik/dostavka-edy-istoriya-i-sovremennost.jpg',
    title: 'Первый слайд',
    address: 'Москва, ул. Ленина, д. 1',
    kitchenType: 'Кухня',
    url: '/test',
  },
  {
    imageUrl: 'https://vjoy.cc/wp-content/uploads/2019/09/376909-svetik-1.jpg',
    title: 'Первый слайд',
    address: 'Москва, ул. Ленина, д. 1',
    kitchenType: 'Кухня',
    url: '/test',
  },
  {
    imageUrl: 'https://flomaster.club/uploads/posts/2021-10/1634761592_9-flomaster-club-p-nabroski-yedi-krasivii-risunok-9.jpg',
    title: 'Первый слайд',
    address: 'Москва, ул. Ленина, д. 1',
    kitchenType: 'Кухня',
    url: '/test',
  },
  {
    imageUrl: 'https://incrussia.ru/wp-content/uploads/2020/11/iStock-1175505781.jpg',
    title: 'Первый слайд',
    address: 'Москва, ул. Ленина, д. 1',
    kitchenType: 'Кухня',
    url: '/test',
  },
  {
    imageUrl: 'https://e0.edimdoma.ru/data/posts/0002/2597/22597-ed4_wide.jpg?1631189893',
    title: 'Первый слайд',
    address: 'Москва, ул. Ленина, д. 1',
    kitchenType: 'Кухня',
    url: '/test',
  },
  {
    imageUrl: 'http://life-instyle.com/images/stories/spravochnik/dostavka-edy-istoriya-i-sovremennost.jpg',
    title: 'Первый слайд',
    address: 'Москва, ул. Ленина, д. 1',
    kitchenType: 'Кухня',
    url: '/test',
  },
  {
    imageUrl: 'https://vjoy.cc/wp-content/uploads/2019/09/376909-svetik-1.jpg',
    title: 'Первый слайд',
    address: 'Москва, ул. Ленина, д. 1',
    kitchenType: 'Кухня',
    url: '/test',
  },
  {
    imageUrl: 'https://flomaster.club/uploads/posts/2021-10/1634761592_9-flomaster-club-p-nabroski-yedi-krasivii-risunok-9.jpg',
    title: 'Первый слайд',
    address: 'Москва, ул. Ленина, д. 1',
    kitchenType: 'Кухня',
    url: '/test',
  },
  {
    imageUrl: 'https://incrussia.ru/wp-content/uploads/2020/11/iStock-1175505781.jpg',
    title: 'Первый слайд',
    address: 'Москва, ул. Ленина, д. 1',
    kitchenType: 'Кухня',
    url: '/test',
  }
]

const photos = [
  'https://incrussia.ru/wp-content/uploads/2020/11/iStock-1175505781.jpg',
  'https://flomaster.club/uploads/posts/2021-10/1634761592_9-flomaster-club-p-nabroski-yedi-krasivii-risunok-9.jpg',
  'https://e0.edimdoma.ru/data/posts/0002/2597/22597-ed4_wide.jpg?1631189893',
  'https://avatars.mds.yandex.net/get-altay/2960979/2a0000017260a9d9f85eb44d3ab634dd7d7f/XXL',
]

const updatesSlides = [
  {
    title: 'Example',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...',
    url: '/test',
    imageUrl: 'https://flomaster.club/uploads/posts/2021-10/1634761592_9-flomaster-club-p-nabroski-yedi-krasivii-risunok-9.jpg',
    date: '10.06.2022'
  },
  {
    title: 'Example',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...',
    url: '/test',
    imageUrl: 'https://flomaster.club/uploads/posts/2021-10/1634761592_9-flomaster-club-p-nabroski-yedi-krasivii-risunok-9.jpg',
    date: '10.06.2022'
  },
  {
    title: 'Example',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...',
    url: '/test',
    imageUrl: 'https://e0.edimdoma.ru/data/posts/0002/2597/22597-ed4_wide.jpg?1631189893',
    date: '10.06.2022'
  },
  {
    title: 'Example',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...',
    url: '/test',
    imageUrl: 'https://flomaster.club/uploads/posts/2021-10/1634761592_9-flomaster-club-p-nabroski-yedi-krasivii-risunok-9.jpg',
    date: '10.06.2022'
  },
  {
    title: 'Example',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...',
    url: '/test',
    imageUrl: 'https://flomaster.club/uploads/posts/2021-10/1634761592_9-flomaster-club-p-nabroski-yedi-krasivii-risunok-9.jpg',
    date: '10.06.2022'
  },
  {
    title: 'Example',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...',
    url: '/test',
    imageUrl: 'https://e0.edimdoma.ru/data/posts/0002/2597/22597-ed4_wide.jpg?1631189893',
    date: '10.06.2022'
  },
  {
    title: 'Example',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...',
    url: '/test',
    imageUrl: 'https://flomaster.club/uploads/posts/2021-10/1634761592_9-flomaster-club-p-nabroski-yedi-krasivii-risunok-9.jpg',
    date: '10.06.2022'
  },
  {
    title: 'Example',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...',
    url: '/test',
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/2960979/2a0000017260a9d9f85eb44d3ab634dd7d7f/XXL',
    date: '10.06.2022'
  },
  {
    title: 'Example',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus lacus. Nunc a luctus urna. Cras placerat velit vel effici. ...',
    url: '/test',
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/2960979/2a0000017260a9d9f85eb44d3ab634dd7d7f/XXL',
    date: '10.06.2022'
  }
]

export const Home = () => {

  return (
    <>
      <CornersSliderWrapper>
        <CornersCarousel
          slides={slides}
        />
      </CornersSliderWrapper>
      <DeliveryBanner/>
      <UpdatesCarousel
        slides={updatesSlides}
      />
      <PhotoSection urls={photos}/>
    </>
  );
}
