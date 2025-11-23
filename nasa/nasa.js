const BASE_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'dQfwmNYPWTKcqhIoFgdLHrzZDbdwgWeyypdjzkEh'
const inputOneDate = document.getElementById('oneDate');
const inputFirstDate = document.getElementById('twoDate1');
const inputSecondDate = document.getElementById('twoDate2');
const inputCount = document.getElementById('count');
let currentDate = getFormattedDate(new Date());

//Set count borders
inputCount.min = 1;
inputCount.max = 10;

inputCount.addEventListener('change', () => {
    if(inputCount.value < 1) inputCount.value = 1;
    if(inputCount.value > 10) inputCount.value = 10;
});

//Set date borders
const MIN_DATE = "1996-06-16";
inputOneDate.max = currentDate;
inputOneDate.min = MIN_DATE;
inputFirstDate.max = currentDate;
inputFirstDate.min = MIN_DATE;
inputSecondDate.max = currentDate;
inputSecondDate.min = MIN_DATE;

//Check first and second dates
inputFirstDate.addEventListener('change', () => {
    inputSecondDate.min = inputFirstDate.value;
    // if (inputSecondDate.min > inputSecondDate.value)
    //     inputSecondDate.value =  inputSecondDate.min;
    inputFirstDate.style.border = '';
});

inputSecondDate.addEventListener('change', () => {
    inputFirstDate.max = inputSecondDate.value;
})

function displayResult(data, container) {
    const wrap = document.createElement('div');
    wrap.style.marginBottom = '20px';
    const h3 = document.createElement('h3');
    wrap.appendChild(h3);
    if (data.media_type === 'image') {
        const img = document.createElement('img');
        img.src = data.hdurl||data.url;
        img.alt = data.title||"APOD image";
        img.style.maxWidth = '800px';
        img.style.maxHeight = '600px';
        img.style.width = '100%';
        img.style.height= 'auto';
        wrap.appendChild(img);
    } else if (data.media_type === 'video') {
        const iframe = document.createElement('iframe');
        iframe.src = data.url;
        iframe.width = '560';
        iframe.height = '315';
        iframe.allowFullscreen = true;
        iframe.loading = 'lazy';
        wrap.appendChild(iframe);
        if (data.thumbnail_url) {
            const thumb = document.createElement('img');
            thumb.src = data.thumbnail_url;
            thumb.alt = "Video thumbnail";
            wrap.appendChild(thumb);
        }
    } else {
        const p = document.createElement('p');
        p.textContent = `unsupported media type ${data.media_type}`;
        wrap.appendChild(p);
    }
    const meta = document.createElement('p');
    meta.textContent = data.date || '';
    h3.textContent = data.title;
    wrap.appendChild(meta);
    const desc = document.createElement('p');
    desc.textContent = data.explanation || "no explanation";
    wrap.appendChild(desc);
    container.appendChild(wrap);
}

async function fetchPicture(params = {}) {
    const resultContainer = document.querySelector('#resultContainer');

    resultContainer.innerHTML = '';
    const baseParams = {
        api_key: API_KEY,
        thumbs: true,
    };
    const qp = new URLSearchParams({...baseParams, ...params});

    const isSingleDate = !!params.date;

    const doFetch = async (searchParams) => {
        const response = await fetch(`${BASE_URL}?${searchParams}`);
        if (!response.ok) {throw response;}
        return response.json();
    }

    try{
        const data = await doFetch(qp);
        if(isSingleDate){
            displayResult(data, resultContainer);
        } else {
            for (let i = 0; i < data.length ; i++) {
                displayResult(data[i], resultContainer);
            }
        }
    } catch (error) {
       // console.log("In error block in fetchPicture");
        return true;
    }
}

function getOnePicture() {
    let oneDate =  inputOneDate.value || currentDate;
    fetchPicture({date: oneDate});
}

function getPicturesByDates() {
    if(!inputFirstDate.value) {
        inputFirstDate.style.border = '3px solid red';
        return;
    }
    let firstDate =  inputFirstDate.value;
    let secondDate =  inputSecondDate.value;
    fetchPicture({start_date: firstDate, end_date: secondDate});
}

function getRandomPictures() {
    let count = inputCount.value;
    if(count < 1){ count = 1;}
    fetchPicture({count: count});
}

function getFormattedDate(date) {
    return date.toISOString().split('T')[0];
}

async function getLastPicture() {
    for(let i = 0; i < 5; i++) {
        let acDate = getFormattedDate(new Date(Date.now()  - (24 * 60 * 60 * 1000) * i+ (24 * 60 * 60 * 1000)*0));
        let b = await fetchPicture({date: acDate});
        if (!b) return;
    }
}

getLastPicture();