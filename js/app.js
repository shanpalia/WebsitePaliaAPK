/* =============================================
   PaliaAPK HUB - app.js
   Main Application
============================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("PaliaAPK HUB Started");

    initTheme();

    initBackToTop();

    initSearch();

    initEmptySections();

});


/* =============================================
   Theme
============================================= */

function initTheme(){

    const btn = document.getElementById("themeToggle");

    if(!btn) return;

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme){

        document.documentElement.setAttribute(

            "data-theme",

            savedTheme

        );

    }

    btn.addEventListener("click",()=>{

        const current =

        document.documentElement.getAttribute(

            "data-theme"

        );

        const next =

        current==="dark"

        ? "light"

        : "dark";

        document.documentElement.setAttribute(

            "data-theme",

            next

        );

        localStorage.setItem(

            "theme",

            next

        );

    });

}


/* =============================================
   Back To Top
============================================= */

function initBackToTop(){

    const btn =

    document.getElementById("backToTop");

    if(!btn) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            btn.classList.add("show");

        }

        else{

            btn.classList.remove("show");

        }

    });

    btn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/* =============================================
   Search
============================================= */

function initSearch(){

    const input =

    document.getElementById("searchInput");

    if(!input) return;

    input.addEventListener("keyup",(e)=>{

        console.log(

            "Searching...",

            e.target.value

        );

    });

}


/* =============================================
   Empty Placeholder
============================================= */

function initEmptySections(){

    [

        "featuredApps",

        "trendingApps",

        "latestApps"

    ].forEach(id=>{

        const section =

        document.getElementById(id);

        if(!section) return;

        section.innerHTML =

        `
        <div class="empty-apps">

            <h3>

                No Apps Yet

            </h3>

            <p>

                Apps published from
                Admin Dashboard
                will appear here.

            </p>

        </div>
        `;

    });
/* =============================================
   Supabase Configuration
============================================= */

// TODO:
// Phase 2 में यहां अपनी Supabase credentials डालनी हैं.
//
// const SUPABASE_URL = "https://ralinnuegsbuvlhwpzln.supabase.co";
// const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhbGlubnVlZ3NidXZsaHdwemxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyOTU2NDIsImV4cCI6MjA5NTg3MTY0Mn0.hIec6UxRx5gzSMTi5oJ3_xXw3d1QKCmKsPF-stBwIFE";
//
// const supabase = window.supabase.createClient(
//      SUPABASE_URL,
//      SUPABASE_ANON_KEY
// );


/* =============================================
   Load Apps
============================================= */

async function loadApps(){

    console.log("Loading apps...");

    // Phase 2:
    // Supabase से Apps लोड होंगे।

}


/* =============================================
   Featured Apps
============================================= */

async function loadFeaturedApps(){

    console.log("Featured Apps");

}


/* =============================================
   Trending Apps
============================================= */

async function loadTrendingApps(){

    console.log("Trending Apps");

}


/* =============================================
   Latest Apps
============================================= */

async function loadLatestApps(){

    console.log("Latest Apps");

}


/* =============================================
   Render App Card
============================================= */

function renderAppCard(app){

    return `

    <article class="app-card">

        <img
            class="app-icon"
            src="${app.icon_url}"
            alt="${app.name}">

        <h3 class="app-name">

            ${app.name}

        </h3>

        <p class="app-developer">

            ${app.developer}

        </p>

        <span class="app-version">

            ${app.version}

        </span>

        <a

            href="app.html?id=${app.id}"

            class="install-button">

            View App

        </a>

    </article>

    `;

}


/* =============================================
   Render Empty
============================================= */

function renderEmpty(id){

    const box = document.getElementById(id);

    if(!box) return;

    box.innerHTML = `

        <div class="empty-apps">

            <h3>No Apps Available</h3>

            <p>

                Publish apps from Admin Dashboard.

            </p>

        </div>

    `;

}


/* =============================================
   Refresh
============================================= */

function refreshStore(){

    loadApps();

    loadFeaturedApps();

    loadTrendingApps();

    loadLatestApps();

}
}
