const accessKey = "eoP9pUu6WVhz2jQg_3DDyQEhJelfbmikTT98x9QoQDU";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchresults = document.querySelector(".search-results");
const searchresultEl = document.querySelector(".search-result");
const showMore = document.getElementById("show-more-button");

let inputData = ""
let page = 1;

async function searchImages() {
    inputData = inputEl.value;
    console.log(inputData);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    // fetch(url,accessKey).then(data => data.json()).then(data => {
    //     console.log(data.results);
    //     const results = data.results
    // })

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    console.log(results)
    
    // for(i=0;i<results.length;i++) {
    // console.log(results[i].alt_description)
    // }

    if (page === 1) {
        searchresults.innerHTML = "";
    }
    

    var generateImg = (result) => {   
      return  `<div class="search-result">
            <img src=${result.urls.small}
                alt=${result.alt_description}>
                <a href=${result.links.html}
                    target="_blank">${result.alt_description}</a>
         </div>`
    }

    function renderImg(results) {
        // results.foreach((result) => {
          results.map((result) => {
            console.log(result)
            searchresults.innerHTML += generateImg(result)
          })
        //   console.log(results)
    }

    renderImg(results)

    //  results.map((result) => {
    //     const imageWrapper = document.createElement("div");
    //     imageWrapper.classList.add("search-result");
    //     const image = document.createElement("img");
    //     image.src = result.urls.small;
    //     image.alt = result.alt_description;
    //     const imageLink = document.createElement('a');
    //     imageLink.href = result.links.html;
    //     imageLink.target = "_blank";
    //     imageLink.textContent = result.alt_description;

    //     imageWrapper.appendChild(image);
    //     imageWrapper.appendChild(imageLink);
    //     searchresults.appendChild(imageWrapper);

        // var generateImg = () => {
        // return 
        // `<div class="search-result">
        //     <img src=${result.urls.small}
        //         alt=${result.alt_description}>
        //         <a href=${result.links.html}
        //             target="_blank">${result.alt_description}</a>
        //  </div>`

        // }

        // searchresultEl.innerHTML += generateImg(results)


        
    //  });

    page++

    if (page > 1) {
        showMore.style.display = "block"
    }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1;
    searchImages()
})

showMore.addEventListener("click", (event) => {
    searchImages()
})

var voice = () => {
    var recognition = new webkitSpeechRecognition();
    recognition.lang="en-GB";
    recognition.onresult = (event) => {
        console.log(event);
        inputEl.value = event.results[0][0].transcript;
    }
    recognition.start();
}


// ChatBot Code

// const formEL = document.getElementById("chat-form");
// const inputEL = document.getElementById("chat-input");
// const messagesEL = document.querySelector("chat-messages");
// const accesskey = "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"


//     async function chat() {
//     const message = inputEL.value;
//     console.log(message);
//     // inputEL.value = "";
  
//     messagesEL.innerHTML += `<div class="message user-message">
//     <img src="./icons/user.png" alt="user icon"> <span>${message}</span>
//     </div>`;

// const url = 'https://api.openai.com/v1/completions';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		"Content-Type": "application/json",
//          Authorization: `Bearer ${accesskey}`
// 	},
//     body: JSON.stringify({
//         model: "gpt-3.5-turbo-instruct",
//         prompt: message,
//         max_tokens: 7,
//         temperature: 0,
//         top_p: 1,
//         frequency_penalty: 0.0,
//         presence_penalty: 0.0,
//     })
    
// };

// const response = await fetch(url)
// const data = await response.json()
// const results = data.results
// console.log(results)


    // // Use axios library to make a POST request to the OpenAI API
    // const response = await axios.post(
    //   "https://api.openai.com/v1/completions",
    //   {
    //     prompt: message,
    //     model: "text-davinci-003",
    //     temperature: 0,
    //     max_tokens: 1000,
    //     top_p: 1,
    //     frequency_penalty: 0.0,
    //     presence_penalty: 0.0,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${apiKey}`,
    //     },
    //   }
    // );

   

//     const chatbotResponse = results.data.choices[0].text;
  
//     messagesEL.innerHTML += `<div class="message bot-message">
//     <img src="./icons/chatbot.png" alt="bot icon"> <span>${chatbotResponse}</span>
//     </div>`;
//   }

//    formEL.addEventListener("submit", (event) => {
//         e.preventDefault();
//         chat()
//     });



