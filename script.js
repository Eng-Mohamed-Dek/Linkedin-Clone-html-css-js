// DOM selecting 
const profileMenu = document.getElementById('profile')
const sidebarActivity = document.getElementById('sidebarActivity')
const showMoreLink = document.getElementById('showMoreLink')

// Menu javascript code 
function toggleMenu() {
    profileMenu.classList.toggle('open-menu')
}

// sidebar activity code 
function showMore () {
    sidebarActivity.classList.toggle('open-sidebar-activity')

    // change showmore text 
    if (sidebarActivity.classList.contains('open-sidebar-activity')) {
        showMoreLink.innerHTML = "Show Less <b> - </b>"  
    } else {
        showMoreLink.innerHTML = "Show More <b> + </b>"  
    }
}