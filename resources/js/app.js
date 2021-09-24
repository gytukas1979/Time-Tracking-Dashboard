let optionButtons = document.querySelectorAll('.main__btn');
let optionButtonsDiv = document.querySelector('.main__buttons');

function fetchFunction(option) {
    fetch('resources/json/data.json')
    .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for(var i = 0; i < data.length; i++) {
        let currentTime = data[i]['timeframes'][option]['current'];
        let previousTime = data[i]['timeframes'][option]['previous'];

        let timePeriod;
        if (option == 'daily') {
            timePeriod = 'day';
        } else if (option == 'weekly') {
            timePeriod = 'week';
        } else {
            timePeriod = 'month';
        }
        
        document.querySelectorAll('.main__heading-time')[i].innerText = currentTime + 'hrs';
        document.querySelectorAll('.main__result-text p')[i].innerText = 'Last ' + timePeriod + ' - ' + previousTime + 'hrs';
    }
  })
}

optionButtonsDiv.addEventListener('click', (e) => {
   if (e.target.classList.contains('main__btn')) {
       if(e.target.classList.value == 'main__btn') {
           for (btn of optionButtons) {
               if (btn.classList.value == 'main__btn active') {
                   btn.classList.remove('active');
               }
           }
           let option = e.target.innerText;
           option = option.toLowerCase();
           e.target.classList.add('active');
           fetchFunction(option);
       }
    }
})
