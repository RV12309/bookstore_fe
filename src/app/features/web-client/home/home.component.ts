import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public covers1:string[] = [
    'https://wallpaperswide.com/download/flat_design_illustration-wallpaper-1920x1080.jpg',
    'https://wallpapercave.com/uwp/uwp1306494.png',
    'https://cutewallpaper.org/26/beautiful-adventure-wallpaper-for-desktop-hd/1219012381.jpg',
    'https://cutewallpaper.org/26/beautiful-adventure-wallpaper-for-desktop-hd/1219012381.jpg',
    'https://wallpaperswide.com/download/rick_and_morty_season_7-wallpaper-1920x1080.jpg'
  ]

  public booksTrend = [
    'https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg',
    'https://marketplace.canva.com/EAFciO2A4mQ/2/0/566w/canva-beige-brown-minimalist-aesthetic-floral-lineart-diary-book-cover-AFho7J5HZGk.jpg',
    'https://www.adobe.com/express/create/cover/media_19d5e212dbe8553614c3a9fbabd4d7f219ab01c85.png?width=750&format=png&optimize=medium',
    'https://images.template.net/121075/back-to-school-textbook-template-f7xrv.png'
  ];

  public specialOffer = [
    {
      cover: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-flyer-template-0257d0713261c922ff52111c0c601e61_screen.jpg?ts=1567091999',
      title: 'Seconds [Part1]',
      tags: [
        'biography',
        'horror',
        'thriller'
      ],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugiat atque consequuntur maiores sint pariatur. Fuga natus officiis a quidem?',
      author: 'Kevin Smiley',
      price: 25,
      discountPrice: 18.75
    },
    {
      cover: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/horror-movie-poster-facebook-video-design-template-caf89634160538da38a361890abc0225_screen.jpg?ts=1615965996',
      title: 'VẦNG TRĂNG MÁU',
      tags: [
        'biography',
        'horror',
        'thriller'
      ],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugiat atque consequuntur maiores sint pariatur. Fuga natus officiis a quidem?',
      author: 'Martin Scorsese',
      price: 2245,
      discountPrice: 213
    },
    {
      cover: 'https://e1.pxfuel.com/desktop-wallpaper/825/963/desktop-wallpaper-bollywood-and-hollywood-movie-posters-backgrounds-bollywood-poster.jpg',
      title: 'KUMANTHONG: QUỶ LINH NHI',
      tags: [
        'biography',
        'horror',
        'thriller'
      ],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugiat atque consequuntur maiores sint pariatur. Fuga natus officiis a quidem?',
      author: 'Thitipan Raksasat',
      price: 23321,
      discountPrice: 684
    }
  ];

  public salesFilm = [
    {
      poster: 'https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg',
      title: 'Avengers Endgame',
      discount: 500,
      price: 1200,
      sale: Math.floor(Math.random() * 100) + 1,
      categories: [
        'action',
        'horror'
      ],
      rate: 3
    },
    {
      poster: 'https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg',
      title: 'Avengers Endgame',
      discount: 500,
      price: 1200,
      sale: Math.floor(Math.random() * 100) + 1,
      categories: [
        'action',
        'horror'
      ],
      rate: 4
    },
    {
      poster: 'https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg',
      title: 'Avengers Endgame',
      discount: 500,
      price: 1200,
      sale: Math.floor(Math.random() * 100) + 1,
      categories: [
        'action',
        'horror'
      ],
      rate: 1
    },
    {
      poster: 'https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg',
      title: 'Avengers Endgame',
      discount: 500,
      price: 1200,
      sale: Math.floor(Math.random() * 100) + 1,
      categories: [
        'action',
        'horror'
      ],
      rate: 3
    },
    {
      poster: 'https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg',
      title: 'Avengers Endgame',
      discount: 500,
      price: 1200,
      sale: Math.floor(Math.random() * 100) + 1,
      categories: [
        'action',
        'horror'
      ],
      rate: 5
    }
  ]

  constructor(

  ) {

  }
  ngOnInit(): void {

  }
}
