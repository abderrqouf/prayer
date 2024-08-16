const apiUrl = 'https://hadithapi.com/api/hadiths?apiKey=$2y$10$fGCBIG8EtjqdVhBb9H85WmufUQyjcs2pXDzoxgoYtQmhTa2nXm';
fetch(apiUrl)
.then(response => response.json())
.then(data => {
    let hadith = data.hadiths.data
    let index = 0
    document.getElementById("alhdith").innerHTML = hadith[index].hadithArabic
    document.getElementById("book-name").innerHTML = hadith[index].book.bookName
    document.getElementById("restart").addEventListener("click" , function(){
        index++
        if(index == 25){
            index = 0
        }
        document.getElementById("alhdith").innerHTML = hadith[index].hadithArabic
        document.getElementById("book-name").innerHTML = hadith[index].book.bookName
    })

})
.catch(error => {
    console.log(error);
})