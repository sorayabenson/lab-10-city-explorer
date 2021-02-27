const { formatLocation, formatWeather, formatReviews } = require('../lib/munging.js');

test('formatLocation should take in a location by name and returns the name, latitude, and longitude', () => {
  const denverSearch = [
    {
      place_id: '236119072',
      licence: 'https://locationiq.com/attribution',
      osm_type: 'relation',
      osm_id: '253750',
      boundingbox: [
        '39.6143154',
        '39.9142087',
        '-105.1098845',
        '-104.5996889'
      ],
      lat: '39.7392364',
      lon: '-104.9848623',
      display_name: 'Denver, Denver County, Colorado, USA',
      class: 'place',
      type: 'city',
      importance: 0.695475873909579,
      icon: 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
    },
    {
      place_id: '315856672',
      licence: 'https://locationiq.com/attribution',
      osm_type: 'relation',
      osm_id: '1411339',
      boundingbox: [
        '39.6143154',
        '39.9142087',
        '-105.1098845',
        '-104.5996889'
      ],
      lat: '39.7348381',
      lon: '-104.9653271',
      display_name: 'Denver County, Colorado, USA',
      class: 'boundary',
      type: 'administrative',
      importance: 0.695475873909579,
      icon: 'https://locationiq.org/static/images/mapicons/poi_boundary_administrative.p.20.png'
    },
    {
      place_id: '236029715',
      licence: 'https://locationiq.com/attribution',
      osm_type: 'relation',
      osm_id: '128512',
      boundingbox: [
        '42.6567999',
        '42.6803073',
        '-92.3471364',
        '-92.317541'
      ],
      lat: '42.6713719',
      lon: '-92.3374045',
      display_name: 'Denver, Bremer County, Iowa, USA',
      class: 'boundary',
      type: 'administrative',
      importance: 0.5318394385017,
      icon: 'https://locationiq.org/static/images/mapicons/poi_boundary_administrative.p.20.png'
    }
  ];
  const expectation = {
    formatted_query: 'Denver, Denver County, Colorado, USA',
    latitude: '39.7392364',
    longitude: '-104.9848623',
  };
  const actual = formatLocation(denverSearch);

  expect(actual).toEqual(expectation);
});

