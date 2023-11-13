const loadFeatures = async ()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/ai/tools")
    const data = await res.json()
    const features = data.data.tools;
    // console.log(features);
   showFeatures(features);
}

function showFeatures(features){
    // console.log(features);
    const featuresContainer = document.getElementById("features-container");
    features.forEach(item => {
        // console.log(item);
const featureCard = document.createElement("div")
      featureCard.classList=`card card-compact w-96 bg-base-100 shadow-xl`
      featureCard.innerHTML=`
      
      <figure><img src="${item?.image || 'Picture will be publish soon'}" alt="Shoes" /></figure>
      <div class="card-body">
      <p class="card-title">Features:<ol>${item?.features}</ol></p>
        <h2 class="card-title">${item?.name}</h2>
        <p class="card-title">published:${item?.published_in}</p>
        <p>${item?.description || "Description is not published yet"}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Show In Details Now</button>
        </div>
      </div>
      
      `
      featuresContainer.appendChild(featureCard)
    

    });
}

loadFeatures();