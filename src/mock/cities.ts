import {ICity} from '../dto/Interfaces';

export const cities: ICity[] = [
  {
    id: 1,
    name: 'Moscow',
    favourite: false,
    cityInfo: {
      img: 'assets/img/russia.png',
      popularity: 5,
      country: 'Russia',
      description: 'Столица РФ.',
      postindex: '110100',
      continent: 'evraziya',
    },
    socialInfo: {
      img: 'assets/img/Detail1.png',
      title: 'Social Moscow',
      followers: 35,
      folowing: 50
    }
  },
  {
    id: 2,
    name: 'Sankt-Peterburg',
    favourite: false,
    cityInfo: {
      img: 'assets/img/russia.png',
      popularity: 4,
      country: 'Russia',
      description: 'Северная Столица РФ.',
      postindex: '430100',
      continent: 'evraziya',
    },
    socialInfo: {
      img: 'assets/img/Detail2.png',
      title: 'Social Sankt-Peterburg',
      followers: 14,
      folowing: 67
    }
  },
  {
    id: 3,
    name: 'Ekaterinburg',
    favourite: false,
    cityInfo: {
      img: 'assets/img/russia.png',
      popularity: 3,
      country: 'Russia',
      description: 'Gorod za Uralom РФ.',
      postindex: '730300',
      continent: 'evraziya',
    },
    socialInfo: {
      img: 'assets/img/Detail3.png',
      title: 'Social Ekaterinburg',
      followers: 57,
      folowing: 23
    }
  },
  {
    id: 4,
    name: 'Pekin',
    favourite: false,
    cityInfo: {
      img: 'assets/img/kitai.png',
      popularity: 2,
      country: 'Kitai',
      description: 'Gorod ne v RF.',
      postindex: '430100',
      continent: 'evraziya',
    },
    socialInfo: {
      img: 'assets/img/Detail4.png',
      title: 'Social Pekin',
      followers: 67,
      folowing: 89
    }
  },
  {
    id: 5,
    name: 'Madrid',
    favourite: false,
    cityInfo: {
      img: 'assets/img/spain.png',
      popularity: 5,
      country: 'Spain',
      description: 'In Europe.',
      postindex: '897560',
      continent: 'Europa',
    },
    socialInfo: {
      img: 'assets/img/Detail5.png',
      title: 'Social Madrid',
      followers: 77,
      folowing: 12
    }
  },
  {
    id: 6,
    name: 'Mexiko',
      favourite: false,
      cityInfo: {
        img: 'assets/img/mexika.png',
        popularity: 2,
        country: 'Meksika',
        description: 'Unknown gorod.',
        postindex: '890100',
        continent: 'North Amerika',
      },
      socialInfo: {
        img: 'assets/img/Detail6.png',
        title: 'Social Mexiko',
        followers: 55,
        folowing: 32
    }
  },
  {
    id: 7,
    name: 'Buenos-Aires',
    favourite: false,
    cityInfo: {
      img: 'assets/img/argentina.png',
      popularity: 2,
      country: 'Argentina',
      description: 'Unknown gorod.',
      postindex: '567800',
      continent: 'South Amerika',
    },
    socialInfo: {
      img: 'assets/img/Detail7.png',
      title: 'Social Buenos-Aires',
      followers: 55,
      folowing: 32
    }
  },
  {
    id: 8,
    name: 'Parizh',
    favourite: false,
    cityInfo: {
      img: 'assets/img/france.png',
      popularity: 3,
      country: 'France',
      description: 'Eifelev.Bashnya.',
      postindex: '234123',
      continent: 'Europa',
    },
    socialInfo: {
      img: 'assets/img/Detail8.png',
      title: 'Social Parizh',
      followers: 55,
      folowing: 32
    }
  },
  {
    id: 9,
    name: 'Tokio',
    favourite: false,
    cityInfo: {
      img: 'assets/img/japan.png',
      popularity: 3,
      country: 'Japan',
      description: 'Near Tihii Ocean.',
      postindex: '675356',
      continent: 'Asia',
    },
    socialInfo: {
      img: 'assets/img/Detail9.png',
      title: 'Social Tokio',
      followers: 78,
      folowing: 34
    }
  },
  {
    id: 10,
    name: 'Berlin',
    favourite: false,
    cityInfo: {
      img: 'assets/img/germany.png',
      popularity: 2,
      country: 'Germany',
      description: 'Europa.',
      postindex: '321123',
      continent: 'Europe',
    },
    socialInfo: {
      img: 'assets/img/Detail10.png',
      title: 'Social Berlin',
      followers: 12,
      folowing: 34
    }
  }
]