test('formatWeather will take in weatherData and return the first 5 forcasts in the array with the forcast and time', () => {
  const weatherSearch = {
    data: [
      {
        moonrise_ts: 1614378365,
        wind_cdir: 'E',
        rh: 64,
        pres: 1010.47,
        high_temp: 8.8,
        sunset_ts: 1614380760,
        ozone: 291.375,
        moon_phase: 0.997723,
        wind_gust_spd: 8.69531,
        snow_depth: 0.5,
        clouds: 84,
        ts: 1614315660,
        sunrise_ts: 1614340150,
        app_min_temp: -2.9,
        wind_spd: 2.61769,
        pop: 90,
        wind_cdir_full: 'east',
        slp: 1028.82,
        moon_phase_lunation: 0.51,
        valid_date: '2021-02-26',
        app_max_temp: 9.8,
        vis: 20.7426,
        dewpt: -1.6,
        snow: 14.25,
        uv: 0.772201,
        weather: {
          icon: 's04d',
          code: 610,
          description: 'Mix snow/rain'
        },
        wind_dir: 94,
        max_dhi: null,
        clouds_hi: 52,
        precip: 6.3125,
        low_temp: 1.5,
        max_temp: 9.8,
        moonset_ts: 1614342012,
        datetime: '2021-02-26',
        temp: 5.4,
        min_temp: 1.5,
        clouds_mid: 67,
        clouds_low: 65
      },
      {
        moonrise_ts: 1614469037,
        wind_cdir: 'S',
        rh: 88,
        pres: 1002.17,
        high_temp: 14.9,
        sunset_ts: 1614467221,
        ozone: 274.583,
        moon_phase: 0.978963,
        wind_gust_spd: 7.5,
        snow_depth: 0.4,
        clouds: 85,
        ts: 1614402060,
        sunrise_ts: 1614426468,
        app_min_temp: -3.1,
        wind_spd: 1.97563,
        pop: 85,
        wind_cdir_full: 'south',
        slp: 1020.25,
        moon_phase_lunation: 0.55,
        valid_date: '2021-02-27',
        app_max_temp: 14.9,
        vis: 21.4007,
        dewpt: 6,
        snow: 0,
        uv: 4.15974,
        weather: {
          icon: 'r01d',
          code: 500,
          description: 'Light rain'
        },
        wind_dir: 191,
        max_dhi: null,
        clouds_hi: 60,
        precip: 5.1875,
        low_temp: 2.9,
        max_temp: 15.1,
        moonset_ts: 1614430312,
        datetime: '2021-02-27',
        temp: 8,
        min_temp: 1.5,
        clouds_mid: 56,
        clouds_low: 41
      },
      {
        moonrise_ts: 1614555437,
        wind_cdir: 'S E',
        rh: 94,
        pres: 1000,
        high_temp: 14.3,
        sunset_ts: 1614553682,
        ozone: 266.844,
        moon_phase: 0.932864,
        wind_gust_spd: 8,
        snow_depth: 0,
        clouds: 91,
        ts: 1614488460,
        sunrise_ts: 1614512784,
        app_min_temp: 7.4,
        wind_spd: 1.5264,
        pop: 95,
        wind_cdir_full: 'south-southeast',
        slp: 1017.83,
        moon_phase_lunation: 0.58,
        valid_date: '2021-02-28',
        app_max_temp: 13.4,
        vis: 18.9885,
        dewpt: 9.3,
        snow: 0,
        uv: 3.22466,
        weather: {
          icon: 'r02d',
          code: 501,
          description: 'Moderate rain'
        },
        wind_dir: 150,
        max_dhi: null,
        clouds_hi: 63,
        precip: 12.75,
        low_temp: 7.4,
        max_temp: 13.4,
        moonset_ts: 1614518530,
        datetime: '2021-02-28',
        temp: 10.3,
        min_temp: 7.4,
        clouds_mid: 65,
        clouds_low: 83
      },
      {
        moonrise_ts: 1614646122,
        wind_cdir: 'W',
        rh: 79,
        pres: 991.562,
        high_temp: 10.5,
        sunset_ts: 1614640142,
        ozone: 287.115,
        moon_phase: 0.861729,
        wind_gust_spd: 15.2109,
        snow_depth: 0,
        clouds: 92,
        ts: 1614574860,
        sunrise_ts: 1614599100,
        app_min_temp: -2.4,
        wind_spd: 2.54851,
        pop: 95,
        wind_cdir_full: 'west',
        slp: 1012.65,
        moon_phase_lunation: 0.61,
        valid_date: '2021-03-01',
        app_max_temp: 12.3,
        vis: 19.5542,
        dewpt: 5.6,
        snow: 0,
        uv: 1.68651,
        weather: {
          icon: 'r03d',
          code: 502,
          description: 'Heavy rain'
        },
        wind_dir: 279,
        max_dhi: null,
        clouds_hi: 90,
        precip: 15.375,
        low_temp: -5.1,
        max_temp: 12.4,
        moonset_ts: 1614606755,
        datetime: '2021-03-01',
        temp: 9.2,
        min_temp: -0,
        clouds_mid: 81,
        clouds_low: 58
      },
      {
        moonrise_ts: 1614736816,
        wind_cdir: 'W',
        rh: 38,
        pres: 1006.33,
        high_temp: 8.1,
        sunset_ts: 1614726602,
        ozone: 347.656,
        moon_phase: 0.769879,
        wind_gust_spd: 15.1016,
        snow_depth: 0,
        clouds: 2,
        ts: 1614661260,
        sunrise_ts: 1614685416,
        app_min_temp: -11.3,
        wind_spd: 2.72823,
        pop: 0,
        wind_cdir_full: 'west',
        slp: 1028.42,
        moon_phase_lunation: 0.65,
        valid_date: '2021-03-02',
        app_max_temp: 8.1,
        vis: 24.128,
        dewpt: -13.2,
        snow: 0,
        uv: 5.33545,
        weather: {
          icon: 'c02d',
          code: 801,
          description: 'Few clouds'
        },
        wind_dir: 275,
        max_dhi: null,
        clouds_hi: 2,
        precip: 0,
        low_temp: -5,
        max_temp: 8.2,
        moonset_ts: 1614695085,
        datetime: '2021-03-02',
        temp: 0.5,
        min_temp: -5.1,
        clouds_mid: 0,
        clouds_low: 0
      },
      {
        moonrise_ts: 1614827535,
        wind_cdir: 'S W',
        rh: 59,
        pres: 1004.59,
        high_temp: 18.2,
        sunset_ts: 1614813062,
        ozone: 332.632,
        moon_phase: 0.663146,
        wind_gust_spd: 11.1953,
        snow_depth: 0,
        clouds: 3,
        ts: 1614747660,
        sunrise_ts: 1614771730,
        app_min_temp: -6.6,
        wind_spd: 2.76743,
        pop: 0,
        wind_cdir_full: 'south-southwest',
        slp: 1026.24,
        moon_phase_lunation: 0.68,
        valid_date: '2021-03-03',
        app_max_temp: 13.7,
        vis: 24.128,
        dewpt: -4,
        snow: 0,
        uv: 5.457,
        weather: {
          icon: 'c02d',
          code: 801,
          description: 'Few clouds'
        },
        wind_dir: 210,
        max_dhi: null,
        clouds_hi: 3,
        precip: 0,
        low_temp: -1.4,
        max_temp: 14.1,
        moonset_ts: 1614783621,
        datetime: '2021-03-03',
        temp: 3.6,
        min_temp: -1.5,
        clouds_mid: 0,
        clouds_low: 0
      },
      {
        moonrise_ts: 1614918282,
        wind_cdir: 'SW',
        rh: 68,
        pres: 1003.44,
        high_temp: 14.3,
        sunset_ts: 1614899522,
        ozone: 323.406,
        moon_phase: 0.548204,
        wind_gust_spd: 1.8252,
        snow_depth: 0,
        clouds: 15,
        ts: 1614834060,
        sunrise_ts: 1614858044,
        app_min_temp: -2.2,
        wind_spd: 1.04968,
        pop: 0,
        wind_cdir_full: 'south-southwest',
        slp: 1024.75,
        moon_phase_lunation: 0.72,
        valid_date: '2021-03-04',
        app_max_temp: 18.2,
        vis: 24.128,
        dewpt: 2.8,
        snow: 0,
        uv: 5.47932,
        weather: {
          icon: 'c02d',
          code: 801,
          description: 'Few clouds'
        },
        wind_dir: 206,
        max_dhi: null,
        clouds_hi: 15,
        precip: 0,
        low_temp: 4.2,
        max_temp: 18.3,
        moonset_ts: 1614872464,
        datetime: '2021-03-04',
        temp: 9,
        min_temp: 2,
        clouds_mid: 0,
        clouds_low: 0
      }
    ]
  };

  const expectation = [
    {
      forecast: 'Mix snow/rain',
      time: 'Thu Feb 25 2021',
    },
    {
      forecast: 'Light rain',
      time: 'Fri Feb 26 2021',
    },
    {
      forecast: 'Moderate rain',
      time: 'Sat Feb 27 2021',
    },
    {
      forecast: 'Heavy rain',
      time: 'Sun Feb 28 2021',
    },
    {
      forecast: 'Few clouds',
      time: 'Mon Mar 01 2021',
    },
  ];
  const actual = formatWeather(weatherSearch);

  expect(actual).toEqual(expectation);
});

