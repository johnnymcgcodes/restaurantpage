export {tabs};
import {menuTab} from './Menu';
import {hours} from './hoursOpen';
import {location} from './location';

const tabs = createTabs();

function createTabs(){

const tabDiv = document.createElement("div");
tabDiv.className = "page"
tabDiv.innerHTML = 
                  '<div class="tabsy">' +
                    menuTab +
                    hours +
                    location +
                  '</div>';


document.getElementById("content").appendChild(tabDiv);

};
