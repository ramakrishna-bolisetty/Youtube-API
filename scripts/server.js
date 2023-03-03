 const Request = () => {
    searchInput = document.getElementById("search").value;
    if(searchInput==""){
        alert(ErrorMessage);
        return;
    }
    let videoDiv = document.getElementById("videos");
    const url = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + searchInput;
    fetch(url)
        .then((response) => response.json())
        .then((data) => { console.log(data); displayVideos(data, videoDiv) });

}