test('formatReviews should take in data and return the name, image_url, price, rating, and url of the first five businesses', () => {
  const reviewData = {
    businesses: [
      {
        id: '-ADSweGgRsQDYuSLVOUSeg',
        alias: 'sanitary-bakery-nanticoke',
        name: 'Sanitary Bakery',
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/_A64hm5FEdrS4XbhfAtCZg/o.jpg',
        is_closed: false,
        url: 'https://www.yelp.com/biz/sanitary-bakery-nanticoke?adjust_creative=dhmrMJHoROP5kgxwVyxxTg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=dhmrMJHoROP5kgxwVyxxTg',
        review_count: 23,
        categories: [
          {
            alias: 'bakeries',
            title: 'Bakeries'
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 41.19996,
          longitude: -75.99978
        },
        transactions: [],
        price: '$',
        location: {
          address1: '126 E Ridge St',
          address2: '',
          address3: '',
          city: 'Nanticoke',
          zip_code: '18634',
          country: 'US',
          state: 'PA',
          display_address: [
            '126 E Ridge St',
            'Nanticoke, PA 18634'
          ]
        },
        phone: '+15707356630',
        display_phone: '(570) 735-6630',
        distance: 739.0852171397313
      },
      {
        id: 'qAw9qUQFJKcr6Jy3DlGbVg',
        alias:' gratefulrost-cafe-and-coffee-roaster-nanticoke-3',
        name: 'Grateful Roast Cafe and Coffee Roaster',
        image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/No_WinzqB70aCny9XLZEng/o.jpg',
        is_closed: false,
        url: 'https://www.yelp.com/biz/grateful-roast-cafe-and-coffee-roaster-nanticoke-3?adjust_creative=dhmrMJHoROP5kgxwVyxxTg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=dhmrMJHoROP5kgxwVyxxTg',
        review_count: 38,
        categories: [
          {
            alias: 'coffeeroasteries',
            title: 'Coffee Roasteries'
          },
          {
            alias: 'coffee',
            title: 'Coffee & Tea'
          },
          {
            alias: 'cafes',
            title: 'Cafes'
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 41.1922305253448,
          longitude: -75.9854038436249
        },
        transactions: [
          'pickup',
          'delivery'
        ],
        price: '$$',
        location: {
          address1: '400 Middle Rd',
          address2: '',
          address3: 'Bdg C',
          city: 'Nanticoke',
          zip_code: '18634',
          country: 'US',
          state: 'PA',
          display_address: [
            '400 Middle Rd',
            'Bdg C',
            'Nanticoke, PA 18634'
          ]
        },
        phone: '+15702855282',
        display_phone: '(570) 285-5282',
        distance: 2184.29603255187
      },
      {
        id: 'Z25xCND-b2l0mjfNfpbfXQ',
        alias: 'nardozzos-pizzeria-nanticoke',
        name: 'Nardozzo`s Pizzeria',
        image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/LXHlLGLSEVPezSYLxF16Gg/o.jpg',
        is_closed: false,
        url: 'https://www.yelp.com/biz/nardozzos-pizzeria-nanticoke?adjust_creative=dhmrMJHoROP5kgxwVyxxTg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=dhmrMJHoROP5kgxwVyxxTg',
        review_count: 13,
        categories: [
          {
            alias: 'pizza',
            title: 'Pizza'
          }
        ],
        rating: 5.0,
        coordinates: {
          latitude: 41.20542,
          longitude: -76.00187
        },
        transactions: [
          'delivery'
        ],
        price: '$',
        location: {
          address1: '145 E Main St',
          address2: '',
          address3: '',
          city: 'Nanticoke',
          zip_code: '18634',
          country: 'US',
          state: 'PA',
          display_address: [
            '145 E Main St',
            'Nanticoke, PA 18634'
          ]
        },
        phone: '+15707353040',
        display_phone: '(570) 735-3040',
        distance: 256.295172301661
      },
      {
        id: 'TCJz6I15mPjwNv3whlvmqw',
        alias: 'martys-blue-room-nanticoke',
        name: 'Marty`s Blue Room',
        image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/jIREgUhA8Tl-U7OESyiLow/o.jpg',
        is_closed: false,
        url: 'https://www.yelp.com/biz/martys-blue-room-nanticoke?adjust_creative=dhmrMJHoROP5kgxwVyxxTg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=dhmrMJHoROP5kgxwVyxxTg',
        review_count: 43,
        categories: [
          { 
            alias: 'newamerican',
            title: 'American (New)'
          }
        ],
        rating: 4.0,
        coordinates: {
          latitude: 41.193132,
          longitude: -76.015798
        },
        transactions: [
          'delivery'
        ],
        price: '$$$',
        location: {
          address1: '100 Old Newport St',
          address2: '',
          address3: '',
          city: 'Nanticoke',
          zip_code: '18634',
          country: 'US',
          state: 'PA',
          display_address: [  
            '100 Old Newport St',
            'Nanticoke, PA 18634'
          ]
        },
        phone: '+15707357028',
        display_phone: '(570) 735-7028',
        distance: 1626.7277847305081
      },
      {
        id: 'R1jGnV4BjE3vU2pwbOkKvw',
        alias: 'joes-pizza-nanticoke',
        name: 'Joe`s Pizza',
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/X6hvYW6FTw_A9c9g_UQClQ/o.jpg',
        is_closed: false,
        url: 'https://www.yelp.com/biz/joes-pizza-nanticoke?adjust_creative=dhmrMJHoROP5kgxwVyxxTg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=dhmrMJHoROP5kgxwVyxxTg',
        review_count: 9,
        categories: [
          {
            alias: 'pizza',
            title: 'Pizza'
          }
        ],
        rating: 5.0,
        coordinates: {
          latitude: 41.20073,
          longitude: -76.002566
        },
        transactions: [
          'delivery'
        ],
        price: '$',
        location: {
          address1: '5 W Church St',
          address2: null,
          address3: null,
          city: 'Nanticoke',
          zip_code: '18634',
          country: 'US',
          state: 'PA',
          display_address: [
            '5 W Church St',
            'Nanticoke, PA 18634'
          ]
        },
        phone: '+15707355150',
        display_phone: '(570) 735-5150',
        distance: 541.8687097218462
      },
      {
        id: 'mMyPIrdQfdYSYeJ5e7e1QQ',
        alias: 'r-bar-and-grill-nanticoke',
        name: 'R Bar & Grill',
        image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/StZcCysuYstgweC1uF02Jg/o.jpg',
        is_closed: false,
        url: 'https://www.yelp.com/biz/r-bar-and-grill-nanticoke?adjust_creative=dhmrMJHoROP5kgxwVyxxTg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=dhmrMJHoROP5kgxwVyxxTg',
        review_count: 35,
        categories: [
          {
            alias: 'bars',
            title: 'Bars'
          },
          {
            alias: 'tradamerican',
            title: 'American (Traditional)'
          },
          {
            alias: 'chicken_wings',
            title: 'Chicken Wings'
          }
        ],
        rating: 4.0,
        coordinates: {
          latitude: 41.18533,
          longitude: -76.00507
        },
        transactions: [
          'delivery'
        ],
        price: '$$',
        location: {
          address1: '119 E Kirmar Ave',
          address2: '',
          address3: '',
          city: 'Nanticoke',
          zip_code: '18634',
          country: 'US',
          state: 'PA',
          display_address: [
            '119 E Kirmar Ave',
            'Nanticoke, PA 18634'
          ]
        },
        phone: '+15702580505',
        display_phone: '(570) 258-0505',
        distance: 2217.5576653535686
      }
    ] };

  const expectation = [
    {
      name: 'Sanitary Bakery',
      image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/_A64hm5FEdrS4XbhfAtCZg/o.jpg',
      price: '$',
      rating: 4.5,
      url: 'https://www.yelp.com/biz/sanitary-bakery-nanticoke?adjust_creative=dhmrMJHoROP5kgxwVyxxTg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=dhmrMJHoROP5kgxwVyxxTg'
    },
    {
      name: 'Grateful Roast Cafe and Coffee Roaster',
      image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/No_WinzqB70aCny9XLZEng/o.jpg',
      price: '$$',
      rating: 4.5,
      url: 'https://www.yelp.com/biz/grateful-roast-cafe-and-coffee-roaster-nanticoke-3?adjust_creative=dhmrMJHoROP5kgxwVyxxTg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=dhmrMJHoROP5kgxwVyxxTg'
    },
    {
      name: 'Nardozzo`s Pizzeria',
      image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/LXHlLGLSEVPezSYLxF16Gg/o.jpg',
      price: '$',
      rating: 5.0,
      url: 'https://www.yelp.com/biz/nardozzos-pizzeria-nanticoke?adjust_creative=dhmrMJHoROP5kgxwVyxxTg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=dhmrMJHoROP5kgxwVyxxTg'
    },
    {
      name: 'Marty`s Blue Room',
      image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/jIREgUhA8Tl-U7OESyiLow/o.jpg',
      price: '$$$',
      rating: 4.0,
      url: 'https://www.yelp.com/biz/martys-blue-room-nanticoke?adjust_creative=dhmrMJHoROP5kgxwVyxxTg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=dhmrMJHoROP5kgxwVyxxTg'
    },
    {
      name: 'Joe`s Pizza',
      image_url:'https://s3-media4.fl.yelpcdn.com/bphoto/X6hvYW6FTw_A9c9g_UQClQ/o.jpg',
      price: '$',
      rating: 5.0,
      url: 'https://www.yelp.com/biz/joes-pizza-nanticoke?adjust_creative=dhmrMJHoROP5kgxwVyxxTg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=dhmrMJHoROP5kgxwVyxxTg'
    },
  ];
  const actual = formatReviews(reviewData);

  expect(actual).toEqual(expectation);
});

// test('describe', () => {


//   const expectation = ;
//   const actual = ;

//   expect(actual).toEqual(expectation);
// });