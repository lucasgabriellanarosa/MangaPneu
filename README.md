# React Manga Reader with Mangadex API

I've mande a manga reader using the [Mangadex API](https://api.mangadex.org/docs/) with React. I had some issues with CORS and to solve it I used [CorsProxy.io](https://corsproxy.io/) to proxy the requests and receive the response data correctly. Also, I had some problems in rendering the images in the Github Pages; It was working fine on localhost, but after deploying on Github Pages it was only rendering an "you can read this at mangadex" error image instead of the correct cover or pages images from each manga. I wrote a Medium post [here](https://medium.com/@nekitiubitiubiriba/manga-reader-with-mangadex-f99837896ca0). In the issues section I talked about that problem. But I found a solution using a chrome extension called [ModHeader Extension](https://chromewebstore.google.com/detail/modheader-modify-http-hea/idgpnmonknjnojddfkpgkljpfnnfcklj?hl=). After that, I posted again on Medium talking about it. You can read it [here](https://medium.com/@nekitiubitiubiriba/manga-reader-with-mangadex-2-0-0d481473a5c7).

The app is simple: There's a search bar where you write something and then you click enter to search for a manga with that name. Then, it will render a manga list on the page, showing the cover, name and author from each manga.

![image](https://github.com/lucasgabriellanarosa/MangaPneu/assets/134225967/5ac91135-6ee8-49f4-882b-007c7c4adade)

There's a useState variable called "query". That "query" is what you search in the input bar, and it will be used in the URL to search for mangas with that name. To update the query I'm using the onChange function to set the query (setQuery useState function) to the value writen in the input. And this input is wraped inside a form tag where there's an onSubmit function, which makes that when you hit enter it will use that query to fetch data from the API. That manga list is also an useState function. You can see it at the [Home.jsx](https://github.com/lucasgabriellanarosa/MangaPneu/blob/main/src/pages/Home/Home.jsx). Then, clicking on a manga title it will load a page with the details from it.

![image](https://github.com/lucasgabriellanarosa/MangaPneu/assets/134225967/ac7a9a75-8c4b-4e72-b6e8-ea2aaa59539c)
![image](https://github.com/lucasgabriellanarosa/MangaPneu/assets/134225967/3326d5e0-a948-40c4-a7a8-6498fa53fc13)

There's the cover image, the title, tags and a description from the manga. After that, there's a select bar where you choose the language the chapters will be, and also chapters lists nested inside volumes lists. It uses to fetch functions. One of them will fetch the data from the image, tags and description and set it to the useState variable mangaData. The other one will fetch the volumes and chapter list based on the selected language, there's also an useState variable assimilate to it: volumeChaptersData. You can check it here [MangaPage.jsx](https://github.com/lucasgabriellanarosa/MangaPneu/blob/main/src/pages/MangaPage/MangaPage.jsx). Then you click on the chapter you want to read and it will load the last page I made, where you can read it.

![image](https://github.com/lucasgabriellanarosa/MangaPneu/assets/134225967/2d12d5df-b972-4cf2-954c-fbe48a658efb)

It is probably the simplest page I made. There's a carousel with all the page images from that chapter and two buttons in the bottom: One to go to the next page and one to go to the previous page. To make the carousel work I made a logic where there's a currentImageIndex useState assimilate to a function that will load a page based on that index. And the next button of course will add one to that index - going to the next page. While the previous button will reduce one from that index - going to the previous page. You can read it here [ReadManga.jsx](https://github.com/lucasgabriellanarosa/MangaPneu/blob/main/src/pages/ReadManga/ReadManga.jsx). And, as I said, it's required to use a extension to change the request headers. If I desactivate the ModHeader Extension, everything will work like this:

![image](https://github.com/lucasgabriellanarosa/MangaPneu/assets/134225967/3a0e1bae-c4ab-4c31-b016-c200c8690624)
![image](https://github.com/lucasgabriellanarosa/MangaPneu/assets/134225967/45f3cd23-9c04-4cfd-bf1b-d51f54907227)

# Mobile First 
I created all the design with the mobile first concept. So it is a responsive site. Here are some images showing it responsiveness:

![image](https://github.com/lucasgabriellanarosa/MangaPneu/assets/134225967/620c9e87-3a69-4355-bca6-751b26e2fc17)
![image](https://github.com/lucasgabriellanarosa/MangaPneu/assets/134225967/e3b620dc-921e-4ab4-83ed-f989a44c53f3)
![image](https://github.com/lucasgabriellanarosa/MangaPneu/assets/134225967/b183374a-a5ec-4864-b7dd-444eb5086800)
