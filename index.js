let movieInput = JSON.parse(movies);
    console.log(movieInput);

    for (let i = 0 ; i < movieInput.length; i++){
    $("#main").append(`
        <div class="moviecontainer col-5 mb-3">
            <div class="row ">
                <img src="${movieInput[i].image}" class="col-4">
                <div class="col-8 bg-dark text-white mb-3 mx-auto">
                        <div class="row mt-1">
                            <div class="col-5 ">
                            <h4 class="row">${movieInput[i].movieName}</h4>
                            <p class="row">${movieInput[i].description}</p>
                            </div>  
                        </div>
                    <div class="row justify-content-end align-items-center mt-4 mr-1 mb-1">
                        <span>Like</span>
                        <button class="likeBtn" value="Like">
                            <svg class="thumb" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="thumbs-up" class="svg-inline--fa fa-thumbs-up fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"></path></svg>                        
                            <div class="circle" id="circle${i}">
                                 <p id="${i}">${movieInput[i].likes}</p>
                            </div>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    `)   
}

