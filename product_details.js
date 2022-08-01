function Specification(){
    return(
        <div class="spe-div">       
            <div class="spe-div-sm">
                <p class="spe">Specifications</p>
            </div>
            <div class="d-ul">
                <ul class="d-li"><li>Intel Core i7 2.70 GHz processor provides lightning fast speed and peak performance for the toughest of tasks and games</li>
            <li>Memory storage capacity: 4.0</li>
            <li>Operating system: Windows 1</li>
            <li> Package Weight: 4.05 kilograms</li></ul>
            </div>    
        </div>
    )
}

function specifi(){
    return(
        ReactDOM.render(<Specification />, document.getElementById('speci'))
    )
}

function Verified(){
    return(
        <div class="fe-div">
            <div class="ve-div">
                <h4 class="ve-h4">Verified Customer Feedback</h4>
            </div>
            <div class="ra-div">
                <div class="main-ra-div">
                    <p class="main-ra">4.5</p>
                </div>
                <div class="ra-img-ma">
                    <img class="img-ma-1" src="./pd-img/star.png" alt=""></img>
                    <img class="img-ma-2" src="./pd-img/star.png" alt=""></img>
                    <img class="img-ma-3" src="./pd-img/star.png" alt=""></img>
                    <img class="img-ma-4" src="./pd-img/star.png" alt=""></img>
                    <img class="img-ma-5" src="./pd-img/ri-star-half-fill.png" alt=""></img>
                </div>
                <div>
                    <p class="to-r">20,063</p>
                </div>      
                <div class="forw">
                    <a href="#"><img src="./pd-img/arrow-right.png" alt=""></img></a>
                </div>
            </div>        
            <div>
                <div class="to-5">
                5
                </div>
                <div class="to-4">
                4
                </div>
                <div class="to-3">
                3
                </div>
                <div class="to-2">
                2
                </div>
                <div class="to-1">
                1
                </div>
            </div>
            <div class="sp-div">
                <div class="sp-5-div">
                    <span class="sp-5"></span>
                </div>
                <div class="sp-4-div">
                    <span class="sp-4"></span>
                </div>
                <div class="sp-3-div">
                    <span class="sp-3"></span>
                </div>
                <div class="sp-2-div">
                    <span class="sp-2"></span>
                </div>
                <div class="sp-1-div">
                    <span class="sp-1"></span>
                </div>
            </div>
            <div class="rio-div">
                <div class="D-div">
                    <p class="D">D</p>
                </div>
                <div class="DR">
                    <p class="DR-text">David Rio</p>
                </div>
                <div class="star">
                    <img class="img-1" src="./pd-img/star.png" alt=""></img>
                    <img class="img-2" src="./pd-img/star.png" alt=""></img>
                    <img class="img-3" src="./pd-img/star.png" alt=""></img>
                    <img class="img-4" src="./pd-img/star.png" alt=""></img>
                    <img class="img-5" src="./pd-img/star.svg" alt=""></img>
                </div>
                    <div class="date-ra">
                        <p>17/07/2020</p>
                    </div>
                <div class="ra-text">
                    <p>It could probably be a factory error but mine didn’t come with a manual, that said the life span of the device is integring, 3 years and counting ...</p>
                </div>
            </div>
        </div>
    )
}

function verif(){
    return(
        ReactDOM.render(<Verified />, document.getElementById('veri'))
    )
}

function Product(){
    return(
        <div class="pro-d2">
            <div class="pro">
                <h4 class="pro-text">Product Details</h4>
            </div>
            <p class="pro-de">Lenovo ThinkPad P1 Gen 3 20TH003DUS 15.6" Mobile Workstation - Full HD - 1920 x 1080 - Intel Core i7 10th Gen i7-10850H Hexa-core (6 Core) 2.70 GHz - 32 GB RAM - 512 GB SSD - Black - P Series Mobile Workstations
                These systems feature lightning-fast graphics and processing, and the latest cutting-edge technology to handle your compute-intensive needs-in surprisingly light packages.Intel Core i7 2.70 GHz processor provides lightning fast speed and peak performance for the toughest of tasks and games</p>
        </div>
    )
}

ReactDOM.render(<Product />, document.getElementById('prod'))

function produ(){
    return(
        ReactDOM.render(<Product />, document.getElementById('prod'))
    )
}


function specifimo(){
    return(
        ReactDOM.render(<Specification />, document.getElementById('prod'))
    )
}

function verifmo(){
    return(
        ReactDOM.render(<Verified />, document.getElementById('prod'))
    )
}

const handburger = document.querySelector(".dropd-mobile");

handburger.addEventListener("click", () => {
    handburger.classList.toggle("active");
})

// document.querySelectorAll(".search").forEach(n => n.addEventListener("click", () => {
//    handburger.classList.remove("active");
//}))

function Comment(){
    return(
        div
    )
}
