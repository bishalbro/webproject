

const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
//yaha middle layer class ko access gariraxau
const datahide = document.querySelector('.middle_layer');
// jo hamro middle layer class nam ko div  hai usma consa css class add karna hai ya nahi tackel garna sakchhau

// we use addEventListener() which takes two parameter
//

//we use asyn await
const getInfo = async(event) =>{
	/*The preventDefault() method is used to prevent the browser from executing the default action of
	 the selected element. It can prevent the user from processing the request by clicking the link. */
	//  event.preveDefault() submit na ho jaye vanna ko lagi
	 event.preventDefault();
	 //preventdefault garda jun page ma chau tehi roknchha
	 //yo nagarda yesle ? garthyo
		let cityVal =cityName.value;

		if(cityVal=== ""){
			city_name.innerText = `Please write name before search`;
			//class add hunxa
			datahide.classList.add('data_hide');

		}else{

		
			//jab proper ho toh tabi url ke sath khele natra nai
			try{

			//&units=metric is for celcious ma data milos vanna ko lagi

			let url =`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9fadd50c343afc61834b876fe35f37ed`;
			//jab bi fetch api ko call garxau taba url ko pass garne
			//fetch api ko through data fetch garna try gariraxxu in
			// the form of json kei time linxa toh hami wait karnge taba samma
			const response = await fetch(url);
			// json ko form ma data aai rako xa
			
			//pure java script ma - json lai object ma convert gardeko
			const data = await response.json();
			// yo object data lai aba array ma rakhne
			//yaha array ko under data ko pass gareko
			const arrData = [data];

			city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
			temp_real_val.innerText=arrData[0].main.temp;
			// temp_status.innerText =arrData[0].weather[0].main;
			
			const tempMod = arrData[0].weather[0].main;
			//condition to checl sunnny or cloudy
			if(tempMod === "Clear" ) {
				// pura ka pura code change karna hai toj innerHTML
				temp_status.innerHTML ="<i class='fas fa-sun' style='color:#eccc68;'></i>";

			}else if(tempMod === "Clouds"){
				temp_status.innerHTML ="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";

			}else if(temMod === "Rain"){
				temp_status.innerHTML ="<i class='fas fa-rain' style='color:#a4b0be;'></i>";
			
			}else{
				temp_status.innerHTML ="<i class='fas fa-cloud' style='color:#eccc68;'></i>";

			}

					//cal ke din sab kuch sahi hai toh tab instead of add we did remove
				//try ke under data mili rako xa vane
		datahide.classList.remove('data_hide');

		}
			catch{
				city_name.innerText = `please write the city name properly`;

				//kuch error aata hai toh bi hide karna hai
				datahide.classList.add('data_hide');
			}

		}
}

// getInfo function tya parentheses na dine kina ki tehi diyo vane tei call hunxa
submitBtn.addEventListener("click", getInfo);