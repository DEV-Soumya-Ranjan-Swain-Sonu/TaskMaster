if(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches){
    localStorage.theme = 'black';
}