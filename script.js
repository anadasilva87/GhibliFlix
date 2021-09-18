var listaGhibli = [
    "https://http2.mlstatic.com/D_NQ_NP_712854-MLB26219261200_102017-O.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/e/ec/Mononoke_Hime_p%C3%B4ster.png",
  
    "https://br.web.img3.acsta.net/pictures/210/527/21052756_20131024195513383.jpg",
  
    "https://m.media-amazon.com/images/I/91DoU3+T-6L._AC_SL1500_.jpg",
    "https://cdn.fstatic.com/media/movies/covers/2018/04/71qMlebtjuL._SL1280_.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/d/d0/Gedo_Senki_p%C3%B4ster.png"
  ];
  
  var listaTrailer = [
    "https://www.youtube.com/watch?v=6zhLBe319KE&t=44s",
    "https://www.youtube.com/watch?v=4OiMOHRDs14&t=9s",
    "https://www.youtube.com/watch?v=SgZI655GgHk&t=2s",
    "https://www.youtube.com/results?search_query=totoro+trailer",
    "https://www.youtube.com/watch?v=tC0Ug7sY0wE",
    "https://www.youtube.com/watch?v=8hxYx3Jq3kI"
  ];
  
  for (var i = 0; i < listaGhibli.length; i++) {
    document.write(
      "<a target=_blank href=" +
        listaTrailer[i] +
        "><img src=" +
        listaGhibli[i] +
        " class=imagem ></a>"
    );
  }
  